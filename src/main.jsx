import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const tg = window.Telegram.WebApp;

const App = () => {
  useEffect(() => {
    // Инициализация по стандартам 2026 [cite: 8]
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#070914'); // Глубокий темный статус-бар
    tg.enableClosingConfirmation();
  }, []);

  // Твои объекты из Сектора 88
  const [objects] = useState([
    { id: 'agent_pro', title: 'AI_STRATEGIST', price: 500, icon: '🐉', desc: 'RAG-архитектура и streaming ответов.' },
    { id: 'secure_vault', title: 'SECURE_VAULT', price: 1200, icon: '🔐', desc: 'SecureStorage и биометрия 2026.' },
    { id: 'bento_ui', title: 'LIQUID_INTERFACE', price: 800, icon: '💎', desc: 'Тот самый "залипательный" дизайн.' }
  ]);

  const handleAction = (obj) => {
    // Тот самый тактильный отклик (жужжание) для Android [cite: 12, 32]
    tg.HapticFeedback.notificationOccurred('success');
    tg.HapticFeedback.impactOccurred('heavy');

    // Нативное окно оплаты Stars (XTR) [cite: 42, 87]
    tg.showConfirm(`Активировать ${obj.title} за ${obj.price} Stars?`, (ok) => {
      if (ok) {
        tg.sendData(JSON.stringify({ action: "buy", id: obj.id, amount: obj.price }));
      }
    });
  };

  return (
    <div style={styles.body} className="bg-grid">
      <div style={styles.wrap}>
        
        {/* HEADER: Твое название */}
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

        {/* ТИКЕР: Бегущая строка из твоего референса */}
        <div style={styles.ticker}>
          <div className="ticker-track" style={styles.track}>
            <span>🚀 DRAGON_LAB: МОНЕТИЗАЦИЯ STARS ВКЛЮЧЕНА ● СЕКТОР 88 ● КИБЕРПАНК 2026 ● </span>
            <span>🚀 DRAGON_LAB: МОНЕТИЗАЦИЯ STARS ВКЛЮЧЕНА ● СЕКТОР 88 ● КИБЕРПАНК 2026 ● </span>
          </div>
        </div>

        {/* ГРИД: Твои объекты */}
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
                <div style={styles.btnRow}>
                  <button style={styles.btnPrimary}>КУПИТЬ</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer style={styles.footer}>
          © AI DRAGON LAB • SECURE_SESSION: {tg.initDataUnsafe?.user?.id || '88'}
        </footer>
      </div>
    </div>
  );
};

// Стили, которые делают "дорого": Жидкое стекло и Неон
const styles = {
  body: {
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #060815, #070914 60%, #050614)',
    color: '#E9F0FF',
    fontFamily: 'ui-sans-serif, system-ui',
    overflowX: 'hidden',
    position: 'relative'
  },
  wrap: { maxWidth: '980px', margin: '0 auto', padding: '16px 14px' },
  header: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' },
  brand: { display: 'flex', alignItems: 'center', gap: '10px' },
  logo: {
    width: '44px', height: '44px', borderRadius: '14px',
    background: 'radial-gradient(circle at 30% 30%, #7DF9FF, transparent 60%), radial-gradient(circle at 70% 70%, #FF2BD6, transparent 60%)',
    border: '1px solid rgba(255,255,255,0.1)',
    boxShadow: '0 0 22px rgba(125,249,255,0.18)'
  },
  h1: { fontSize: '18px', margin: 0, letterSpacing: '0.6px', fontWeight: 'bold' },
  small: { display: 'block', color: 'rgba(233,240,255,0.65)', fontSize: '12px' },
  badge: { fontSize: '12px', padding: '8px 12px', borderRadius: '999px', background: 'rgba(16,18,35,0.55)', border: '1px solid rgba(255,255,255,0.12)' },
  ticker: { margin: '20px 0', padding: '10px 0', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' },
  track: { display: 'flex', gap: '40px', whiteSpace: 'nowrap' },
  grid: { display: 'flex', flexDirection: 'column', gap: '12px' },
  card: {
    background: 'rgba(16,18,35,0.52)',
    backdropFilter: 'blur(20px)', // Liquid Glass эффект [cite: 61]
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '18px',
    padding: '16px',
    display: 'flex',
    gap: '15px',
    alignItems: 'flex-start',
    cursor: 'pointer'
  },
  icon: { width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(0,0,0,0.2)', display: 'grid', placeItems: 'center', fontSize: '24px' },
  cardHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  h3: { margin: 0, fontSize: '16px', color: '#7DF9FF' },
  price: { fontSize: '14px', fontWeight: 'bold', color: '#FF2BD6' },
  p: { fontSize: '13px', color: 'rgba(233,240,255,0.7)', margin: '8px 0' },
  btnRow: { marginTop: '10px' },
  btnPrimary: { background: 'rgba(125,249,255,0.1)', border: '1px solid rgba(125,249,255,0.3)', color: '#7DF9FF', padding: '8px 16px', borderRadius: '10px', fontSize: '12px', fontWeight: 'bold' },
  footer: { marginTop: '30px', textAlign: 'center', fontSize: '11px', opacity: 0.4 }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
