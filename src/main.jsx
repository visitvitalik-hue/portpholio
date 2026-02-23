import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#1a0a2e');
  }, []);

  const triggerHaptic = () => {
    tg.HapticFeedback.impactOccurred('heavy');
  };

  return (
    <div style={{padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px'}}>
      <div className="ambient-light"></div>
      
      <header style={{textAlign: 'center', marginBottom: '20px'}}>
        <h1 style={{fontSize: '32px', color: 'var(--cyan)', letterSpacing: '4px'}}>DRAGON_LAB</h1>
        <p style={{fontSize: '10px', opacity: 0.4}}>SECURE_CONNECTION // 2026</p>
      </header>

      <div className="bento-card" onClick={triggerHaptic}>
        <div style={{fontSize: '40px', marginBottom: '15px'}}>🐉</div>
        <h2>CYBER_MARKET</h2>
        <p style={{opacity: 0.7}}>Интерактивная площадка заказов с нативной оплатой Stars.</p>
        <button style={{background: 'var(--cyan)', border: 'none', padding: '12px 24px', borderRadius: '15px', fontWeight: 'bold'}}>
          ИССЛЕДОВАТЬ
        </button>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
