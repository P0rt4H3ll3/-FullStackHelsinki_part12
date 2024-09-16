# Base image
FROM node:20 AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY --chown=node:node . .

# Set environment variable
ENV NODE_ENV=production

# Build the application (if applicable)
# RUN npm run build  # Uncomment if you have a build step

# Use a non-root user to run the application
USER node

# Command to run the application
CMD ["npm", "start"]
