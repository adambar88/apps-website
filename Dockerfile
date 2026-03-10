# Build stage
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Production stage
FROM nginx:stable-alpine

# Remove default nginx config and replace with ours
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the hub landing page to the root
COPY --from=build /app/dist /usr/share/nginx/html

# Sub-apps are added at deploy time or via multi-stage builds.
# To include 2048, either:
#   1. Use docker-compose to mount/copy the 2048 build into /usr/share/nginx/html/2048/
#   2. Or extend this Dockerfile (see docker-compose.yml)

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
