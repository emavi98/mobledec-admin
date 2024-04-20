# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json (si existe) a la raíz de la carpeta de trabajo
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto al directorio de trabajo del contenedor
COPY . .

# Construye la aplicación React
RUN npm run build

# Expone el puerto 3000 para que la aplicación esté disponible fuera del contenedor
EXPOSE 3000

# Define el comando de inicio para ejecutar la aplicación cuando se inicie el contenedor
CMD ["npm", "start"]