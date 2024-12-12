# Gunakan image node.js
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Salin file package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin seluruh file ke dalam container, kecuali yang ada di .dockerignore
COPY . .

# Ekspos port 3000
EXPOSE 3000

# Jalankan aplikasi
CMD ["node", "src/server.js"]
