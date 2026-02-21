FROM node:18-alpine

WORKDIR /app

# Копируем package files
COPY package*.json ./
COPY backend/package*.json ./backend/

# Устанавливаем зависимости
RUN npm ci && \
    cd backend && npm ci && cd ..

# Копируем исходный код
COPY . .

# Собираем фронтенд
RUN npm run build

# Expose порты
EXPOSE 3000 3001

# Запускаем оба сервера
CMD ["sh", "-c", "cd backend && npm start & npm run preview"]
