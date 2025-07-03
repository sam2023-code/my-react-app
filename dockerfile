# Use a lightweight Nginx image to serve the React app
FROM nginx:alpine

# Copy the build output to the Nginx default directory
COPY dist/ /usr/share/nginx/html

# Copy the rest of your application files
COPY src src/

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]