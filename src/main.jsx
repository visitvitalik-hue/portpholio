import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const tg = window.Telegram.WebApp;

const OBJECTS = [
  { id: 1, title: "AI_STRATEGIST_V1", desc: "Умный агент для захвата лидов.", status: "live", price: "500 XTR", type: "featured" },
  { id: 2, title: "SMART_CRM", desc: "Управление заказами.", status: "dev", price: "1200 XTR", type: "small" },
  { id: 3, title: "PORTFOLIO_UI", desc: "Клон этой витрины.", status: "live", price: "800 XTR", type: "small" },
  { id: 4, title: "DATA_ANALYZER", desc: "Аналитика в ТГ.", status: "sold", price: "SOLD", type: "small" }
];

function App() {
  useEffect(() => {
    tg.ready();
    tg.expand();
  }, []);

  const handleAction = (obj) => {
  if (obj.status === 'live') {
    // Согласно паттерну P2, Mini App отправляет данные боту [cite: 399]
    tg.sendData(JSON.stringify({
      action: "buy_stars",
      item_id: obj.id,
      title: obj.title,
      amount: 500 // Цена в Stars
    }));
  } else {
    tg.showAlert("Объект в разработке.");
  }
};

  return (
    <div className="dashboard">
      <div className="header-panel">
        <h2 style={{margin: 0, fontSize: '20px'}}>SHOWROOM_88</h2>
        <div style={{fontSize: '10px', opacity: 0.5}}>AI DRAGON LAB // NEURAL_NETWORKS</div>
      </div>

      {OBJECTS.map(obj => (
        <div key={obj.id} className={`card ${obj.type === 'featured' ? 'featured' : ''}`}>
          <div>
            <div className={`status ${obj.status}`}>{obj.status.toUpperCase()}</div>
            <h3 style={{margin: '0 0 10px 0'}}>{obj.title}</h3>
            <p style={{fontSize: '12px', opacity: 0.7}}>{obj.desc}</p>
          </div>
          <div>
            <div className="price-tag">{obj.price}</div>
            <button onClick={() => handleAction(obj)}>
              {obj.status === 'live' ? 'ЗАПУСТИТЬ ТЕСТ' : 'ПОДРОБНЕЕ'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
