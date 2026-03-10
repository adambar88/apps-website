# Build stage
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build && ls -la /app/dist/

# Production stage
FROM nginx:stable-alpine

# Remove default nginx welcome page and config
RUN rm -rf /usr/share/nginx/html/* /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the hub landing page to the root
COPY --from=build /app/dist/ /usr/share/nginx/html/
RUN ls -la /usr/share/nginx/html/

# Sub-apps are proxied to their own containers via nginx

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
