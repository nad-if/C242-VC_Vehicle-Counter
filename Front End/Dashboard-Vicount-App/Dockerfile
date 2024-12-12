<<<<<<< HEAD
# Gunakan image Node.js untuk build aplikasi
FROM node:18 AS build

# Tentukan working directory
WORKDIR /app

# Salin package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin semua file proyek ke dalam image
COPY . .

# Build aplikasi untuk produksi
RUN npm run build

# Gunakan server Nginx untuk menyajikan aplikasi React
FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html


EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
=======
FROM node:18-alpine

WORKDIR /app

COPY package* .
RUN npm i

COPY . .

CMD [ "npm", "run", "dev" ]
>>>>>>> 4703ff002f059ab87ddba50302e3eeaae55875b9
