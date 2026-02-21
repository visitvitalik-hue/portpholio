# 🔐 Безопасность Telegram Mini App

## Проверка Telegram WebApp Data (initData)

Это **КРИТИЧЕСКИ ВАЖНО** для защиты вашего приложения от подделок и несанкционированного доступа.

### Как работает проверка подписи

```
1. Telegram создает initData с помощью HMAC-SHA256
   ├─ Использует BotToken как ключ
   ├─ Подписывает все параметры (кроме hash)
   └─ Включает hash в результат

2. Фронтенд отправляет initData на бэкенд
   └─ Включает всю строку целиком

3. Бэкенд ПРОВЕРЯЕТ подпись:
   ├─ Разбирает initData
   ├─ Вычисляет HMAC-SHA256 заново
   ├─ Сравнивает с полученным hash
   └─ Отклоняет если не совпадает
```

### Код проверки (backend/utils/validation.js)

```javascript
import crypto from 'crypto'

export function validateTelegramWebAppData(initData, botToken) {
  const params = new URLSearchParams(initData)
  const hash = params.get('hash')
  
  if (!hash) return false
  
  // Собираем проверочную строку (сортированные параметры без hash)
  const dataArray = []
  for (const [key, value] of params) {
    if (key !== 'hash') {
      dataArray.push(`${key}=${value}`)
    }
  }
  params.sort()
  const dataCheckString = dataArray.join('\n')
  
  // Вычисляем HMAC
  const secretKey = crypto
    .createHmac('sha256', 'WebAppData')
    .update(botToken)
    .digest()
  
  const computedHash = crypto
    .createHmac('sha256', secretKey)
    .update(dataCheckString)
    .digest('hex')
  
  // ГЛАВНАЯ проверка:
  return computedHash === hash
}
```

### Почему это нужно?

**ОПАСНО - БЕЗ ПРОВЕРКИ:**
```
Злоумышленник может:
❌ Подделать любого пользователя
❌ Выдать себя за администратора
❌ Отправлять запросы от чужих аккаунтов
❌ Перехватить queryId для callback queries
```

**БЕЗОПАСНО - С ПРОВЕРКОЙ:**
```
Все запросы проверяются:
✅ Только реальные пользователи Telegram
✅ Невозможно подделать подпись (нужен BotToken)
✅ Каждый request аутентифицирован
✅ Логирование всех действий
```

## Дополнительные меры безопасности

### 1. Проверка свежести данных

```javascript
export function parseInitData(initData) {
  const params = new URLSearchParams(initData)
  const authDate = parseInt(params.get('auth_date'))
  
  // Данные не должны быть старше 5 минут
  const currentTime = Math.floor(Date.now() / 1000)
  const isValid = (currentTime - authDate) < 300
  
  return { authDate, isValid }
}
```

**Защита от:** Replay атак (перехвата и повторного использования старых запросов)

### 2. Валидация обязательных полей

```javascript
app.post('/api/contact-author', (req, res) => {
  const { initData, appId, authorName } = req.body
  
  // ❌ Все поля обязательны
  if (!initData || !appId || !authorName) {
    return res.status(400).json({
      error: 'Missing required fields'
    })
  }
})
```

### 3. CORS настройка

```javascript
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'https://yourdomain.com',
  methods: ['GET', 'POST'],
  credentials: true
}))
```

**Защита от:** Cross-Origin атак из неизвестных источников

### 4. Rate Limiting (рекомендуется)

```javascript
import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 минут
  max: 100 // максимум 100 запросов за окно
})

app.post('/api/contact-author', limiter, (req, res) => {
  // Обработка...
})
```

### 5. HTTPS в production

```javascript
// Всегда используй HTTPS в production
if (process.env.NODE_ENV === 'production') {
  app.use(enforceSsl())
}
```

## Переменные окружения (НИКОГДА не коммитируй!)

```env
# .env
BOT_TOKEN=your_secret_token
OWNER_ID=your_user_id
CORS_ORIGIN=https://yourdomain.com
NODE_ENV=production
```

### Где сохранять:
- ✅ В `.env` файле (в `.gitignore`)
- ✅ В переменных окружения сервера
- ✅ В secrets контексте CI/CD
- ❌ НЕ в коде
- ❌ НЕ в git репозитории

## Логирование и мониторинг

```javascript
// Логируй все подозрительные действия
app.post('/api/contact-author', (req, res) => {
  const isValidData = validateTelegramWebAppData(initData, BOT_TOKEN)
  
  if (!isValidData) {
    console.warn('[SECURITY] Invalid signature detected from IP:', req.ip)
    // Алерт для администратора!
    return res.status(401).json({ error: 'Unauthorized' })
  }
  
  // Логируй успешные действия
  console.log('[AUDIT]', {
    userId,
    action: 'contact_author',
    appId,
    timestamp: new Date().toISOString()
  })
})
```

## Checklist безопасности

### Перед development
- [ ] Прочитал этот документ
- [ ] Понимаю как работает initData проверка
- [ ] Установил правильный BOT_TOKEN

### Перед развёртыванием
- [ ] Все переменные в `.env`
- [ ] HTTPS включен
- [ ] CORS ограничен до твоего домена
- [ ] Нет логирования чувствительных данных
- [ ] Rate limiting включен
- [ ] Error handling настроен

### После развёртывания
- [ ] Мониторишь логи на ошибки
- [ ] Проверяешь подозрительную активность
- [ ] Регулярно обновляешь зависимости
- [ ] Тестируешь security с реальными данными

## Полезные команды

```bash
# Проверить версии npm пакетов
npm audit

# Обновить уязвимые пакеты
npm audit fix

# Проверить окружение
node -p "process.env"

# Тестировать endpoint вручную
curl -X POST http://localhost:3001/api/contact-author \
  -H "Content-Type: application/json" \
  -d '{"initData":"...","appId":"test","authorName":"test"}'
```

## Дополнительные ресурсы

- Telegram Bot API Security: https://core.telegram.org/bots/webapps#data-received-by-the-mini-app
- Node.js Security Best Practices: https://nodejs.org/en/docs/guides/security/
- OWASP Top 10: https://owasp.org/www-project-top-ten/

---

**Помни: безопасность - это не одноразовая задача, это непрерывный процесс!** 🔒
