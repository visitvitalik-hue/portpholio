<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
    <style>
        body { background: #000; color: #CCFF00; font-family: monospace; margin: 0; display: flex; align-items: center; justify-content: center; height: 100vh; overflow: hidden; }
        .bg { position: fixed; inset: 0; opacity: 0.05; background-image: repeating-linear-gradient(-45deg, #CCFF00 0, #CCFF00 1px, transparent 1px, transparent 40px); z-index: -1; }
        .container { text-align: center; padding: 20px; border: 1px solid #CCFF00; border-radius: 20px; background: rgba(0,0,0,0.8); backdrop-filter: blur(10px); }
        h1 { font-size: 24px; letter-spacing: 5px; margin: 0; }
        p { font-size: 10px; opacity: 0.6; text-transform: uppercase; margin-top: 10px; }
        .btn { margin-top: 20px; padding: 15px 30px; background: #CCFF00; color: #000; border: none; border-radius: 10px; font-weight: bold; cursor: pointer; }
    </style>
</head>
<body>
    <div class="bg"></div>
    <div class="container">
        <h1>SYNCGO</h1>
        <p>AGENCY // HARD_DEBUG_MODE</p>
        <button class="btn" onclick="window.Telegram.WebApp.close()">ЗАКРЫТЬ ТЕРМИНАЛ</button>
    </div>

    <script>
        // Инициализация без React
        const tg = window.Telegram.WebApp;
        tg.ready();
        tg.expand();
        tg.setHeaderColor('#000000');
        
        // Проверка работоспособности
        console.log("SyncGo Engine Active");
        tg.HapticFeedback.impactOccurred('heavy');
    </script>
</body>
</html>
