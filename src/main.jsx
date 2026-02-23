<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
    <style>
        :root { --neon: #CCFF00; --bg: #000; }
        * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
        body { background: var(--bg); color: #fff; font-family: -apple-system, sans-serif; margin: 0; overflow: hidden; height: 100vh; }
        
        /* КИНЕТИЧЕСКИЙ ФОН */
        .bg { position: fixed; inset: -50%; z-index: -1; opacity: 0.08; pointer-events: none; 
               background-image: repeating-linear-gradient(-45deg, var(--neon) 0, var(--neon) 1px, transparent 1px, transparent 100px);
               animation: bg-flow 60s linear infinite; }
        @keyframes bg-flow { from { transform: translate(0,0) rotate(0deg); } to { transform: translate(100px, 100px) rotate(0deg); } }

        /* СКРОЛЛ-КОНТЕЙНЕР */
        .viewport { height: 100vh; overflow-y: auto; WebkitOverflowScrolling: touch; padding-bottom: 200px; }
        .container { max-width: 450px; margin: 0 auto; padding: 0 20px; }

        header { padding-top: calc(70px + env(safe-area-inset-top)); margin-bottom: 50px; text-align: left; }
        .logo { font-size: 34px; font-weight: 900; letter-spacing: -2px; text-transform: uppercase; }
        .logo span { color: var(--neon); }
        .line { width: 40px; height: 5px; background: var(--neon); margin-top: 10px; box-shadow: 0 0 15px var(--neon); }

        /* ИНТЕРАКТИВНЫЕ КАРТОЧКИ */
        .card { 
            background: rgba(10, 10, 10, 0.9); padding: 30px 20px; border-radius: 24px; 
            margin-bottom: 30px; border: 1px solid rgba(255,255,255,0.05); 
            backdrop-filter: blur(10px); transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card:active { transform: scale(0.97); background: rgba(204, 255, 0, 0.03); }
        .card:nth-child(even) { border-left: 4px solid var(--neon); }
        .card:nth-child(odd) { border-right: 4px solid var(--neon); }
        
        h2 { font-size: 11px; letter-spacing: 3px; opacity: 0.3; margin-bottom: 15px; text-transform: uppercase; }
        p { font-size: 16px; line-height: 1.6; margin: 0; opacity: 0.85; }
        b { color: var(--neon); }

        /* ФИКСИРОВАННЫЙ НИЗ */
        .bottom-nav { position: fixed; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, #000 85%, transparent); padding: 20px; z-index: 100; }
        .main-btn { 
            width: 100%; padding: 22px; background: var(--neon); color: #000; border: none; 
            border-radius: 20px; font-weight: 900; font-size: 14px; letter-spacing: 1px;
            box-shadow: 0 0 30px rgba(204, 255, 0, 0.25);
        }

        .ticker { position: fixed; bottom: 0; left: 0; right: 0; height: 35px; background: #000; border-top: 1px solid #111; overflow: hidden; display: flex; align-items: center; opacity: 0.4; font-size: 9px; z-index: 101; }
        .track { display: flex; gap: 40px; white-space: nowrap; animation: tick 20s linear infinite; }
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
                <p style="font-size: 9px; opacity: 0.3; letter-spacing: 2px; margin-top: 10px;">AGENCY // KINETIC_CORE_V9</p>
            </header>

            <div class="stack">
                <section class="card" onclick="vibe()">
                    <h2>КТО МЫ?</h2>
                    <p><b>SyncGo</b> — это технологическая сингулярность вашего бизнеса. Мы синхронизируем хаос трафика в идеальный поток прибыли.</p>
                </section>

                <section class="card" onclick="vibe()">
                    <h2>ЧТО МЫ ДЕЛАЕМ?</h2>
                    <p>Проектируем <b>бесшовные экосистемы</b>: Канал + Бот + Mini App уровня Digital Luxury. Каждое решение бьет точно в цель.</p>
                </section>

                <section class="card" onclick="vibe()">
                    <h2>ПОЧЕМУ МЫ?</h2>
                    <p>Мы используем <b>Neuro-UX</b>, чтобы каждый клик вашего клиента приводил к чеку. Мы делаем дорого, чтобы вы зарабатывали еще дороже.</p>
                </section>
            </div>
        </div>
    </div>

    <div class="bottom-nav">
        <button class="main-btn" onclick="startAudit()">ИНИЦИИРОВАТЬ СИНХРОНИЗАЦИЮ</button>
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

        function vibe() {
            tg.HapticFeedback.impactOccurred('light');
        }

        function startAudit() {
            tg.HapticFeedback.notificationOccurred('success');
            tg.showConfirm("ЗАПУСТИТЬ ПРОТОКОЛ АУДИТА SYNCGO?");
        }
    </script>
</body>
</html>
