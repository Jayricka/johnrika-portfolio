# Build stage
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy the rest of the application files into the container
COPY . .

# Build the app (if needed, run your build process like webpack)
RUN yarn build

# Production stage (nginx)
FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy your custom nginx config
COPY nginx.conf /etc/nginx/conf.d/

# Copy the built app from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
