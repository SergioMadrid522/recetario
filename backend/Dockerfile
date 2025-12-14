# Imagen base
FROM node:20-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar package.json y package-lock.json primero (para cache de dependencias)
COPY package*.json ./

# Instalar dependencias
RUN npm install --production

# Copiar todo el código al contenedor
COPY . .

# Exponer el puerto que usa tu app (por defecto 3000)
EXPOSE 3000

# Comando para arrancar la app
CMD ["node", "src/server.js"]
