import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
    tg.expand();
  }, []);

  const user = tg.initDataUnsafe?.user;

  return (
    <div className="dashboard">
      <div className="header">
        <div style={{fontSize: '10px', opacity: 0.6}}>SYSTEM_LOG // SECTOR_88</div>
        <div style={{fontSize: '18px', fontWeight: 'bold'}}>AI DRAGON LAB</div>
      </div>

      {/* ГЛАВНЫЙ ОБЪЕКТ: КОНСУЛЬТАНТ */}
      <div className="main-card">
        <span className="status-tag">LIVE</span>
        <h3 style={{color: 'var(--neon-blue)'}}>AI_STRATEGIST_V1</h3>
        <p style={{fontSize: '0.9rem', opacity: 0.8}}>Умный агент для автоматизации лидов и консультаций.</p>
        <button onClick={() => tg.sendData("talk_to_agent")}>ЗАПУСТИТЬ ДЕМО</button>
      </div>

      {/* ВТОРОСТЕПЕННЫЕ ОБЪЕКТЫ */}
      <div className="small-card">
        <span className="status-tag" style={{borderColor: '#aaa', color: '#aaa'}}>DEV</span>
        <h4>SMART_CRM</h4>
        <p>Управление заказами внутри ТГ.</p>
      </div>

      <div className="small-card">
        <span className="status-tag">PROD</span>
        <h4>PORTFOLIO_UI</h4>
        <p>Клон этой витрины под ключ.</p>
      </div>

      <div style={{gridColumn: 'span 2', textAlign: 'center', opacity: 0.4, fontSize: '10px', marginTop: '20px'}}>
        ID: {user?.id || "000000"} | ACCESS_GRANTED
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
