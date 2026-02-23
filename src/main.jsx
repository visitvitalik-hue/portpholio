import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
    tg.expand(); // Разворачиваем Mini App [cite: 222]
    tg.setHeaderColor('#1a0a2e');
  }, []);

  const handleOrder = (name) => {
    tg.HapticFeedback.impactOccurred('heavy'); // Вибрация 2026 года [cite: 222]
    tg.sendData(JSON.stringify({ action: "order", item: name }));
  };

  return (
    <div style={{padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px'}}>
      <div className="bg-glow"></div>
      
      <header style={{textAlign: 'center', marginBottom: '20px'}}>
        <h1 style={{fontSize: '28px', color: 'var(--neon)', letterSpacing: '5px'}}>DRAGON_LAB</h1>
        <p style={{fontSize: '10px', opacity: 0.5}}>SECURE_SESSION // EST. 2026</p>
      </header>

      <div className="bento-card" onClick={() => handleOrder("AI_AGENT")}>
        <div style={{fontSize: '40px', marginBottom: '15px'}}>🐉</div>
        <h2 style={{margin: 0}}>AI_AGENT_PRO</h2>
        <p style={{fontSize: '13px', opacity: 0.7}}>RAG-архитектура с real-time стримингом ответов[cite: 232].</p>
        <div style={{color: 'var(--neon)', fontWeight: 'bold'}}>500 XTR</div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
