import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const tg = window.Telegram.WebApp;

const App = () => {
  useEffect(() => {
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#000000'); // Черный монолит
    tg.enableClosingConfirmation();
  }, []);

  // Наша пополняемая витрина продуктов (Твои шедевры)
  const [showcase] = useState([
    { 
      id: 'construction', 
      title: 'VILLA_OS_2026', 
      niche: 'BUILDING_CONCEPTS',
      price: '15000 XTR', 
      icon: '🏗️',
      style: { accent: '#d4af37', shadow: 'rgba(212, 175, 55, 0.2)' },
      desc: 'Иммерсивный каталог для девелоперов. 360° обзоры и квиз-сметы.'
    },
    { 
      id: 'beauty', 
      title: 'GLOW_LUMINAL', 
      niche: 'BEAUTY_INFLUENCERS',
      price: '500 XTR', 
      icon: '💄',
      style: { accent: '#FF2BD6', shadow: 'rgba(255, 43, 214, 0.2)' },
      desc: 'Интерактивная запись и Lookbook с ИИ-подбором стиля.'
    },
    { 
      id: 'sneakers', 
      title: 'DROP_RADAR', 
      niche: 'RESELL_ECOSYSTEM',
      price: '900 XTR', 
      icon: '👟',
      style: { accent: '#7DF9FF', shadow: 'rgba(125, 249, 255, 0.2)' },
      desc: 'Реферальная система и FOMO-дропы для товарного бизнеса.'
    }
  ]);

  const handlePreview = (item) => {
    tg.HapticFeedback.notificationOccurred('success');
    tg.showPopup({
      title: item.title,
      message: `${item.desc}\n\nМы внедрим эту логику и дизайн в твой проект за 72 часа.`,
      buttons: [{ type: 'ok', text: 'ХОЧУ ТАК ЖЕ' }]
    });
  };

  return (
    <div style={styles.body}>
      <style>{`
        @keyframes ticker { to { transform: translateX(-50%); } }
        .logo-glow { animation: pulse 4s infinite alternate; }
        @keyframes pulse { from { opacity: 0.5; filter: blur(2px); } to { opacity: 1; filter: blur(0px); } }
        .showcase-card { 
          background: rgba(255, 255, 255, 0.02); 
          border: 1px solid rgba(255, 255, 255, 0.05); 
          border-radius: 28px; 
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .showcase-card:active { transform: scale(0.96); background: rgba(255, 255, 255, 0.05); }
      `}</style>

      <div style={styles.container}>
        {/* STATS BAR (Safe Area Respect) */}
        <div style={styles.topBar}>
          <span style={styles.osText}>SECTOR_88_CORE // STABLE</span>
          <span style={styles.osText}>v4.0.26</span>
        </div>

        {/* HERO SECTION */}
        <header style={styles.header}>
          <div className="logo-glow" style={styles.logo}></div>
          <h1 style={styles.title}>AI DRAGON LAB</h1>
          <p style={styles.subtitle}>Экосистема цифрового доминирования. Мы не делаем ботов — мы создаем цифровые активы.</p>
        </header>

        {/* SHOWCASE GRID */}
        <div style={styles.grid}>
          {showcase.map(item => (
            <div key={item.id} className="showcase-card" style={styles.card} onClick={() => handlePreview(item)}>
              <div style={{...styles.iconBox, backgroundColor: item.style.shadow, color: item.style.accent}}>
                {item.icon}
              </div>
              <div style={{flex: 1}}>
                <div style={{...styles.nicheBadge, color: item.style.accent}}>{item.niche}</div>
                <h3 style={styles.cardTitle}>{item.title}</h3>
                <div style={styles.price}>{item.price}</div>
              </div>
            </div>
          ))}
        </div>

        {/* FIXED TICKER */}
        <div style={styles.ticker}>
          <div style={styles.track}>
            <span>ENTERPRISE_LEVEL ● LIQUID_DESIGN ● STARS_ECONOMY ● PRODUCTION_FACTORY ● </span>
            <span>ENTERPRISE_LEVEL ● LIQUID_DESIGN ● STARS_ECONOMY ● PRODUCTION_FACTORY ● </span>
          </div>
        </div>

        <footer style={styles.footer}>
          © 2026 AI DRAGON LAB. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
        </footer>
      </div>
    </div>
  );
};

const styles = {
  body: { background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'monospace', overflowX: 'hidden' },
  container: { maxWidth: '500px', margin: '0 auto', padding: '16px 20px 100px 20px' },
  topBar: { display: 'flex', justifyContent: 'space-between', marginBottom: '40px', paddingTop: 'env(safe-area-inset-top)' },
  osText: { fontSize: '10px', color: '#333', letterSpacing: '2px' },
  header: { textAlign: 'center', marginBottom: '50px' },
  logo: { width: '60px', height: '60px', margin: '0 auto 20px', borderRadius: '18px', background: 'linear-gradient(135deg, #7DF9FF 0%, #FF2BD6 100%)' },
  title: { fontSize: '24px', letterSpacing: '6px', fontWeight: 'bold', margin: '0 0 10px 0' },
  subtitle: { fontSize: '11px', lineHeight: '1.6', opacity: 0.4, maxWidth: '280px', margin: '0 auto' },
  grid: { display: 'flex', flexDirection: 'column', gap: '16px' },
  card: { padding: '24px', display: 'flex', alignItems: 'center', gap: '20px' },
  iconBox: { width: '56px', height: '56px', borderRadius: '16px', display: 'grid', placeItems: 'center', fontSize: '28px' },
  nicheBadge: { fontSize: '9px', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '4px' },
  cardTitle: { fontSize: '17px', margin: 0, fontWeight: 'bold' },
  price: { fontSize: '13px', opacity: 0.5, marginTop: '4px' },
  ticker: { position: 'fixed', bottom: 0, left: 0, right: 0, background: '#000', borderTop: '1px solid #111', padding: '12px 0' },
  track: { display: 'flex', gap: '40px', whiteSpace: 'nowrap', animation: 'ticker 20s linear infinite' },
  footer: { marginTop: '50px', textAlign: 'center', fontSize: '9px', color: '#222', letterSpacing: '1px' }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
