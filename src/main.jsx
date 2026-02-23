import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const tg = window.Telegram.WebApp;

const App = () => {
  // Выбор индустрии (переключаем для демонстрации клиенту)
  const [sector, setSector] = useState('CONSTRUCTION'); // СТРОЙКА / BEAUTY / SNEAKERS

  useEffect(() => {
    tg.ready();
    tg.expand();
    tg.setHeaderColor(sector === 'CONSTRUCTION' ? '#d4af37' : '#FF2BD6'); // Золото для стройки / Розовый для бьюти
  }, [sector]);

  // База данных нашего "Завода"
  const sectors = {
    CONSTRUCTION: {
      title: 'HOUSE_BUILDER_88',
      hero: 'МЫ СТРОИМ ЦИФРОВЫЕ КРЕПОСТИ',
      color: '#d4af37',
      items: [
        { name: 'MODERN_VILLA', price: '15000 XTR', icon: '🏠' },
        { name: 'HI-TECH_LOFT', price: '9000 XTR', icon: '🏗' }
      ]
    },
    BEAUTY: {
      title: 'BEAUTY_MIRROR',
      hero: 'ТВОЙ ОБРАЗ В СЕКТОРЕ 88',
      color: '#FF2BD6',
      items: [
        { name: 'PREMIUM_MAKEUP', price: '300 XTR', icon: '💄' },
        { name: 'SKIN_REPAIR', price: '500 XTR', icon: '✨' }
      ]
    }
  };

  const current = sectors[sector];

  return (
    <div style={{...styles.body, background: `radial-gradient(circle at top, ${current.color}11 0%, #050508 100%)`}}>
      <style>{`
        @keyframes ticker { to { transform: translateX(-50%); } }
        .card-glass { background: rgba(255,255,255,0.03); backdrop-filter: blur(15px); border: 1px solid ${current.color}33; border-radius: 20px; }
      `}</style>

      <div style={styles.container}>
        <header style={styles.header}>
           <h1 style={{color: current.color, letterSpacing: '4px'}}>{current.title}</h1>
           <div style={styles.controls}>
             <button onClick={() => setSector('CONSTRUCTION')}>🏗</button>
             <button onClick={() => setSector('BEAUTY')}>💄</button>
           </div>
        </header>

        <div className="card-glass" style={styles.hero}>
          <h2 style={{fontSize: '20px'}}>{current.hero}</h2>
          <p style={{fontSize: '12px', opacity: 0.6}}>Нажми на объект, чтобы активировать тактильный отклик и заказать проект.</p>
        </div>

        <div style={styles.grid}>
          {current.items.map(item => (
            <div key={item.name} className="card-glass" style={styles.card} onClick={() => tg.HapticFeedback.impactOccurred('heavy')}>
              <div style={styles.icon}>{item.icon}</div>
              <div style={{flex: 1}}>
                <h3 style={{fontSize: '16px', margin: 0}}>{item.name}</h3>
                <div style={{color: current.color, fontWeight: 'bold', marginTop: '5px'}}>{item.price}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.ticker}>
          <div style={{...styles.track, animation: 'ticker 10s linear infinite'}}>
            <span>FACTORY_88 ● {current.title} ● {current.title} ● PRODUCTION_READY ● </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: { minHeight: '100vh', color: '#fff', fontFamily: 'monospace', overflowX: 'hidden' },
  container: { maxWidth: '500px', margin: '0 auto', padding: '20px' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' },
  controls: { display: 'flex', gap: '10px' },
  hero: { padding: '30px', textAlign: 'center', marginBottom: '20px' },
  grid: { display: 'flex', flexDirection: 'column', gap: '15px' },
  card: { padding: '20px', display: 'flex', gap: '20px', alignItems: 'center' },
  icon: { fontSize: '30px' },
  ticker: { margin: '40px -20px', background: 'rgba(255,255,255,0.05)', padding: '10px 0' },
  track: { display: 'flex', gap: '50px', whiteSpace: 'nowrap' }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
