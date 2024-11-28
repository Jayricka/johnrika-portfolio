# Use the Node.js 20 version as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and yarn.lock (if exists) to the working directory
COPY package*.json ./

# Install dependencies using yarn
RUN yarn install

# Copy the rest of the application files into the container
COPY . .

# Build the React app for production
RUN yarn build

# Expose port 3000 for the app
EXPOSE 3000

# Serve the built app using a static server (yarn serve)
CMD ["yarn", "serve", "-s", "build"]
