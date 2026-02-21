import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const tg = window.Telegram.WebApp;

const APPS = [
  { id: 1, name: 'PixelGame', icon: '🎮', desc: 'Retro gaming platform с мультиплеером.', tech: ['Phaser', 'Node.js'] },
  { id: 2, name: 'CryptoTracker', icon: '💹', desc: 'Real-time tracking с графиками TradingView.', tech: ['React', 'WebSocket'] },
  { id: 3, name: 'AI_STRATEGIST', icon: '🤖', desc: 'Умный агент для захвата лидов 24/7.', tech: ['OpenAI', 'RAG'] }
];

function App() {
  useEffect(() => {
    tg.ready();
    tg.expand();
  }, []);

  const sendOrder = (name) => {
    tg.sendData(`order_request:${name}`);
    tg.showAlert(`Заявка на ${name} отправлена в Сектор 88!`);
  };

  return (
    <div className="dashboard">
      <header style={{marginBottom: '40px', borderLeft: '4px solid var(--neon-cyan)', paddingLeft: '15px'}}>
        <h1 style={{margin: 0, letterSpacing: '4px'}}>MINIAPPS_LAB</h1>
        <p style={{fontSize: '10px', color: 'var(--neon-magenta)'}}>&gt; PORTFOLIO_SURVEILLANCE // 2026_MARCH</p>
      </header>

      <div className="bento-grid">
        {APPS.map(app => (
          <div key={app.id} className="app-card">
            <div style={{fontSize: '32px', marginBottom: '10px'}}>{app.icon}</div>
            <h3 style={{color: 'var(--neon-cyan)', margin: '0 0 10px 0'}}>{app.name}</h3>
            <p style={{fontSize: '13px', opacity: 0.8}}>{app.desc}</p>
            <div style={{display: 'flex', gap: '5px', marginTop: '10px'}}>
              {app.tech.map(t => <span key={t} style={{fontSize: '9px', border: '1px solid #444', padding: '2px 5px'}}>{t}</span>)}
            </div>
            <button className="cta-button" onClick={() => sendOrder(app.name)}>ЗАКАЗАТЬ ОБЪЕКТ</button>
          </div>
        ))}
      </div>
      
      <footer style={{marginTop: '50px', textAlign: 'center', opacity: 0.3, fontSize: '10px'}}>
        &lt; CYBERPUNK DESIGN STUDIO | BANGKOK &gt;
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
