import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const tg = window.Telegram.WebApp;

const App = () => {
  useEffect(() => {
    // 1. Инициализация Full-screen Mode 2.0 и Safe Areas
    tg.ready();
    tg.expand();
    
    // Подстройка цвета хедера под системную тему пользователя
    tg.setHeaderColor('secondary_bg_color'); 
    
    // Включаем подтверждение закрытия для сложных сервисов
    tg.enableClosingConfirmation();

    // Нативная навигация: используем системную кнопку "Назад" вместо кастомных
    tg.BackButton.show();
    tg.BackButton.onClick(() => {
      tg.showAlert("Используется системная навигация Telegram");
    });
  }, []);

  const [items] = useState([
    { id: '1', title: 'AI_STRATEGIST', price: 500, icon: '🐉', tag: 'HOT' },
    { id: '2', title: 'SECURE_VAULT', price: 1200, icon: '🔐', tag: 'NEW' }
  ]);

  const handleOrder = (item) => {
    // Нативная тактильность (Haptic) — стандарт 2026 для Android/iOS
    tg.HapticFeedback.notificationOccurred('success');
    tg.showConfirm(`Заказать ${item.title}?`, (ok) => {
      if (ok) tg.sendData(JSON.stringify({ order: item.id }));
    });
  };

  return (
    <div className="tma-container">
      {/* ИНЪЕКЦИЯ АНИМАЦИИ И ГАЙДЛАЙНОВ */}
      <style>{`
        :root {
          /* Используем нативные переменные Telegram для тем */
          --bg: var(--tg-theme-bg-color, #070914);
          --sec-bg: var(--tg-theme-secondary-bg-color, #101223);
          --text: var(--tg-theme-text-color, #E9F0FF);
          --hint: var(--tg-theme-hint-color, rgba(233,240,255,0.6));
          --link: var(--tg-theme-link-color, #7DF9FF);
          --accent: #FF2BD6;
        }

        .tma-container {
          min-height: 100vh;
          background: var(--bg);
          color: var(--text);
          font-family: system-ui, -apple-system, sans-serif;
          /* Учет Safe Areas (отступы под вырезы и шторки) */
          padding: 16px 16px calc(16px + env(safe-area-inset-bottom));
          padding-top: env(safe-area-inset-top);
        }

        .ticker-wrap {
          margin: 10px 0;
          overflow: hidden;
          background: var(--sec-bg);
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .track {
          display: flex;
          gap: 30px;
          padding: 8px 0;
          animation: ticker 20s linear infinite;
          white-space: nowrap;
        }

        @keyframes ticker {
          to { transform: translateX(-50%); }
        }

        .bento-grid {
          display: grid;
          gap: 12px;
          margin-top: 20px;
        }

        .card {
          background: var(--sec-bg);
          border-radius: 20px;
          padding: 20px;
          border: 1px solid rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          gap: 15px;
          /* Крупные элементы управления для удобства нажатия пальцем */
          min-height: 100px;
        }

        .icon-box {
          font-size: 32px;
          background: rgba(0,0,0,0.2);
          width: 60px; height: 60px;
          display: grid; place-items: center;
          border-radius: 15px;
        }

        .order-btn {
          background: var(--link);
          color: #000;
          border: none;
          padding: 10px 16px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 14px;
        }
      `}</style>

      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '20px', margin: 0 }}>AI DRAGON LAB</h1>
          <div style={{ color: 'var(--hint)', fontSize: '12px' }}>Bangkok • Cyberdeck UI</div>
        </div>
        <div style={{ padding: '6px 12px', background: 'var(--sec-bg)', borderRadius: '20px', fontSize: '12px', border: '1px solid var(--hint)' }}>
          🛰️ ONLINE
        </div>
      </header>

      <div className="ticker-wrap">
        <div className="track">
          <span>🚀 FULL-SCREEN MODE ENABLED ● NATIVE UI 2.0 ● SECURE STORAGE ACTIVE ● </span>
          <span>🚀 FULL-SCREEN MODE ENABLED ● NATIVE UI 2.0 ● SECURE STORAGE ACTIVE ● </span>
        </div>
      </div>

      <div className="bento-grid">
        {items.map(i => (
          <div key={i.id} className="card" onClick={() => handleOrder(i)}>
            <div className="icon-box">{i.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '11px', color: 'var(--accent)', fontWeight: 'bold' }}>{i.tag}</div>
              <h3 style={{ margin: '4px 0', fontSize: '16px' }}>{i.title}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                <span style={{ fontWeight: 'bold', color: 'var(--link)' }}>{i.price} XTR</span>
                <button className="order-btn">ЗАКАЗАТЬ</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer style={{ marginTop: '30px', textAlign: 'center', fontSize: '11px', color: 'var(--hint)' }}>
        © AI DRAGON LAB • DESIGNED FOR TMA 2.0
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
