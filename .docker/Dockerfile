# Use the official Nginx image from Docker Hub
FROM nginx:alpine

# Copy the content of your webpage to the appropriate directory in the Nginx container
COPY . /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
