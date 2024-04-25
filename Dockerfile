# Node.js tabanlı hafif bir imajı kullanın
FROM node:alpine

# Uygulamanın çalıştırılacağı dizini belirtin
WORKDIR /app

# Gerekli bağımlılıkları kopyalayın ve yükleyin
COPY package*.json ./
RUN npm install

# Uygulamanın geri kalanını kopyalayın
COPY . .

# Port 3000'ü dış dünyaya açın
EXPOSE 3000

# Uygulamayı başlatın
CMD ["npm", "start"]
