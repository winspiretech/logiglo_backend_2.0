<<<<<<< HEAD
# Stage 1: Build dependencies and Prisma client
FROM node:20-alpine AS build
=======
# Use official Node.js LTS image
FROM node:20-alpine AS base
>>>>>>> b71b593c19b495cbe0177161de4938a098073f89

# Set working directory
WORKDIR /logiglo_backend_2.0

<<<<<<< HEAD
# Copy only package.json and package-lock.json for caching
COPY package*.json ./

# Install only production dependencies (for production build)
RUN npm install --omit=dev

# Copy the rest of the application
COPY . .

# Generate Prisma client (separate build step)
RUN npx prisma generate

# Stage 2: Production image (slimmer and optimized)
FROM node:20-alpine

# Set working directory
WORKDIR /logiglo_backend_2.0

# Copy dependencies and built application from the build stage
COPY --from=build /logiglo_backend_2.0 /logiglo_backend_2.0

# Expose backend port
EXPOSE 3000

# Set NODE_ENV to production (ensure it's in production mode)
ENV NODE_ENV=production

# Run the server (production start command)
CMD ["npm", "run", "start"]
=======
# Copy package files separately for caching
COPY package*.json ./

# Install dependencies only (without dev dependencies)
RUN npm install 

# Copy entire project
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Expose backend port
EXPOSE 3000

# Run the server
CMD ["npm", "server.js"]
>>>>>>> b71b593c19b495cbe0177161de4938a098073f89
