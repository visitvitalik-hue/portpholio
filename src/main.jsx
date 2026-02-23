import React, { useEffect } from 'react';
import './index.css';

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
    tg.expand();
    // Включаем поддержку биометрии, если нужно для VIP-статуса [cite: 250]
  }, []);

  const handleTouch = () => {
    tg.HapticFeedback.impactOccurred('medium'); // Вибрация при взаимодействии
  };

  return (
    <div className="glass-bento">
      <div className="cyber-bg">
        <div className="neon-glow" style={{top: '10%', left: '20%'}}></div>
        <div className="neon-glow" style={{bottom: '20%', right: '10%', background: 'rgba(255,0,255,0.1)'}}></div>
      </div>

      <header className="hero-card" onMouseEnter={handleTouch}>
        <h1 style={{fontSize: '32px', letterSpacing: '5px', color: '#00ffff'}}>AI DRAGON LAB</h1>
        <p style={{opacity: 0.5}}>SECTOR: 88 // NEURAL_GATEWAY</p>
      </header>

      {/* Интерактивные объекты портфолио */}
      <div className="hero-card" style={{marginTop: '20px'}} onClick={handleTouch}>
        <div style={{fontSize: '50px', marginBottom: '20px'}}>🐉</div>
        <h2>OBJECT_01: AI_AGENT</h2>
        <p>Полное погружение в RAG-архитектуру с real-time стримингом ответов[cite: 302].</p>
        <button className="cta" style={{background: '#00ffff', border: 'none', padding: '15px 30px', borderRadius: '20px', fontWeight: 'bold'}}>
          АКТИВИРОВАТЬ
        </button>
      </div>
    </div>
  );
}
