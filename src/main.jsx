import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const tg = window.Telegram.WebApp;

// Объекты из твоего макета
const APPS_DATA = [
  { id: 1, name: 'PixelGame', icon: '🎮', price: '500 XTR', tech: ['Phaser', 'Node.js'] },
  { id: 2, name: 'CryptoTracker', icon: '💹', price: '800 XTR', tech: ['React', 'WebSocket'] },
  { id: 3, name: 'AI_STRATEGIST', icon: '🤖', price: '1500 XTR', tech: ['OpenAI', 'RAG'] }
];

function App() {
  useEffect(() => {
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#0a0a0f'); // Твой темный киберпанк-цвет
  }, []);

  const handleOrder = (app) => {
    // Отправляем данные боту для квалификации лида [cite: 614]
    tg.sendData(JSON.stringify({ action: "order_request", item: app.name }));
    tg.HapticFeedback.impactOccurred('heavy'); // Тактильный отклик
  };

  return (
    <div className="container">
      <header className="cyber-header">
        <div className="logo">◆ MINIAPPS_LAB</div>
        <div className="status-line">> СЕКТОР_88 // СТАТУС: ОНЛАЙН</div>
      </header>

      <div className="bento-grid">
        {APPS_DATA.map(app => (
          <div key={app.id} className="app-card glass">
            <div className="preview-zone">{app.icon}</div>
            <div className="card-body">
              <h3>{app.name}</h3>
              <div className="tags">
                {app.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
              </div>
              <div className="price-box">
                <span className="xtr-price">{app.price}</span>
                <div className="btn-group">
                   <button className="btn-secondary" onClick={() => window.open('https://github.com')}>ДЕМО</button>
                   <button className="btn-primary" onClick={() => handleOrder(app)}>ЗАКАЗАТЬ</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
