# Stage 1: Install dependencies and build Prisma client
FROM node:20-alpine AS build

WORKDIR /logiglo_backend_2.0

# Install build dependencies for Prisma and OpenSSL
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    openssl \
    && rm -rf /var/cache/apk/*

# Copy package files for caching
COPY package*.json ./

# Install all dependencies (including dev for Prisma client generation)
RUN npm ci

# Copy the rest of the application (excluding generated folder)
COPY . .

# Generate Prisma client in ./generated/prisma
RUN npx prisma generate

# Stage 2: Production image
FROM node:20-alpine

WORKDIR /logiglo_backend_2.0

# Install runtime dependencies for Prisma
RUN apk add --no-cache \
    libpq \
    openssl \
    && rm -rf /var/cache/apk/*

# Copy built files and dependencies from build stage
COPY --from=build /logiglo_backend_2.0 /logiglo_backend_2.0

# Remove devDependencies to reduce image size
RUN npm prune --production

# Expose application port
EXPOSE 3000

# Set production environment
ENV NODE_ENV=production

# Run Prisma migrations and start the server
CMD ["sh", "-c", "npx prisma migrate deploy && npm run start"]