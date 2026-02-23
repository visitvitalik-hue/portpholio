import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const tg = window.Telegram.WebApp;

const App = () => {
  useEffect(() => {
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#000000');
    tg.enableClosingConfirmation();
  }, []);

  // Витрина наших продуктов (дизайнов)
  const [showcase] = useState([
    { 
      id: 'beauty', title: 'GLOW_INFLUENCE', niche: 'BEAUTY_OS', price: '300 XTR', 
      icon: '💄', accent: '#FF2BD6' 
    },
    { 
      id: 'const', title: 'VILLA_SMART', niche: 'CONSTRUCTION', price: '1500 XTR', 
      icon: '🏗️', accent: '#d4af37' 
    },
    { 
      id: 'sneaks', title: 'DROP_RADAR', niche: 'SNEAKER_MARKET', price: '900 XTR', 
      icon: '👟', accent: '#7DF9FF' 
    }
  ]);

  const handlePreview = (item) => {
    tg.HapticFeedback.notificationOccurred('success');
    tg.showPopup({
      title: `ОБЪЕКТ: ${item.title}`,
      message: `Ниша: ${item.niche}\nСтатус: READY_FOR_DEPLOY\n\nРазвернуть этот дизайн в вашем Секторе?`,
      buttons: [{ type: 'ok', text: 'ПОДРОБНЕЕ' }]
    });
  };

  return (
    <div style={styles.body}>
      <style>{`
        @keyframes ticker { to { transform: translateX(-50%); } }
        @keyframes pulse { from { opacity: 0.6; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }
        @keyframes spin { to { transform: rotate(360deg); } }
        
        .monolith-logo {
          position: relative; width: 120px; height: 120px; margin: 0 auto 30px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(125, 249, 255, 0.2);
          border-radius: 28px;
          backdrop-filter: blur(15px);
          display: grid; place-items: center;
          box-shadow: 0 20px 50px rgba(0,0,0,0.8), inset 0 0 20px rgba(125, 249, 255, 0.1);
          overflow: hidden;
        }
        .core-88 {
          font-size: 42px; font-weight: 900; letter-spacing: -2px;
          background: linear-gradient(135deg, #7DF9FF, #FF2BD6);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 15px rgba(125, 249, 255, 0.5));
          animation: pulse 3s infinite alternate cubic-bezier(0.4, 0, 0.2, 1);
        }
        .circuit-lines {
          position: absolute; inset: 0; opacity: 0.2;
          background-image: radial-gradient(circle, #7DF9FF 0.5px, transparent 0.5px);
          background-size: 15px 15px;
        }
        .card-glass {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 20px; display: flex; align-items: center; gap: 15px;
          transition: 0.3s;
        }
        .card-glass:active { transform: scale(0.97); background: rgba(255, 255, 255, 0.05); }
      `}</style>

      <div style={styles.container}>
        {/* TOP STATUS BAR */}
        <div style={styles.topBar}>
          <span>SYS_CORE_88 // STABLE</span>
          <span>v4.0.26</span>
        </div>

        {/* LOGO & HERO */}
        <header style={styles.header}>
          <div className="monolith-logo">
            <div className="circuit-lines"></div>
            <div className="core-88">88</div>
          </div>
          <h1 style={styles.title}>SECTOR_88</h1>
          <p style={styles.subtitle}>ЦИФРОВОЙ ЗАВОД ПОЛНОГО ЦИКЛА</p>
        </header>

        {/* SHOWCASE (Наша продукция) */}
        <div style={styles.grid}>
          <div style={styles.sectionHeader}>НАША ПРОДУКЦИЯ // SHOWCASE</div>
          {showcase.map(item => (
            <div key={item.id} className="card-glass" onClick={() => handlePreview(item)}>
              <div style={{...styles.iconBox, color: item.accent}}>{item.icon}</div>
              <div style={{flex: 1}}>
                <div style={{fontSize: '9px', color: item.accent, fontWeight: 'bold'}}>{item.niche}</div>
                <h3 style={styles.cardTitle}>{item.title}</h3>
                <div style={styles.price}>{item.price}</div>
              </div>
            </div>
          ))}
        </div>

        {/* FIXED FOOTER TICKER */}
        <div style={styles.ticker}>
          <div style={styles.track}>
            <span>ENTERPRISE_LEVEL ● TACTILE_GLASS ● SECTOR_88 ● QUALITY_CONTROL ● </span>
            <span>ENTERPRISE_LEVEL ● TACTILE_GLASS ● SECTOR_88 ● QUALITY_CONTROL ● </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: { background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'monospace', overflowX: 'hidden' },
  container: { maxWidth: '500px', margin: '0 auto', padding: 'env(safe-area-inset-top) 20px 100px 20px' },
  topBar: { display: 'flex', justifyContent: 'space-between', fontSize: '9px', opacity: 0.3, letterSpacing: '2px', marginBottom: '40px' },
  header: { textAlign: 'center', marginBottom: '40px' },
  title: { fontSize: '26px', letterSpacing: '8px', fontWeight: '900', margin: 0 },
  subtitle: { fontSize: '10px', opacity: 0.4, letterSpacing: '1px', marginTop: '8px' },
  grid: { display: 'flex', flexDirection: 'column', gap: '12px' },
  sectionHeader: { fontSize: '10px', opacity: 0.3, marginBottom: '8px', paddingLeft: '10px' },
  iconBox: { width: '50px', height: '50px', background: 'rgba(0,0,0,0.3)', borderRadius: '15px', display: 'grid', placeItems: 'center', fontSize: '24px' },
  cardTitle: { fontSize: '16px', margin: '2px 0', fontWeight: 'bold' },
  price: { fontSize: '12px', opacity: 0.5 },
  ticker: { position: 'fixed', bottom: 0, left: 0, right: 0, background: '#000', borderTop: '1px solid #111', padding: '12px 0' },
  track: { display: 'flex', gap: '40px', whiteSpace: 'nowrap', animation: 'ticker 20s linear infinite' },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
