# Usa una imagen base de Node.js
FROM node:18-alpine AS builder

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Compila la aplicación
RUN npm run build

# Etapa de construcción final
FROM nginx:alpine

# Copia los archivos estáticos generados por la compilación
COPY --from=builder /app/dist /usr/share/nginx/html

# Expone el puerto 32782 en el contenedor
EXPOSE 32782

CMD ["nginx", "-g", "daemon off;"]