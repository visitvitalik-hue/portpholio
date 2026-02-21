import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const tg = window.Telegram.WebApp;

// Твоё портфолио - добавляй сюда пути к скринам
const PORTFOLIO = [
  { id: 1, title: "AI_RETOUCHER_INTERFACE", img: "https://твоя-ссылка/Log_88.mp4", desc: "GenUI & Liquid Glass" },
  { id: 2, title: "CRYPTO_DASHBOARD_V2", img: "https://твоя-ссылка/Log_88.mp4", desc: "3D Tactile & Stars Pay" },
  { id: 3, title: "ED_TECH_PLATFORM", img: "https://твоя-ссылка/Log_88.mp4", desc: "Streaming AI Assistant" }
];

function App() {
  useEffect(() => {
    tg.ready();
    tg.expand();
  }, []);

  return (
    <div className="dashboard">
      <div className="header">
        <span className="neon-dot">●</span> PORTFOLIO_SURVEILLANCE // SECTOR_88
      </div>

      {/* ГАЛЕРЕЯ */}
      <div className="gallery-scroll">
        {PORTFOLIO.map(work => (
          <div key={work.id} className="gallery-item glass-card" onClick={() => tg.showPopup({title: work.title, message: work.desc})}>
            <div className="img-container">
               <img src={work.img} alt={work.title} loading="lazy" />
            </div>
            <div className="work-info">
               <div className="status-badge">OBJECT_{work.id}</div>
               <h3>{work.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <button className="cta-button" onClick={() => tg.sendData("order_custom_app")}>
        ЗАКАЗАТЬ ПОДОБНЫЙ ОБЪЕКТ
      </button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
