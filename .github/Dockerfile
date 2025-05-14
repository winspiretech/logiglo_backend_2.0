# Stage 1: Build dependencies and Prisma client
FROM node:20-alpine AS build

# Set working directory
WORKDIR /logiglo_backend_2.0

# Copy package.json and package-lock.json for caching
COPY package*.json ./

# Install all dependencies (including dev for Prisma CLI)
RUN npm ci

# Copy Prisma schema and other necessary files
COPY prisma ./prisma

# Generate Prisma client (output to generated folder by default)
RUN npx prisma generate

# Copy the rest of the application
COPY . .

# Stage 2: Production image (slimmer and optimized)
FROM node:20-alpine

# Set working directory
WORKDIR /logiglo_backend_2.0

# Copy necessary files from build stage
COPY --from=build /logiglo_backend_2.0/node_modules ./node_modules
COPY --from=build /logiglo_backend_2.0/package*.json ./
COPY --from=build /logiglo_backend_2.0/prisma ./prisma
COPY --from=build /logiglo_backend_2.0/generated ./generated
COPY --from=build /logiglo_backend_2.0/src ./src
COPY --from=build /logiglo_backend_2.0/controllers ./controllers
COPY --from=build /logiglo_backend_2.0/middlewares ./middlewares
COPY --from=build /logiglo_backend_2.0/models ./models
COPY --from=build /logiglo_backend_2.0/routes ./routes
COPY --from=build /logiglo_backend_2.0/services ./services
COPY --from=build /logiglo_backend_2.0/uploads ./uploads
COPY --from=build /logiglo_backend_2.0/utils ./utils
COPY --from=build /logiglo_backend_2.0/validation ./validation
COPY --from=build /logiglo_backend_2.0/views ./views
COPY --from=build /logiglo_backend_2.0/app.js ./app.js
COPY --from=build /logiglo_backend_2.0/server.js ./server.js

# Expose backend port
EXPOSE 3000

# Set NODE_ENV to production
ENV NODE_ENV=production

# Run migrations and start the server
CMD ["sh", "-c", "npx prisma migrate deploy && npm run start"]