# Etapa 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el código
COPY . .

# Generar build de producción
RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:alpine

# Copiar build al directorio público de nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar configuración personalizada si tienes
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer puerto 80
EXPOSE 80

# Arrancar nginx en foreground
CMD ["nginx", "-g", "daemon off;"]
