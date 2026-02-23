import React, { useEffect } from 'react';
import './index.css';

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#1a0a2e');
  }, []);

  const handleAction = (type) => {
    // Нативный тактильный отклик 2026 года 
    tg.HapticFeedback.notificationOccurred(type);
  };

  return (
    <div className="bento-container">
      <div className="ambient-glow"></div>
      
      <header className="glass-card" style={{textAlign: 'center'}}>
        <h1 style={{letterSpacing: '8px', fontSize: '24px', margin: 0}}>DRAGON_LAB</h1>
        <p style={{fontSize: '10px', opacity: 0.4, marginTop: '10px'}}>STATUS: SECURE_CONNECTION_ESTABLISHED</p>
      </header>

      {/* Твой блок "О необычном празднике" превращаем в "Наши Возможности" */}
      <section className="glass-card">
        <h2 style={{color: 'var(--neon-cyan)'}}>НЕМНОГО ОБ ЭТОМ...</h2>
        <p style={{lineHeight: '1.6', opacity: 0.8}}>
          Мы строим не просто ботов, а <b>Mini-SuperApps</b>. Интеграция с нативной биометрией, 
          SecureStorage для твоих ключей и полная Stars-экономика[cite: 448, 477, 571].
        </p>
      </section>

      <button className="glass-card" 
              style={{background: 'var(--neon-cyan)', color: '#000', fontWeight: '900', border: 'none'}}
              onClick={() => handleAction('success')}>
        ЗАКАЗАТЬ ОБЪЕКТ
      </button>
    </div>
  );
}
