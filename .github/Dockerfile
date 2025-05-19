# Stage 1: Build stage
FROM node:20-alpine AS build

WORKDIR /logiglo_backend_2.0

# Install build dependencies for Sharp, Prisma, etc.
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    libc6-compat \
    vips-dev \
    libpng-dev \
    cairo-dev \
    jpeg-dev \
    pango-dev \
    giflib-dev \
    openssl

# Copy package files and install dependencies (including dev)
COPY package*.json ./
RUN npm ci

# Copy the rest of the application
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Stage 2: Production image
FROM node:20-alpine AS production

WORKDIR /logiglo_backend_2.0

# Install runtime dependencies (no build tools needed here)
RUN apk add --no-cache \
    libc6-compat \
    vips \
    libpng \
    cairo \
    jpeg \
    pango \
    giflib \
    libpq \
    openssl

# Copy everything from build stage
COPY --from=build /logiglo_backend_2.0 /logiglo_backend_2.0

# Prune dev dependencies
RUN npm prune --production

# Expose the port your app runs on
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production

# Run database migration and start server
CMD ["sh", "-c", "npx prisma migrate deploy && npm run start"]
