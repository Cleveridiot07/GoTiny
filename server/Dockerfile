# Use Node.js as the base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

RUN npm install --omit=dev

# Install dependencies
RUN npm ci

# Copy all files
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Start the server
CMD ["node", "app.js"]
