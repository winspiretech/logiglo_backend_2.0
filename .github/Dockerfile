# Stage 1: Build stage
FROM node:20-slim AS build

WORKDIR /logiglo_backend_2.0

# Install required build tools
RUN apt-get update && apt-get install -y \
    python3 \
    build-essential \
    pkg-config \
    libvips-dev \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the application
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Stage 2: libvips build stage
#
# sharp's prebuilt linux-x64 binaries (and Debian's own libvips-dev package,
# even on trixie) are too old / require CPU instructions (x86-64-v2) that
# this deployment host doesn't support, so libvips is compiled from source
# here, against the host toolchain's default (baseline x86-64) target, and
# only the resulting /usr/local is carried into the production image.
FROM debian:bookworm-slim AS libvips-builder

WORKDIR /vips-src

RUN apt-get update && apt-get install -y \
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

# Stage 3: Production image
FROM node:20-slim

WORKDIR /logiglo_backend_2.0

# Install libpq-dev/ca-certificates, the toolchain needed to compile sharp's
# native addon (node-gyp needs python3/build-essential/pkg-config), and the
# runtime libraries the self-built libvips above was linked against
RUN apt-get update && apt-get install -y \
    libpq-dev \
    ca-certificates \
    python3 \
    build-essential \
    pkg-config \
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

# Bring in the self-built libvips (headers + .pc file are needed to compile
# sharp against it below; only the .so files matter at runtime)
COPY --from=libvips-builder /usr/local /usr/local
RUN echo "/usr/local/lib" > /etc/ld.so.conf.d/local.conf && ldconfig
ENV PKG_CONFIG_PATH=/usr/local/lib/pkgconfig

# Copy everything from build stage
COPY --from=build /logiglo_backend_2.0 /logiglo_backend_2.0

# Rebuild sharp from source against the self-built libvips instead of using
# the prebuilt binary, which requires a CPU microarchitecture level not
# supported on this deployment host. sharp's build script does a local
# `require('node-gyp')`, so node-gyp must be installed into node_modules
# (not globally) to be found.
RUN npm install --no-save node-gyp && npm install --build-from-source sharp

# Remove dev dependencies
RUN npm prune --production

# Set environment variables
ENV NODE_ENV=production

# Expose the app port
EXPOSE 3000

# Run DB migration and start the app
CMD ["sh", "-c", "npx prisma migrate deploy && npm run start"]
