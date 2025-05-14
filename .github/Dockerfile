# Use official Node.js LTS image
FROM node:20-alpine AS base

# Set working directory
WORKDIR /logiglo_backend_2.0

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
