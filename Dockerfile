# Use the Node.js 20 version as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies using yarn (with --production to exclude devDependencies)
RUN yarn install --production

# Copy the rest of the application files into the container
COPY . .

# Build the React app for production inside the container
RUN yarn build

# Expose port 80 for the app (since it's running in production)
EXPOSE 80

# Install a simple static server to serve the built files
RUN yarn global add serve

# Serve the built app using serve
CMD ["serve", "-s", "build", "-l", "80"]
