import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const tg = window.Telegram.WebApp;

const App = () => {
  useEffect(() => {
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#0a0a0f'); // Ставим темный статус-бар [cite: 21]
  }, []);

  // Твои товары (меняй текст здесь!) [cite: 167]
  const [items] = useState([
    { id: '1', title: 'PIXEL_GAME', price: '500', icon: '🎮', desc: 'Retro World 2026' },
    { id: '2', title: 'AI_STRATEGIST', price: '1500', icon: '🤖', desc: 'Enterprise Intelligence' }
  ]);

  const buy = (item) => {
    // ВОТ ТУТ НАСТРОЙКА ВИБРАЦИИ (ЖУЖЖАНИЯ) 
    tg.HapticFeedback.notificationOccurred('success'); 
    tg.HapticFeedback.impactOccurred('heavy');

    tg.showConfirm(`Заказать ${item.title} за ${item.price} Stars?`, (ok) => {
      if (ok) {
        tg.sendData(JSON.stringify({ action: "buy", id: item.id })); // Сигнал боту [cite: 94, 95]
      }
    });
  };

  return (
    <div style={styles.main}>
      <div style={styles.glow}></div> {/* Живой фон  */}
      
      <header style={styles.header}>
        <div style={styles.badge}>SECURE_SESSION // 88</div>
        <h1 style={styles.logo}>DRAGON_LAB</h1>
      </header>

      <div style={styles.grid}>
        {items.map(i => (
          <div key={i.id} style={styles.card} onClick={() => buy(i)}>
            <div style={{fontSize: '40px'}}>{i.icon}</div>
            <div style={{flex: 1}}>
              <h3 style={{margin: 0, color: '#00ffff'}}>{i.title}</h3>
              <p style={{margin: '5px 0', fontSize: '12px', opacity: 0.6}}>{i.desc}</p>
              <div style={{fontWeight: 'bold', color: '#00ffff'}}>{i.price} XTR</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ВСЕ СТИЛИ ТУТ! МЕНЯЙ ЦВЕТА ЗДЕСЬ 
const styles = {
  main: {
    minHeight: '100vh',
    background: 'radial-gradient(circle at top, #1a0a2e 0%, #050508 100%)',
    color: '#fff',
    padding: '20px',
    fontFamily: 'monospace',
    position: 'relative',
    overflow: 'hidden'
  },
  glow: {
    position: 'fixed',
    top: 0, left: 0, width: '100%', height: '100%',
    background: 'radial-gradient(circle, rgba(0, 255, 255, 0.05) 0%, transparent 70%)',
    pointerEvents: 'none'
  },
  header: { textAlign: 'center', marginBottom: '30px' },
  logo: { letterSpacing: '8px', fontSize: '28px', color: '#00ffff' },
  badge: { fontSize: '10px', border: '1px solid #00ffff', padding: '2px 8px', borderRadius: '10px', display: 'inline-block' },
  grid: { display: 'flex', flexDirection: 'column', gap: '15px' },
  card: {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(0, 255, 255, 0.1)',
    borderRadius: '25px',
    padding: '20px',
    display: 'flex',
    gap: '20px',
    alignItems: 'center'
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
