import React, { useEffect, useState } from 'react';

const tg = window.Telegram.WebApp;

function App() {
  const [objects, setObjects] = useState([
    { id: 'agent_v1', title: 'AI_STRATEGIST', price: '500 XTR', status: 'LIVE', type: 'featured' },
    { id: 'web3_ui', title: 'CRYPTO_DASH', price: '1200 XTR', status: 'DEV', type: 'small' }
  ]);

  useEffect(() => {
    tg.ready();
    tg.expand();
    // Устанавливаем цвет темы из настроек Telegram
    document.body.style.backgroundColor = tg.themeParams.bg_color;
  }, []);

  const handleBuy = (obj) => {
    // Вызываем нативный платежный флоу Stars
    tg.showConfirm(`Активировать ${obj.title} за ${obj.price}?`, (ok) => {
      if (ok) tg.sendData(JSON.stringify({action: "invoice", id: obj.id}));
    });
  };

  return (
    <div className="bento-grid">
      <header style={{gridColumn: 'span 2', padding: '10px'}}>
        <h1 style={{color: 'var(--dragon-cyan)', fontSize: '24px'}}>DRAGON_LAB.01</h1>
      </header>

      {objects.map(obj => (
        <div key={obj.id} className={`glass-card ${obj.type}`} onClick={() => handleBuy(obj)}>
          <div className="status" style={{fontSize: '10px', color: 'var(--dragon-cyan)'}}>[ {obj.status} ]</div>
          <h2 style={{margin: '10px 0'}}>{obj.title}</h2>
          <div className="price" style={{fontWeight: 'bold'}}>{obj.price}</div>
        </div>
      ))}
    </div>
  );
}
