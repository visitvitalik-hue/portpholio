<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
    <style>
        :root { --neon: #CCFF00; --bg: #000; --card: rgba(15, 15, 15, 0.9); }
        * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
        body { background: var(--bg); color: #fff; font-family: sans-serif; margin: 0; overflow: hidden; height: 100vh; }
        
        /* ДИАГОНАЛЬНАЯ ПОДЛОЖКА */
        .bg-pattern { position: fixed; inset: 0; z-index: -1; opacity: 0.05; pointer-events: none; overflow: hidden; }
        .bg-pattern::after {
            content: 'SYNCGO SYNCGO SYNCGO SYNCGO SYNCGO';
            position: absolute; width: 300%; font-size: 50px; font-weight: 900;
            color: var(--neon); transform: rotate(-45deg); top: -20%; left: -20%; white-space: pre; line-height: 2;
        }

        /* СКРОЛЛ-ЗОНА */
        .scroll-area { height: calc(100vh - 140px); overflow-y: auto; padding: 0 20px; WebkitOverflowScrolling: touch; }
        .content { maxWidth: 450px; margin: 0 auto; padding-top: calc(60px + env(safe-area-inset-top)); }

        header { margin-bottom: 40px; }
        .logo { font-size: 32px; font-weight: 900; letter-spacing: -1.5px; }
        .logo span { color: var(--neon); }
        .line { width: 45px; height: 5px; background: var(--neon); margin-top: 8px; }

        /* ШАХМАТНЫЕ КАРТОЧКИ */
        .card { background: var(--card); padding: 25px; border-radius: 20px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05); backdrop-filter: blur(10px); }
        .card:nth-child(even) { border-left: 4px solid var(--neon); }
        .card:nth-child(odd) { border-right: 4px solid var(--neon); }
        
        h2 { font-size: 11px; letter-spacing: 3px; opacity: 0.3; margin-bottom: 15px; text-transform: uppercase; }
        p { font-size: 15px; lineHeight: 1.6; margin: 0; opacity: 0.85; }
        b { color: var(--neon); }

        /* ФИКСИРОВАННЫЙ НИЗ */
        .bottom-fixed { position: fixed; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, #000 80%, transparent); padding-top: 20px; z-index: 100; }
        .main-btn { width: calc(100% - 40px); margin: 0 20px 15px; padding: 20px; background: var(--neon); color: #000; border: none; border-radius: 20px; font-weight: 900; font-size: 14px; box-shadow: 0 0 30px rgba(204, 255, 0, 0.3); }
        
        /* ТИКЕР */
        .ticker { height: 40px; background: #000; border-top: 1px solid #111; overflow: hidden; display: flex; alignItems: center; opacity: 0.5; font-size: 10px; }
        .track { display: flex; gap: 40px; white-space: nowrap; animation: tick 20s linear infinite; }
        @keyframes tick { from { transform: translateX(0); } to { transform: translateX(-50%); } }
    </style>
</head>
<body>
    <div class="bg-pattern"></div>
    <div class="scroll-area">
        <div class="content">
            <header>
                <div class="logo"><span>SYNC</span>GO</div>
                <div class="line"></div>
                <p style="font-size: 9px; opacity: 0.3; letter-spacing: 2px; margin-top: 10px;">AGENCY // NATIVE_CORE_V8</p>
            </header>

            <section class="card">
                <h2>КТО МЫ?</h2>
                <p><b>SyncGo Agency</b> — архитекторы цифрового превосходства. Мы синхронизируем ваш продукт с нейронными путями клиента.</p>
            </section>

            <section class="card">
                <h2>ЧТО МЫ ДЕЛАЕМ?</h2>
                <p>Проектируем <b>бесшовные экосистемы</b>: от стратегии в каналах до Mini Apps уровня «Digital Luxury».</p>
            </section>

            <section class="card">
                <h2>ПОЧЕМУ МЫ?</h2>
                <p>Наш <b>Neuro-UX</b> подход гарантирует удержание внимания. Мы делаем дорого, чтобы вы зарабатывали еще дороже.</p>
            </section>

            <section class="card" style="border: 1px solid var(--neon)">
                <h2>РЕЗУЛЬТАТ</h2>
                <p>Синхронизация трафика и продаж с гарантией вовлеченности через нативные механики 2026 года.</p>
            </section>
            
            <div style="height: 50px;"></div>
        </div>
    </div>

    <div class="bottom-fixed">
        <button class="main-btn" onclick="handleAction()">ПОЛУЧИТЬ АУДИТ АГЕНТСТВА</button>
        <div class="ticker">
            <div class="track">
                <span>● SYNCGO AGENCY ● ТЕХНОЛОГИИ 2026 ● ВЫСОКАЯ КОНВЕРСИЯ ● NEURO_UX ● СИНХРОНИЗАЦИЯ ТРАФИКА ● </span>
                <span>● SYNCGO AGENCY ● ТЕХНОЛОГИИ 2026 ● ВЫСОКАЯ КОНВЕРСИЯ ● NEURO_UX ● СИНХРОНИЗАЦИЯ ТРАФИКА ● </span>
            </div>
        </div>
    </div>

    <script>
        const tg = window.Telegram.WebApp;
        tg.ready();
        tg.expand();
        tg.setHeaderColor('#000000');

        function handleAction() {
            tg.HapticFeedback.notificationOccurred('success');
            tg.showConfirm("ЗАПУСТИТЬ ПРОТОКОЛ АУДИТА?");
        }
    </script>
</body>
</html>
