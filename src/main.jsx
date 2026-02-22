import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const tg = window.Telegram.WebApp;

// Наша «мебель» — список готовых и строящихся объектов
const SHOWROOM_DATA = [
  {
    id: "AI_STRAT",
    title: "AI СТРАТЕГ V1",
    desc: "Автоматический захват лидов и консультация. Уровень: Pro.",
    price: "500 XTR",
    status: "LIVE",
    badge: "TOP SELLER"
  },
  {
    id: "DASH_88",
    title: "DASHBOARD 88",
    desc: "Тот самый Liquid Glass интерфейс, который ты видишь сейчас.",
    price: "1200 XTR",
    status: "LIVE",
    badge: "NEW"
  },
  {
    id: "SECURE_GATE",
    title: "SECURE GATE",
    desc: "Модуль биометрии и защищенного хранения данных.",
    price: "800 XTR",
    status: "DEVELOPMENT",
    badge: "COMING SOON"
  }
];

function App() {
  useEffect(() => {
    tg.ready();
    tg.expand();
  }, []);

  return (
    <div className="dashboard">
      <header className="header-zone">
        <h1>AI DRAGON LAB</h1>
        <div className="system-status">● SYSTEM_ONLINE // MARCH_2026</div>
      </header>

      <div className="bento-grid">
        {SHOWROOM_DATA.map(item => (
          <div key={item.id} className={`card ${item.status === 'LIVE' ? 'active' : 'pending'}`}>
            <div className="card-header">
              <span className="badge">{item.badge}</span>
              <span className="id-tag">{item.id}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <div className="card-footer">
              <span className="price">{item.price}</span>
              <button onClick={() => tg.sendData(`order:${item.id}`)}>
                {item.status === 'LIVE' ? 'КУПИТЬ' : 'ПРЕДЗАКАЗ'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
