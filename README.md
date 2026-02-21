# CyberMini - Telegram Mini App

Высокопроизводительный Telegram Mini App с киберпанк-дизайном, безопасной аутентификацией и динамической загрузкой контента.

## 🎨 Особенности

- **Киберпанк UI/UX**: Темный дизайн с неоновыми цветами (#0ff и #ff00ff), моноширинный шрифт JetBrains Mono
- **Безопасность**: Проверка подписей `Telegram.WebApp.initData` на бэкенде
- **Динамический контент**: Загрузка Mini Apps из JSON
- **React + Vite**: Быстрая разработка и минимальный bundle
- **Node.js Backend**: Express сервер с валидацией и логированием
- **Полная функциональность контакта**: Отправка запросов авторам через Telegram API
- **Адаптивный дизайн**: Работает на всех устройствах

## 📋 Требования

- Node.js 18+
- npm или yarn
- Telegram Bot Token (получить у @botfather)

## 🚀 Быстрый старт

### 1. Установка зависимостей

```bash
# Фронтенд
npm install

# Бэкенд
cd backend
npm install
cd ..
```

### 2. Конфигурация

#### Фронтенд
Отредактируй `vite.config.js` для установки URL бэкенда:

```javascript
// vite.config.js
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:3001',
      '/data': 'http://localhost:3001'
    }
  }
})
```

#### Бэкенд
Создай файл `backend/.env` на основе `backend/.env.example`:

```env
BOT_TOKEN=your_actual_bot_token_here
OWNER_ID=your_telegram_user_id
PORT=3001
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

### 3. Запуск в режиме разработки

```bash
# Терминал 1: Запуск фронтенда
npm run dev

# Терминал 2: Запуск бэкенда
cd backend
npm run dev
```

Приложение будет доступно на `http://localhost:3000`

## 🔐 Безопасность

### Проверка Telegram WebApp Data

Все запросы от клиента проходят проверку подписи на сервере:

```javascript
// backend/utils/validation.js
export function validateTelegramWebAppData(initData, botToken) {
  // 1. Разбираем initData
  // 2. Извлекаем hash
  // 3. Создаем проверочную строку из остальных параметров
  // 4. Вычисляем HMAC-SHA256
  // 5. Сравниваем с полученным hash
  return computedHash === receivedHash
}
```

**Как это работает:**
1. Telegram подписывает `initData` с использованием HMAC-SHA256
2. Фронтенд отправляет `initData` вместе с запросом
3. Бэкенд повторно вычисляет подпись и сравнивает
4. Если подписи не совпадают → запрос отклоняется (401)

### Дополнительные проверки

- ✅ Проверка свежести данных (не старше 5 минут)
- ✅ Валидация обязательных полей
- ✅ Логирование всех запросов
- ✅ CORS настройка
- ✅ Обработка ошибок

## 📱 Интеграция с Telegram Bot

### Регистрация Mini App

```bash
# Через BotFather: отправь команду
/newapp

# Укажи:
# - Имя приложения
# - URL (твой сервер)
# - Краткое описание
# - Иконку (опционально)
```

### Использование кнопки в боте

```javascript
// Пример команды для вашего бота
const keyboard = {
  reply_markup: {
    inline_keyboard: [[{
      text: "🚀 Открыть CyberMini",
      web_app: {
        url: "https://yourdomain.com/mini-app"
      }
    }]]
  }
}

// Отправь это вместе с сообщением
```

## 📂 Структура проекта

```
telegram-mini-app/
├── public/
│   └── data/
│       └── apps.json              # База Mini Apps
├── src/
│   ├── App.jsx                    # Главный компонент
│   ├── App.css                    # Стили приложения
│   ├── main.jsx                   # Точка входа
│   └── components/
│       ├── Header.jsx
│       ├── Header.css
│       ├── MiniAppCard.jsx         # Карточка приложения
│       ├── MiniAppCard.css
│       ├── LoadingScreen.jsx
│       └── LoadingScreen.css
├── backend/
│   ├── server.js                  # Express сервер
│   ├── utils/
│   │   ├── validation.js          # Проверка подписей
│   │   └── telegram.js            # Telegram API
│   ├── package.json
│   └── .env.example
├── index.html
├── vite.config.js
└── package.json
```

## 🎯 Добавление новых Mini Apps

Отредактируй `public/data/apps.json`:

```json
{
  "apps": [
    {
      "id": "app_unique_id",
      "name": "Название приложения",
      "icon": "🚀",
      "description": "Описание приложения",
      "author": "имя_автора",
      "version": "1.0.0",
      "size": "2.5MB",
      "users": "10K",
      "category": "games",
      "tech": ["React", "WebGL"]
    }
  ]
}
```

## 🌐 Развёртывание

### На Vercel (Фронтенд)

```bash
# 1. Подключи репозиторий
# 2. Установи переменные окружения
VITE_API_URL=https://your-backend.com

# 3. Команда build:
npm run build
```

### На Heroku (Бэкенд)

```bash
# 1. Создай приложение
heroku create your-app-name

# 2. Установи переменные
heroku config:set BOT_TOKEN=your_token
heroku config:set OWNER_ID=your_id

# 3. Deploy
git push heroku main
```

### На собственном сервере (VPS)

```bash
# 1. Установи Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

# 2. Клонируй репозиторий
git clone https://github.com/yourusername/telegram-mini-app.git
cd telegram-mini-app

# 3. Установи зависимости
npm install
cd backend && npm install && cd ..

# 4. Создай .env файл
cp backend/.env.example backend/.env
nano backend/.env  # Отредактируй переменные

# 5. Запусти через PM2
npm install -g pm2
pm2 start backend/server.js --name "tma-backend"
pm2 start "npm run dev" --name "tma-frontend"
pm2 save
```

## 📊 API Endpoints

### POST /api/contact-author
Отправить запрос на контакт с автором приложения.

**Request:**
```json
{
  "initData": "query_id=...",
  "appId": "app_001",
  "authorName": "devmaster",
  "queryId": "..."
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Contact request sent successfully",
  "data": {
    "userId": 123456789,
    "userName": "username",
    "appId": "app_001",
    "authorName": "devmaster",
    "timestamp": "2024-02-21T10:30:00Z"
  }
}
```

**Response (401):**
```json
{
  "success": false,
  "error": "Invalid authentication data. Signature verification failed."
}
```

### GET /health
Проверка статуса сервера.

### GET /api/info
Получить информацию о сервере.

## 🎨 Кастомизация дизайна

### Основные цвета
```css
/* Киберпанк палитра */
--color-cyan: #0ff;      /* Основной цвет */
--color-magenta: #ff00ff; /* Акцент */
--color-dark: #0a0e27;    /* Фон */
```

### Шрифты
Приложение использует `JetBrains Mono` - моноширинный шрифт для аутентичного киберпанк-стиля.

```css
font-family: 'JetBrains Mono', 'Courier New', monospace;
```

## 🐛 Отладка

### Логи фронтенда
```javascript
// В консоли браузера (F12)
console.log(window.Telegram.WebApp)
```

### Логи бэкенда
```bash
# Смотри консоль где запущен сервер
# Все запросы логируются с timestamp
```

### Проверка подписи вручную
```javascript
// Скопируй initData из консоли фронтенда
// Вставь в backend/utils/validation.js для отладки
```

## 📝 Лицензия

MIT - используй свободно

## 🤝 Помощь и поддержка

- Документация Telegram WebApp: https://core.telegram.org/bots/webapps
- Документация Express: https://expressjs.com
- Документация React: https://react.dev

---

**Создано для демонстрации best practices в разработке Telegram Mini Apps** 🚀
