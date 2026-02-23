import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const tg = window.Telegram.WebApp;

const App = () => {
  useEffect(() => {
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#000000');
  }, []);

  const [activeTab, setActiveTab] = useState('services');

  const handleOrder = (service) => {
    tg.HapticFeedback.notificationOccurred('success');
    tg.showConfirm(`Заказать: ${service}?`, (ok) => {
      if (ok) tg.sendData(JSON.stringify({ type: 'order', service }));
    });
  };

  return (
    <div style={styles.body}>
      <style>{`
        @keyframes ticker { to { transform: translateX(-50%); } }
        .node-logo {
          width: 80px; height: 80px; margin: 0 auto 20px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 50%; border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
        }
        .node-logo::before {
          content: ''; position: absolute; width: 40px; height: 40px;
          border: 2px solid #007AFF; border-radius: 35% 65% 70% 30% / 30% 30% 70% 70%;
          animation: morph 5s infinite alternate;
        }
        @keyframes morph {
          to { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; transform: rotate(180deg); border-color: #00ffff; }
        }
        .service-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px; padding: 20px; margin-bottom: 12px;
          transition: 0.2s;
        }
        .service-card:active { background: rgba(255, 255, 255, 0.06); transform: scale(0.98); }
      `}</style>

      <div style={styles.container}>
        {/* ЛОГОТИП "ЕДИНЫЙ УЗЕЛ" */}
        <header style={styles.header}>
          <div className="node-logo"></div>
          <h1 style={styles.h1}>SOLO STARTUP</h1>
          <p style={styles.p}>Telegram: Канал + Бот + Mini App</p>
        </header>

        {/* ТАБЫ */}
        <nav style={styles.nav}>
          <div style={activeTab === 'services' ? styles.tabActive : styles.tab} onClick={() => setActiveTab('services')}>УСЛУГИ</div>
          <div style={activeTab === 'audit' ? styles.tabActive : styles.tab} onClick={() => setActiveTab('audit')}>АУДИТ</div>
        </nav>

        {activeTab === 'services' ? (
          <div style={styles.grid}>
            <div className="service-card" onClick={() => handleOrder('Разработка с нуля')}>
              <h3 style={styles.cardH}>РАЗРАБОТКА С НУЛЯ</h3>
              <p style={styles.cardP}>Проектирование логики, дизайн и запуск экосистемы.</p>
              <div style={styles.tag}>Full Cycle</div>
            </div>
            <div className="service-card" onClick={() => handleOrder('SEO & Маркетинг')}>
              <h3 style={styles.cardH}>SEO & МАРКЕТИНГ</h3>
              <p style={styles.cardP}>Вывод в топ поиска Telegram, индексация Mini App.</p>
              <div style={styles.tag}>Growth</div>
            </div>
          </div>
        ) : (
          <div className="service-card" onClick={() => handleOrder('Полный аудит')}>
            <h3 style={styles.cardH}>ТЕХНИЧЕСКИЙ АУДИТ</h3>
            <p style={styles.cardP}>Разбор вашего бота и приложения. Поиск багов и точек роста конверсии.</p>
            <div style={styles.price}>150 XTR</div>
          </div>
        )}

        {/* БЕГУЩАЯ СТРОКА */}
        <div style={styles.ticker}>
          <div style={styles.track}>
            <span>● РАЗРАБОТКА С НУЛЯ ● ТЕХНИЧЕСКИЙ АУДИТ ● SEO В TELEGRAM ● МАРКЕТИНГ ● </span>
            <span>● РАЗРАБОТКА С НУЛЯ ● ТЕХНИЧЕСКИЙ АУДИТ ● SEO В TELEGRAM ● МАРКЕТИНГ ● </span>
          </div>
        </div>

        <footer style={styles.footer}>
          ID: {tg.initDataUnsafe?.user?.id || 'anonymous'} // v1.0
        </footer>
      </div>
    </div>
  );
};

const styles = {
  body: { background: '#000', color: '#fff', minHeight: '100vh', fontFamily: '-apple-system, system-ui, sans-serif' },
  container: { maxWidth: '500px', margin: '0 auto', padding: '20px' },
  header: { textAlign: 'center', margin: '40px 0' },
  h1: { fontSize: '22px', fontWeight: '800', letterSpacing: '-0.5px', margin: '0 0 5px 0' },
  p: { fontSize: '13px', opacity: 0.5 },
  nav: { display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '4px', marginBottom: '20px' },
  tab: { flex: 1, textAlign: 'center', padding: '8px', fontSize: '12px', opacity: 0.5 },
  tabActive: { flex: 1, textAlign: 'center', padding: '8px', fontSize: '12px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', fontWeight: 'bold' },
  cardH: { margin: 0, fontSize: '16px', fontWeight: '700' },
  cardP: { fontSize: '13px', opacity: 0.6, margin: '8px 0 12px 0', lineHeight: '1.4' },
  tag: { fontSize: '10px', color: '#007AFF', fontWeight: 'bold', textTransform: 'uppercase' },
  price: { fontSize: '14px', color: '#00ffff', fontWeight: 'bold' },
  ticker: { position: 'fixed', bottom: 0, left: 0, right: 0, padding: '10px 0', background: '#000', borderTop: '1px solid #111', overflow: 'hidden' },
  track: { display: 'flex', gap: '40px', whiteSpace: 'nowrap', animation: 'ticker 15s linear infinite', fontSize: '10px', opacity: 0.3 },
  footer: { textAlign: 'center', marginTop: '30px', fontSize: '10px', opacity: 0.2 }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
