# Stage 1: Build dependencies and Prisma client
FROM node:20-alpine AS build

WORKDIR /logiglo_backend_2.0

# Copy package files
COPY package*.json ./

# Install all dependencies (dev included for prisma generate)
RUN npm ci

# Copy everything else
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Stage 2: Production image
FROM node:20-alpine

WORKDIR /logiglo_backend_2.0

# Copy the entire app from build stage (everything)
COPY --from=build /logiglo_backend_2.0 /logiglo_backend_2.0

# Expose port
EXPOSE 3000

ENV NODE_ENV=production

# Run migrations + start server
CMD ["sh", "-c", "npx prisma migrate deploy && npm run start"]
