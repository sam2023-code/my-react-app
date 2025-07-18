# Stage 1: Build the React Application
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./

RUN npm cache clean --force
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build


# Stage 2: Setup the Nginx Server to serve the React Application
FROM nginx:1.25.0-alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY fullchain.pem /etc/letsencrypt/live/www.jasonpakpak0423.com/fullchain.pem
COPY privkey.pem /etc/letsencrypt/live/www.jasonpakpak0423.com/privkey.pem
COPY options-ssl-nginx.conf /etc/letsencrypt/options-ssl-nginx.conf
COPY ssl-dhparams.pem /etc/letsencrypt/ssl-dhparams.pem

# Expose port 80 for HTTP traffic and port 443 for HTTPS
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]