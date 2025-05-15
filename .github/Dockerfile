# Stage 1: Install dependencies and build Prisma client
FROM node:20-slim AS build

WORKDIR /logiglo_backend_2.0

# Install only necessary tools (no sharp / native deps)
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 \
    && rm -rf /var/lib/apt/lists/*

# Copy package files first for caching layers
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of your app
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Stage 2: Production image
FROM node:20-slim

WORKDIR /logiglo_backend_2.0

# Copy production-only dependencies and built Prisma client
COPY --from=build /logiglo_backend_2.0 /logiglo_backend_2.0

# Expose your app port
EXPOSE 3000

# Set environment to production
ENV NODE_ENV=production

# Run Prisma migrations and start the server
CMD ["sh", "-c", "npx prisma migrate deploy && npm run start"]
