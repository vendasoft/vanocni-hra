# Use an official Node runtime as the base image
FROM node:19

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Build your Angular app
RUN npm run build

# Install a simple HTTP server to serve static content
RUN npm install -g http-server

# Set the command to start the node server
CMD ["http-server", "dist/your-app-name"]

# Expose the port the app runs on
EXPOSE 8080