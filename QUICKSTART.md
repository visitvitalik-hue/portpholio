# 🚀 Быстрый старт - 5 минут

## Шаг 1️⃣: Получить Bot Token

1. Открой Telegram и найди **@botfather**
2. Напиши `/newbot`
3. Следуй инструкциям:
   - Имя бота: `CyberMini Bot`
   - Username: `cybermini_bot` (должно быть уникально)
4. Скопируй полученный токен: `123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11`

## Шаг 2️⃣: Установить зависимости

```bash
# Фронтенд
npm install

# Бэкенд
cd backend
npm install
cd ..
```

## Шаг 3️⃣: Создать .env файл

```bash
# Скопируй пример
cp backend/.env.example backend/.env

# Отредактируй файл
nano backend/.env
```

Содержимое `backend/.env`:
```env
BOT_TOKEN=your_token_from_botfather
OWNER_ID=your_telegram_id
PORT=3001
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

> Как получить свой Telegram ID?
> - Открой @userinfobot и отправь любое сообщение
> - Скопируй `id` из ответа

## Шаг 4️⃣: Запустить приложение

**Терминал 1** (фронтенд):
```bash
npm run dev
```

**Терминал 2** (бэкенд):
```bash
cd backend
npm run dev
```

Должно вывести:
```
✓ vite v5.0.8 ready in 123 ms
➜  Local:   http://localhost:3000/
```

```
╔════════════════════════════════════════╗
║  TELEGRAM MINI APP BACKEND             ║
║  Server running on port 3001           ║
╚════════════════════════════════════════╝
```

## Шаг 5️⃣: Открыть приложение

- **На ПК:** http://localhost:3000
- **На телефоне:** Замени `localhost` на IP компьютера: http://192.168.1.100:3000

## 🧪 Тестирование

### Проверить безопасность

```bash
# Отправить запрос с неверной подписью (должен быть отклонен)
curl -X POST http://localhost:3001/api/contact-author \
  -H "Content-Type: application/json" \
  -d '{
    "initData": "invalid_data",
    "appId": "test",
    "authorName": "test"
  }'

# Ответ: 401 Unauthorized ✓
```

### Проверить здоровье сервера

```bash
curl http://localhost:3001/health

# Должно вернуться:
# {"status":"OK","timestamp":"2024-02-21T10:30:00Z"}
```

## 🎮 Протестировать интегрально

1. Откройте приложение в браузере: http://localhost:3000
2. Увидите список Mini Apps
3. Нажмите кнопку "СВЯЗАТЬСЯ С АВТОРОМ"
4. Приложение отправит запрос на бэкенд
5. Бэкенд проверит подпись и обработает запрос
6. Вы получите подтверждение

## ❌ Проблемы?

### Порт 3000 уже занят
```bash
# Укажи другой порт
PORT=3001 npm run dev
```

### Порт 3001 уже занят
```bash
# Найди процесс
lsof -i :3001
kill -9 <PID>
```

### "Cannot find module 'express'"
```bash
cd backend
npm install
npm run dev
```

### Ошибка CORS
Проверь `backend/.env`:
```env
CORS_ORIGIN=http://localhost:3000
```

### initData ошибка валидации
- Убедись что `BOT_TOKEN` правильный
- Перезагрузи страницу браузера
- Проверь что Telegram WebApp загрузился

## 📊 Структура файлов

Важные файлы:
```
telegram-mini-app/
├── src/App.jsx              ← Главное приложение
├── backend/server.js        ← Бэкенд сервер
├── backend/utils/
│   ├── validation.js        ← Проверка подписей ⭐
│   └── telegram.js          ← Telegram API
├── public/data/
│   └── apps.json            ← Данные приложений
└── .env                     ← Переменные (ТЫ СОЗДАЁШЬ)
```

## 🎨 Как выглядит приложение

```
╔════════════════════════════════════════╗
║      ◆ CYBERMINI ○ 6 APPS LOADED      ║
╠════════════════════════════════════════╣
║                                        ║
║  ┌──────────────────────────────────┐ ║
║  │ 🎮 PixelGame                     │ ║
║  │ Retro pixel-based gaming...      │ ║
║  │ [VERSION: 2.1.3] [USERS: 12.5K]  │ ║
║  │ ┌─ СВЯЗАТЬСЯ С DEVMASTER ──→ ┐ │ ║
║  │ └──────────────────────────────┘ │ ║
║  └──────────────────────────────────┘ ║
║                                        ║
║  ... ещё карточки приложений ...       ║
║                                        ║
╚════════════════════════════════════════╝
```

## 📚 Следующие шаги

После успешного запуска:

1. **Изучи код:**
   - `src/App.jsx` - логика фронтенда
   - `backend/utils/validation.js` - проверка подписей
   - `backend/server.js` - API endpoints

2. **Добавь свои приложения:**
   - Отредактируй `public/data/apps.json`

3. **Разверни в production:**
   - Смотри `README.md` раздел "Развёртывание"

4. **Интегрируй с ботом:**
   - Смотри `bot_example.py` для примера

## 💡 Советы

- 🔄 **Hot reload:** Сохрани файл → автоматический refresh
- 🐛 **Debug:** Открой DevTools (F12) для логов
- 📱 **Mobile:** Используй `ngrok` для тестирования на телефоне
- 🔐 **Security:** Всегда проверяй `initData` на бэкенде

## 🎯 Что дальше?

Поздравляем! Ты успешно запустил Telegram Mini App с киберпанк-дизайном и безопасностью! 🎉

Теперь можешь:
- ✅ Добавить больше приложений
- ✅ Кастомизировать дизайн
- ✅ Развернуть на сервер
- ✅ Интегрировать с реальным ботом

Удачи! 🚀
