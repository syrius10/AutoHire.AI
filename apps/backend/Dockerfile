# Use Node.js base image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json and install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod

# Copy the rest of the application files
COPY . .

# Expose the port the server runs on
EXPOSE 5001

# Start the application
CMD ["node", "server.js"]
