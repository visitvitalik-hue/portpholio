import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const tg = window.Telegram.WebApp;

const App = () => {
  useEffect(() => {
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#070914');
  }, []);

  const [objects] = useState([
    { id: 'agent_pro', title: 'AI_STRATEGIST', price: 500, icon: '🐉', desc: 'RAG-архитектура и streaming ответов.' },
    { id: 'secure_vault', title: 'SECURE_VAULT', price: 1200, icon: '🔐', desc: 'SecureStorage и биометрия 2026.' },
    { id: 'liquid_ui', title: 'LIQUID_INTERFACE', price: 800, icon: '💎', desc: 'Тот самый "залипательный" дизайн.' }
  ]);

  const handleAction = (obj) => {
    // ЖУЖЖАНИЕ ДЛЯ ANDROID
    tg.HapticFeedback.notificationOccurred('success');
    tg.HapticFeedback.impactOccurred('heavy');

    tg.showConfirm(`Активировать ${obj.title} за ${obj.price} Stars?`, (ok) => {
      if (ok) {
        tg.sendData(JSON.stringify({ action: "buy", id: obj.id, amount: obj.price }));
      }
    });
  };

  return (
    <div style={styles.body}>
      {/* ИНЪЕКЦИЯ АНИМАЦИИ ДЛЯ СТРОКИ */}
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logo-spin {
          animation: spin 6s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div style={styles.wrap}>
        <header style={styles.header}>
          <div style={styles.brand}>
            <div className="logo-spin" style={styles.logo}></div>
            <div>
              <h1 style={styles.h1}>AI DRAGON LAB</h1>
              <small style={styles.small}>SECTOR_88 // CYBERDECK_UI</small>
            </div>
          </div>
          <div style={styles.badge}>🛰️ online • Stars Ready</div>
        </header>

        {/* БЕГУЩАЯ СТРОКА */}
        <div style={styles.ticker}>
          <div style={styles.track}>
            <span style={styles.tickerSpan}>🚀 DRAGON_LAB: МОНЕТИЗАЦИЯ STARS ВКЛЮЧЕНА ● СЕКТОР 88 ● КИБЕРПАНК 2026 ● </span>
            <span style={styles.tickerSpan}>🚀 DRAGON_LAB: МОНЕТИЗАЦИЯ STARS ВКЛЮЧЕНА ● СЕКТОР 88 ● КИБЕРПАНК 2026 ● </span>
          </div>
        </div>

        <div style={styles.grid}>
          {objects.map(obj => (
            <div key={obj.id} style={styles.card} onClick={() => handleAction(obj)}>
              <div style={styles.icon}>{obj.icon}</div>
              <div style={{flex: 1}}>
                <div style={styles.cardHeader}>
                  <h3 style={styles.h3}>{obj.title}</h3>
                  <span style={styles.price}>{obj.price} XTR</span>
                </div>
                <p style={styles.p}>{obj.desc}</p>
                <button style={styles.btnPrimary}>ЗАКАЗАТЬ</button>
              </div>
            </div>
          ))}
        </div>

        <footer style={styles.footer}>© AI DRAGON LAB • СДЕЛАНО В ВЕСНЕ 2026</footer>
      </div>
    </div>
  );
};

const styles = {
  body: { minHeight: '100vh', background: '#070914', color: '#E9F0FF', fontFamily: 'sans-serif', overflowX: 'hidden' },
  wrap: { maxWidth: '980px', margin: '0 auto', padding: '16px 14px' },
  header: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' },
  brand: { display: 'flex', alignItems: 'center', gap: '10px' },
  logo: {
    width: '44px', height: '44px', borderRadius: '14px',
    background: 'radial-gradient(circle, #7DF9FF, #FF2BD6)',
    boxShadow: '0 0 22px rgba(125,249,255,0.18)'
  },
  h1: { fontSize: '18px', margin: 0, letterSpacing: '0.6px', fontWeight: 'bold' },
  small: { display: 'block', color: 'rgba(233,240,255,0.65)', fontSize: '12px' },
  badge: { fontSize: '12px', padding: '8px 12px', borderRadius: '999px', background: 'rgba(16,18,35,0.55)', border: '1px solid rgba(255,255,255,0.12)' },
  ticker: { margin: '20px 0', overflow: 'hidden', background: 'rgba(16,18,35,0.55)', borderY: '1px solid rgba(255,255,255,0.1)' },
  track: { display: 'flex', gap: '40px', padding: '10px 0', animation: 'ticker 15s linear infinite', width: 'max-content' },
  tickerSpan: { whiteSpace: 'nowrap', fontSize: '13px', color: '#7DF9FF' },
  grid: { display: 'flex', flexDirection: 'column', gap: '12px' },
  card: { background: 'rgba(16,18,35,0.52)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '18px', padding: '16px', display: 'flex', gap: '15px' },
  icon: { width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(0,0,0,0.2)', display: 'grid', placeItems: 'center', fontSize: '24px' },
  cardHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  h3: { margin: 0, fontSize: '16px', color: '#7DF9FF' },
  price: { fontSize: '14px', fontWeight: 'bold', color: '#FF2BD6' },
  p: { fontSize: '13px', color: 'rgba(233,240,255,0.7)', margin: '8px 0' },
  btnPrimary: { background: 'rgba(125,249,255,0.1)', border: '1px solid rgba(125,249,255,0.3)', color: '#7DF9FF', padding: '8px 16px', borderRadius: '10px', fontSize: '12px', fontWeight: 'bold' },
  footer: { marginTop: '30px', textAlign: 'center', fontSize: '11px', opacity: 0.4 }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
