# syntax=docker/dockerfile:1

###############################################################################
# Stage 1: install npm dependencies and generate the Prisma client
###############################################################################
FROM node:20-slim AS deps

WORKDIR /logiglo_backend_2.0

# python3/build-essential let npm compile any native deps (e.g. bcrypt) that
# don't ship a prebuilt binary for this platform
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 \
    build-essential \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm ci

COPY . .
RUN npx prisma generate

###############################################################################
# Stage 2: compile libvips from source
#
# sharp 0.34 requires libvips >=8.17.3, but Debian only packages 8.14.1
# (bookworm) / 8.16.1 (trixie), and sharp's own prebuilt linux-x64 binaries
# require x86-64-v2 CPU instructions unsupported on the deployment host.
# Compiling libvips here, with the toolchain's default (baseline x86-64)
# target, satisfies the version requirement and stays CPU-compatible. Only
# /usr/local is carried forward - the compilers/build tools below never
# reach a later stage.
###############################################################################
FROM debian:bookworm-slim AS libvips-builder

WORKDIR /vips-src

RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    ca-certificates \
    xz-utils \
    build-essential \
    pkg-config \
    meson \
    ninja-build \
    python3 \
    libglib2.0-dev \
    libexpat1-dev \
    zlib1g-dev \
    libjpeg-dev \
    libpng-dev \
    libwebp-dev \
    libtiff-dev \
    liblcms2-dev \
    libexif-dev \
    libcgif-dev \
    librsvg2-dev \
    liborc-0.4-dev \
    && rm -rf /var/lib/apt/lists/*

ARG VIPS_VERSION=8.18.4
RUN curl -LO https://github.com/libvips/libvips/releases/download/v${VIPS_VERSION}/vips-${VIPS_VERSION}.tar.xz \
    && tar xf vips-${VIPS_VERSION}.tar.xz \
    && cd vips-${VIPS_VERSION} \
    && meson setup build --prefix=/usr/local --libdir=lib --buildtype=release \
    && ninja -C build \
    && ninja -C build install

###############################################################################
# Stage 3: compile sharp's native addon against the self-built libvips
#
# Kept separate from the production stage so its compilers and -dev headers
# never end up in the final image.
###############################################################################
FROM node:20-slim AS sharp-builder

WORKDIR /logiglo_backend_2.0

# node-gyp needs python3/build-essential/pkg-config to compile. vips-cpp.pc's
# Requires: field lists every codec libvips was built with (expat, jpeg, png,
# webp, tiff, rsvg/cairo, lcms2, exif, orc) - pkg-config resolves that whole
# chain as one unit, so if any of them is missing it refuses to emit
# --cflags for vips-cpp at all, not even glib's, which otherwise looks like a
# missing-glib error. All of them need to be installed here too, matching
# libvips-builder.
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 \
    build-essential \
    pkg-config \
    libglib2.0-dev \
    libexpat1-dev \
    libjpeg-dev \
    libpng-dev \
    libwebp-dev \
    libtiff-dev \
    liblcms2-dev \
    libexif-dev \
    libcgif-dev \
    librsvg2-dev \
    liborc-0.4-dev \
    && rm -rf /var/lib/apt/lists/*

COPY --from=libvips-builder /usr/local /usr/local
RUN echo "/usr/local/lib" > /etc/ld.so.conf.d/local.conf && ldconfig
ENV PKG_CONFIG_PATH=/usr/local/lib/pkgconfig

COPY --from=deps /logiglo_backend_2.0 /logiglo_backend_2.0

# node-gyp and sharp must be installed in the same command: a node-gyp
# installed by an earlier, separate `npm install` gets pruned as extraneous
# (it's not recorded in package-lock.json) before a later install's
# reconciliation pass runs sharp's build script, reintroducing
# "Please add node-gyp to your dependencies".
RUN npm install --no-save --build-from-source node-gyp sharp \
    && npm prune --production

###############################################################################
# Stage 4: production image
###############################################################################
FROM node:20-slim

WORKDIR /logiglo_backend_2.0

# Only the runtime shared libraries the self-built libvips links against -
# no compilers or -dev headers in the final image
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    libglib2.0-0 \
    libexpat1 \
    zlib1g \
    libjpeg62-turbo \
    libpng16-16 \
    libwebp7 \
    libwebpdemux2 \
    libwebpmux3 \
    libtiff6 \
    liblcms2-2 \
    libexif12 \
    libcgif0 \
    librsvg2-2 \
    liborc-0.4-0 \
    && rm -rf /var/lib/apt/lists/*

COPY --from=libvips-builder /usr/local /usr/local
RUN echo "/usr/local/lib" > /etc/ld.so.conf.d/local.conf && ldconfig

COPY --from=sharp-builder /logiglo_backend_2.0 /logiglo_backend_2.0

ENV NODE_ENV=production

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && npm run start"]
