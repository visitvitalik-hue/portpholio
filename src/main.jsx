<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
    <style>
        :root { --neon: #CCFF00; --bg: #000; }
        * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
        body { background: var(--bg); color: #fff; font-family: sans-serif; margin: 0; overflow: hidden; height: 100vh; }
        
        /* БРЕНДИРОВАННЫЙ ФОН */
        .bg { position: fixed; inset: 0; z-index: -1; opacity: 0.07; pointer-events: none; }
        .bg::after {
            content: 'SYNCGO SYNCGO SYNCGO SYNCGO';
            position: absolute; width: 300%; font-size: 60px; font-weight: 900;
            color: var(--neon); transform: rotate(-45deg); top: -10%; left: -10%; white-space: pre; line-height: 2.5;
        }

        /* КОНТЕЙНЕР СКРОЛЛА */
        .viewport { height: 100vh; overflow-y: auto; WebkitOverflowScrolling: touch; padding-bottom: 180px; }
        .container { maxWidth: 450px; margin: 0 auto; padding: 0 20px; }

        header { padding-top: calc(60px + env(safe-area-inset-top)); marginBottom: 50px; }
        .logo { font-size: 36px; font-weight: 900; letter-spacing: -2px; }
        .logo span { color: var(--neon); }
        .line { width: 50px; height: 6px; background: var(--neon); margin-top: 10px; }

        /* КАРТОЧКИ С "РИТМОМ" */
        .card { 
            background: rgba(10, 10, 10, 0.95); padding: 35px 25px; border-radius: 25px; 
            margin-bottom: 40px; border: 1px solid rgba(255,255,255,0.05); 
            backdrop-filter: blur(15px); min-height: 250px; display: flex; flex-direction: column; justify-content: center;
        }
        .card:nth-child(even) { border-left: 5px solid var(--neon); }
        .card:nth-child(odd) { border-right: 5px solid var(--neon); }
        
        h2 { font-size: 12px; letter-spacing: 4px; opacity: 0.3; margin-bottom: 20px; text-transform: uppercase; font-weight: 900; }
        p { font-size: 17px; lineHeight: 1.6; margin: 0; opacity: 0.9; }
        b { color: var(--neon); }

        /* ФИКСИРОВАННЫЙ НИЗ (МЕРТВО) */
        .footer-action { 
            position: fixed; bottom: 0; left: 0; right: 0; 
            background: linear-gradient(to top, #000 85%, transparent); 
            padding: 20px 20px calc(10px + env(safe-area-inset-bottom)); z-index: 100; 
        }
        .main-btn { 
            width: 100%; padding: 22px; background: var(--neon); color: #000; 
            border: none; border-radius: 22px; font-weight: 900; font-size: 15px; 
            box-shadow: 0 0 40px rgba(204, 255, 0, 0.3); letter-spacing: 1px;
        }

        .ticker { 
            position: fixed; bottom: 0; left: 0; right: 0; height: 35px; 
            background: #000; border-top: 1px solid #111; overflow: hidden; 
            display: flex; align-items: center; opacity: 0.4; font-size: 9px; z-index: 101;
        }
        .track { display: flex; gap: 40px; white-space: nowrap; animation: tick 25s linear infinite; }
        @keyframes tick { from { transform: translateX(0); } to { transform: translateX(-50%); } }
    </style>
</head>
<body>
    <div class="bg"></div>
    <div class="viewport">
        <div class="container">
            <header>
                <div class="logo"><span>SYNC</span>GO</div>
                <div class="line"></div>
                <p style="font-size: 10px; opacity: 0.4; letter-spacing: 3px; margin-top: 15px; font-weight: bold;">AGENCY // NEURO_SYSTEMS</p>
            </header>

            <div class="cards">
                <section class="card">
                    <h2>КТО МЫ?</h2>
                    <p><b>SyncGo Agency</b> — архитекторы цифрового превосходства. Мы не рисуем ботов, мы синхронизируем ваш продукт с нейронными путями клиента.</p>
                </section>

                <section class="card">
                    <h2>АРХИТЕКТУРА</h2>
                    <p>Мы внедряем <b>бесшовные экосистемы</b>: от стратегии в каналах до Mini Apps уровня «Digital Luxury». Конверсия — это математика, а не удача.</p>
                </section>
                
                <section class="card" style="border: 1px solid var(--neon); background: rgba(204, 255, 0, 0.03);">
                    <h2>РЕЗУЛЬТАТ</h2>
                    <p>Гарантированное удержание внимания через <b>Neuro-UX</b>. Мы делаем дорого, чтобы вы зарабатывали еще дороже.</p>
                </section>
            </div>
        </div>
    </div>

    <div class="footer-action">
        <button class="main-btn" onclick="handleAction()">ПОЛУЧИТЬ АУДИТ АГЕНТСТВА</button>
    </div>
    
    <div class="ticker">
        <div class="track">
            <span>● SYNCGO AGENCY ● ТЕХНОЛОГИИ 2026 ● ВЫСОКАЯ КОНВЕРСИЯ ● NEURO_UX ● СИНХРОНИЗАЦИЯ ТРАФИКА В ПРОДАЖИ ● </span>
            <span>● SYNCGO AGENCY ● ТЕХНОЛОГИИ 2026 ● ВЫСОКАЯ КОНВЕРСИЯ ● NEURO_UX ● СИНХРОНИЗАЦИЯ ТРАФИКА В ПРОДАЖИ ● </span>
        </div>
    </div>

    <script>
        const tg = window.Telegram.WebApp;
        tg.ready();
        tg.expand();
        tg.setHeaderColor('#000000');

        function handleAction() {
            tg.HapticFeedback.notificationOccurred('success');
            tg.showConfirm("ЗАПУСТИТЬ ПРОТОКОЛ СИНХРОНИЗАЦИИ?");
        }
    </script>
</body>
</html>
