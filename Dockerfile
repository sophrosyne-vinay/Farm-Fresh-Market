# ===== Backend (Node.js API) =====
FROM node:18-alpine AS backend

WORKDIR /app

# Copy backend package files
COPY package*.json ./

# Install dependencies inside the container
RUN npm install

# Copy backend code
COPY . .

# Expose backend port
EXPOSE 8080

# Start backend
CMD ["npm", "run", "start"]