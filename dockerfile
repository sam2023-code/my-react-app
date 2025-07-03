# Use a lightweight Nginx image to serve the React app
FROM nginx:alpine AS build
WORKDIR /app
COPY dist/ /usr/share/nginx/html
COPY . ./

# Stage 2 - the production environment
FROM nginx:alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]