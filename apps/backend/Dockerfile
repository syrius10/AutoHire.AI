# Use Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package manager files first (better for caching)
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copy the rest of the code
COPY . .

# Expose the port
EXPOSE 5001

# Start the application
CMD ["pnpm", "start"]
