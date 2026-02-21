"""
Пример Telegram бота с Mini App интеграцией
Требует: pip install python-telegram-bot
"""

from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo
from telegram.ext import Application, CommandHandler, ContextTypes
import logging

# Логирование
logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)
logger = logging.getLogger(__name__)

# Твой токен бота от @botfather
BOT_TOKEN = "YOUR_BOT_TOKEN_HERE"

# URL твоего Mini App (замени на реальный)
MINI_APP_URL = "https://yourdomain.com/mini-app"

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Обработчик команды /start"""
    
    # Создаем кнопку с Mini App
    keyboard = InlineKeyboardMarkup(
        inline_keyboard=[
            [InlineKeyboardButton(
                text="🚀 Открыть CyberMini",
                web_app=WebAppInfo(url=MINI_APP_URL)
            )],
            [InlineKeyboardButton(
                text="📖 О приложении",
                callback_data="about"
            )]
        ]
    )
    
    await update.message.reply_text(
        text="""
╔════════════════════════════════════════╗
║     Welcome to CyberMini! 🤖           ║
╠════════════════════════════════════════╣
║                                        ║
║  Discover amazing Telegram Mini Apps   ║
║  with cyberpunk design & security!     ║
║                                        ║
║  Click the button below to start:      ║
║                                        ║
╚════════════════════════════════════════╝
        """,
        reply_markup=keyboard,
        parse_mode='HTML'
    )

async def about(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Информация о приложении"""
    query = update.callback_query
    await query.answer()
    
    await query.edit_message_text(
        text="""
<b>🎨 CyberMini - Telegram Mini App</b>

<b>Возможности:</b>
✅ Киберпанк UI с неоновыми эффектами
✅ Безопасная аутентификация через Telegram
✅ Динамическая загрузка приложений
✅ Контакт с авторами Mini Apps
✅ Полностью адаптивный дизайн

<b>Технологии:</b>
🔧 React + Vite
🔧 Node.js + Express
🔧 Telegram WebApp API
🔧 HMAC-SHA256 валидация

<b>Разработчик:</b> @yourusername
<b>Версия:</b> 1.0.0
        """,
        parse_mode='HTML'
    )

def main():
    """Запуск бота"""
    # Создаем приложение
    application = Application.builder().token(BOT_TOKEN).build()
    
    # Добавляем обработчики команд
    application.add_handler(CommandHandler("start", start))
    application.add_handler(CommandHandler("about", about))
    
    # Запускаем бота
    print("🚀 Bot started. Press Ctrl+C to stop.")
    application.run_polling(allowed_updates=Update.ALL_TYPES)

if __name__ == '__main__':
    main()
