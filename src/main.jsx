import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const tg = window.Telegram.WebApp;

const PORTFOLIO_DATA = [
  { id: 1, title: "NEURAL_BOT_V1", desc: "Liquid Glass & AI Agents", img: "https://images.unsplash.com/photo-1620712943543-bcc4628c9757?w=800" },
  { id: 2, title: "CRYPTO_INTERFACE", desc: "Stars Payments & SecureStorage", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800" },
  { id: 3, title: "SMART_SHOWROOM", desc: "Bento Grid & GenUI", img: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=800" }
];

function App() {
  useEffect(() => {
    tg.ready();
    tg.expand();
    // Нативная настройка цвета хедера под тему Telegram 
    if (tg.themeParams.bg_color) {
      tg.setHeaderColor(tg.themeParams.bg_color);
    }
  }, []);

  return (
    <div className="dashboard">
      <div className="header">
        <span style={{color: 'var(--neon-cyan)'}}>●</span> SECTOR_88 // PORTFOLIO_DASHBOARD
      </div>

      <div className="gallery-container">
        {PORTFOLIO_DATA.map(obj => (
          <div key={obj.id} className="work-card">
            <div className="image-box">
              <img src={obj.img} alt={obj.title} />
            </div>
            <div className="card-info">
              <div className="status-badge">OBJECT_{obj.id}</div>
              <h3 style={{margin: '12px 0 6px 0', fontSize: '18px'}}>{obj.title}</h3>
              <p style={{fontSize: '12px', opacity: 0.6, margin: 0}}>{obj.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="cta-button" onClick={() => tg.sendData("contact_operator")}>
        ЗАКАЗАТЬ РАЗРАБОТКУ
      </button>

      <div style={{textAlign: 'center', opacity: 0.3, fontSize: '10px', marginTop: '15px'}}>
        SECURE_SESSION: {tg.initDataUnsafe?.user?.id || 'AUTH_PENDING'}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
