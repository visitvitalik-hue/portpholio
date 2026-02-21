import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
    tg.expand();
  }, []);

  return (
    <div className="content-wrapper">
      <header>
        <h2 style={{color: '#00ffff'}}>AI DRAGON LAB</h2>
        <p style={{fontSize: '10px', opacity: 0.5}}>SYSTEM STATUS: ONLINE // SECTOR 88</p>
      </header>

      {/* Горизонтальный ряд работ */}
      <div className="portfolio-track">
        <div className="portfolio-item" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1620712943543-bcc4628c9757?w=500)'}}></div>
        <div className="portfolio-item" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500)'}}></div>
      </div>

      {/* Тот самый "Немного об этом" блок */}
      <div className="story-section">
        <h3>О НАШИХ ОБЪЕКТАХ</h3>
        <p>Мы создаем иммерсивные Mini Apps с поддержкой биометрии[cite: 250], 
           защищенным хранилищем данных [cite: 245] и мгновенной оплатой в Stars[cite: 17].</p>
      </div>

      <button className="cta-button" onClick={() => tg.sendData("open_order")}>
        СВЯЗАТЬСЯ С ЛАБОРАТОРИЕЙ
      </button>
      
      <div style={{opacity: 0.2, fontSize: '9px', textAlign: 'center'}}>
        VERSION 2.1.0 // 2026_BUILD
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
