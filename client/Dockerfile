# ===== Frontend (React App) =====
FROM node:18-alpine AS frontend

WORKDIR /app

# Copy React app package files
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy full React app
COPY . .

# Build static production files
RUN npm run build

# Serve build using simple Node server
RUN npm install -g serve

EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
