import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const tg = window.Telegram.WebApp;

const OBJECTS = [
  { id: 'AG_01', title: 'AI_AGENT_PRO', price: '500 XTR', status: 'LIVE', type: 'featured' },
  { id: 'UI_02', title: 'LIQUID_DASH', price: '1200 XTR', status: 'NEW', type: 'small' },
  { id: 'SEC_03', title: 'SAFE_STORAGE', price: '800 XTR', status: 'LIVE', type: 'small' }
];

function App() {
  useEffect(() => {
    tg.ready();
    tg.expand();
    // Настраиваем цвета под системную тему Telegram 2026
    tg.setHeaderColor(tg.themeParams.bg_color);
  }, []);

  const handlePurchase = (obj) => {
    // Жизненный цикл платежа Stars [cite: 430, 655]
    tg.showConfirm(`Активировать ${obj.title} через протокол Stars?`, (ok) => {
      if (ok) {
        tg.sendData(JSON.stringify({
          action: "invoice_request",
          item: obj.id,
          currency: "XTR"
        }));
      }
    });
  };

  return (
    <div className="dashboard">
      <div className="header">
        <span style={{color: 'var(--neon-cyan)'}}>●</span> SECTOR_88 // LAB
      </div>

      {OBJECTS.map(obj => (
        <div key={obj.id} className={`bento-card ${obj.type}`}>
          <div>
            <div className="status-badge">{obj.status}</div>
            <h2 style={{margin: '15px 0 5px 0', fontSize: '1.2rem'}}>{obj.title}</h2>
          </div>
          <div>
            <div style={{fontSize: '14px', color: 'var(--neon-cyan)'}}>{obj.price}</div>
            <button onClick={() => handlePurchase(obj)}>ДОСТУП</button>
          </div>
        </div>
      ))}
      
      <div style={{gridColumn: 'span 2', textAlign: 'center', opacity: 0.3, fontSize: '10px', marginTop: '20px'}}>
        ENCRYPTED_SESSION: {tg.initDataUnsafe?.user?.id || 'ANONYMOUS'}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
