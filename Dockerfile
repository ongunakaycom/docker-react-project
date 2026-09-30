# ---------- Stage 1: Build ----------
FROM node:20-alpine AS build

WORKDIR /app

# Install deps first (layer caching)
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# Copy source & build
COPY . .
RUN npm run build

# ---------- Stage 2: Serve ----------
FROM nginx:1.27-alpine AS runtime

# Remove default nginx config
RUN rm -rf /etc/nginx/conf.d/default.conf

# Copy hardened nginx config
COPY docker/nginx.conf /etc/nginx/conf.d/app.conf

# Copy built static assets
COPY --from=build /app/build /usr/share/nginx/html

# Drop privileges: run as non-root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup \
    && chown -R appuser:appgroup /usr/share/nginx/html \
    && chown -R appuser:appgroup /var/cache/nginx \
    && chown -R appuser:appgroup /var/log/nginx \
    && touch /var/run/nginx.pid \
    && chown appuser:appgroup /var/run/nginx.pid

USER appuser

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]