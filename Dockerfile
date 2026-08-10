# ==========================================
# Stage 1: Build Angular Application
# ==========================================
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci || npm install

# Copy source code and build for production
COPY . .
RUN npm run build

# ==========================================
# Stage 2: Serve with Nginx (Railway Ready)
# ==========================================
FROM nginx:alpine

# Default PORT fallback if not provided by Railway
ENV PORT=80

# Copy compiled Angular browser assets
COPY --from=builder /app/dist/zeraus-baterias/browser /usr/share/nginx/html

# Copy Nginx template (Railway dynamic PORT is injected automatically via envsubst)
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

# Expose HTTP port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
