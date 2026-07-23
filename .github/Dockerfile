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

# Stage 2: Production image
FROM node:20-slim

WORKDIR /logiglo_backend_2.0

# Install runtime dependencies plus build tools needed to compile sharp
# from source (npm's prebuilt linux-x64 binaries require x86-64-v2 CPU
# instructions that some hosts don't support)
RUN apt-get update && apt-get install -y \
    libvips-dev \
    libpq-dev \
    ca-certificates \
    python3 \
    build-essential \
    pkg-config \
    && rm -rf /var/lib/apt/lists/*

# Copy everything from build stage
COPY --from=build /logiglo_backend_2.0 /logiglo_backend_2.0

# Rebuild sharp from source against the system libvips instead of using the
# prebuilt binary, which requires a CPU microarchitecture level not supported
# on this deployment host
RUN npm install --build-from-source sharp

# Remove dev dependencies
RUN npm prune --production

# Set environment variables
ENV NODE_ENV=production

# Expose the app port
EXPOSE 3000

# Run DB migration and start the app
CMD ["sh", "-c", "npx prisma migrate deploy && npm run start"]
