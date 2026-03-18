# syntax=docker/dockerfile:1

# ── Build snake ────────────────────────────────────────
FROM node:20-alpine AS build-snake
WORKDIR /app
RUN apk add --no-cache git
ADD https://api.github.com/repos/adambar88/snake/git/refs/heads/main /tmp/snake-version
RUN git clone https://github.com/adambar88/snake.git .
RUN npm ci && npm run build

# ── Build 2048 ─────────────────────────────────────────
FROM node:20-alpine AS build-2048
WORKDIR /app
RUN apk add --no-cache git
ADD https://api.github.com/repos/adambar88/2048/git/refs/heads/main /tmp/2048-version
RUN git clone https://github.com/adambar88/2048.git .
RUN npm ci && npm run build

# ── Build apps-website hub ─────────────────────────────
FROM node:20-alpine AS build-hub
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ── Production stage ───────────────────────────────────
FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/* /etc/nginx/conf.d/default.conf
RUN apk add --no-cache wget

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Hub landing page
COPY --from=build-hub /app/dist/ /usr/share/nginx/html/

# Games served as static files — no cross-container networking needed
COPY --from=build-snake /app/dist/ /usr/share/nginx/html/snake/
COPY --from=build-2048  /app/dist/ /usr/share/nginx/html/2048/

# Debug: verify file structure
RUN echo "=== Hub ===" && ls -la /usr/share/nginx/html/ && \
    echo "=== Hub assets ===" && ls -la /usr/share/nginx/html/assets/ && \
    echo "=== Snake ===" && ls -la /usr/share/nginx/html/snake/ && \
    echo "=== 2048 ===" && ls -la /usr/share/nginx/html/2048/

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD wget -qO- http://localhost/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
