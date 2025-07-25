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

# Install runtime dependencies
RUN apt-get update && apt-get install -y \
    libvips42 \
    libpq-dev \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Copy everything from build stage
COPY --from=build /logiglo_backend_2.0 /logiglo_backend_2.0

# Reinstall sharp for the production environment
RUN npm install --os=linux --cpu=x64 sharp

# Remove dev dependencies
RUN npm prune --production

# Set environment variables
ENV NODE_ENV=production

# Expose the app port
EXPOSE 3000

# Run DB migration and start the app
CMD ["sh", "-c", "npx prisma migrate deploy && npm run start"]
