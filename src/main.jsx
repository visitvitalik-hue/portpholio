import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const tg = window.Telegram.WebApp;

const App = () => {
  useEffect(() => {
    // Инициализация по стандартам 2026 [cite: 4, 12]
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#070914'); // Твой фирменный глубокий синий
  }, []);

  // Данные из твоего макета CADRHUB
  const [modes] = useState([
    { id: 'hype', title: 'Хайповый стиль', icon: '⚡', price: 250, desc: 'Коротко, дерзко, как "взорвали ленту".' },
    { id: 'old_money', title: 'Old Money', icon: '💎', price: 500, desc: 'Минимализм, "дорогой" тон, без суеты.' },
    { id: 'collage', title: 'Коллаж-постер', icon: '🧩', price: 150, desc: 'Собираем "афишу" из кадров.' }
  ]);

  const handleOrder = (mode) => {
    // 1. Тот самый "жужжащий" отклик для Android 
    tg.HapticFeedback.notificationOccurred('success');
    tg.HapticFeedback.impactOccurred('heavy');

    // 2. Логика Stars (XTR): Инвойс и подтверждение [cite: 42, 61]
    tg.showConfirm(`Заказать "${mode.title}" за ${mode.price} Stars?`, (ok) => {
      if (ok) {
        // Отправка данных боту для создания счета [cite: 87, 95]
        tg.sendData(JSON.stringify({
          action: "buy_stars",
          item: mode.id,
          amount: mode.price
        }));
      }
    });
  };

  return (
    <div style={styles.body} className="bg-grid">
      <div style={styles.wrap}>
        {/* HEADER: Твой логотип со спином */}
        <header style={styles.header}>
          <div style={styles.brand}>
            <div style={styles.logo} className="logo-spin"></div>
            <div>
              <h1 style={styles.h1}>CADRHUB</h1>
              <small style={styles.small}>Bangkok Cyberdeck • v2177</small>
            </div>
          </div>
          <div style={styles.badge}>🛰️ online • Stars Ready</div>
        </header>

        {/* ТРЕКЕР: Бегущая строка [cite: 24] */}
        <div style={styles.ticker}>
          <div className="ticker-track" style={styles.track}>
            <span>🚀 CADRHUB: СТИЛЬ 2026 ● STARS PAY ENABLED ● КИБЕРПАНК ЖИВ ● </span>
            <span>🚀 CADRHUB: СТИЛЬ 2026 ● STARS PAY ENABLED ● КИБЕРПАНК ЖИВ ● </span>
          </div>
        </div>

        {/* СЕТКА ОБЪЕКТОВ (Bento Grid) [cite: 39, 55] */}
        <div style={styles.grid}>
          {modes.map(mode => (
            <div key={mode.id} style={styles.card} onClick={() => handleOrder(mode)}>
              <div style={styles.icon}>{mode.icon}</div>
              <div style={{flex: 1}}>
                <div style={styles.cardHeader}>
                  <h3 style={styles.h3}>{mode.title}</h3>
                  <span style={styles.price}>{mode.price} XTR</span>
                </div>
                <p style={styles.p}>{mode.desc}</p>
                <div style={styles.btnRow}>
                  <button style={styles.btnPrimary}>ЗАКАЗАТЬ</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer style={styles.footer}>
          © CADRHUB • SECURE_SESSION: {tg.initDataUnsafe?.user?.id || '88'}
        </footer>
      </div>
    </div>
  );
};

// СТИЛИ: Твой CADRHUB UI + Liquid Glass 
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
  h1: { fontSize: '18px', margin: 0, letterSpacing: '0.6px' },
  small: { display: 'block', color: 'rgba(233,240,255,0.65)', fontSize: '12px' },
  badge: { fontSize: '12px', padding: '8px 12px', borderRadius: '999px', background: 'rgba(16,18,35,0.55)', border: '1px solid rgba(255,255,255,0.12)' },
  ticker: { margin: '20px 0', padding: '10px 0', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' },
  track: { display: 'flex', gap: '40px', whiteSpace: 'nowrap' },
  grid: { display: 'flex', flexDirection: 'column', gap: '12px' },
  card: {
    background: 'rgba(16,18,35,0.52)',
    backdropFilter: 'blur(20px)',
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
