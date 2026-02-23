import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const tg = window.Telegram.WebApp;

const App = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('demo');

  useEffect(() => {
    // 1. Инициализация и Full-screen Mode 2.0
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#050505'); // Глубокий Deep Space Blue
    
    // 2. Активация нативной навигации (BackButton)
    tg.BackButton.onClick(() => setActiveTab('demo'));
    if (activeTab !== 'demo') tg.BackButton.show();
    else tg.BackButton.hide();

    // 3. Имитация синхронизации SyncGo (Splash Screen)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const handleImpact = (style = 'medium') => {
    // Нативная тактильность Lux-уровня
    tg.HapticFeedback.impactOccurred(style);
  };

  if (loading) {
    return (
      <div style={styles.splash}>
        <div className="sync-loader">
          <div className="line-1"></div>
          <div className="line-2"></div>
        </div>
        <h2 style={styles.splashText}>SYNCGO_INIT...</h2>
        <style>{`
          .sync-loader { position: relative; width: 100px; height: 100px; }
          .line-1, .line-2 { 
            position: absolute; width: 100%; height: 4px; 
            background: #CCFF00; /* Laser Lime */
            box-shadow: 0 0 20px #CCFF00;
          }
          .line-1 { top: 40%; animation: slideInLeft 1s infinite alternate; }
          .line-2 { bottom: 40%; animation: slideInRight 1s infinite alternate; }
          @keyframes slideInLeft { from { transform: translateX(-50%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
          @keyframes slideInRight { from { transform: translateX(50%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        `}</style>
      </div>
    );
  }

  return (
    <div style={styles.body}>
      <style>{`
        .glass-card { 
          background: rgba(255, 255, 255, 0.03); 
          backdrop-filter: blur(25px); 
          border: 1px solid rgba(204, 255, 0, 0.2); 
          border-radius: 24px; padding: 25px;
          transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .glass-card:active { transform: scale(0.96); background: rgba(204, 255, 0, 0.05); }
        .neon-text { color: #CCFF00; text-shadow: 0 0 10px rgba(204, 255, 0, 0.5); }
      `}</style>

      <div style={styles.container}>
        {/* HEADER: SYNCGO IDENTITY */}
        <header style={styles.header}>
          <div style={styles.brand}>
            <div style={styles.logoCircle}>
              <span style={styles.logoIcon}>⚡</span>
            </div>
            <div>
              <h1 style={styles.title}>SYNCGO</h1>
              <p style={styles.subtitle}>HIGH_CONVERSION_SYSTEM</p>
            </div>
          </div>
          <div style={styles.badge}>v4.0.26 // ELITE</div>
        </header>

        {/* TABS: NAVIGATION HUB */}
        <nav style={styles.tabs}>
          <div style={activeTab === 'demo' ? styles.tabActive : styles.tab} onClick={() => { setActiveTab('demo'); handleImpact('light'); }}>DEMO_HUB</div>
          <div style={activeTab === 'audit' ? styles.tabActive : styles.tab} onClick={() => { setActiveTab('audit'); handleImpact('light'); }}>AUDIT_LAB</div>
        </nav>

        {activeTab === 'demo' ? (
          <div style={styles.grid}>
            {/* LUXURY CASE 1 */}
            <div className="glass-card" onClick={() => handleImpact('heavy')}>
              <div style={styles.caseTag}>PREMIUM_ECOM</div>
              <h3 className="neon-text" style={styles.caseTitle}>LUXURY_DROP_OS</h3>
              <p style={styles.caseDesc}>Интерфейс "Neon Alchemy" для закрытых брендов. Конверсия +45%.</p>
              <div style={styles.caseStats}>30s CHECKOUT • STARS PAY</div>
            </div>
          </div>
        ) : (
          <div style={styles.grid}>
            <div className="glass-card" style={{borderColor: '#FF2BD6'}}>
              <h3 style={{...styles.caseTitle, color: '#FF2BD6'}}>FREE_VOICE_AUDIT</h3>
              <p style={styles.caseDesc}>Разбор твоей воронки через ИИ-анализ. Найдем потерю 40% прибыли за 5 минут.</p>
              <button style={styles.auditBtn} onClick={() => tg.openTelegramLink('https://t.me/SyncGoBot')}>ЗАПУСТИТЬ СКАНЕР</button>
            </div>
          </div>
        )}

        {/* FOOTER TICKER: 2026 STANDARDS */}
        <div style={styles.ticker}>
          <div style={styles.track}>
            <span>● SYNC YOUR AMBITIONS WITH TECHNOLOGY ● SYNCGO ● 2026 COMPLIANT ● NO REDIRECTS ● </span>
            <span>● SYNC YOUR AMBITIONS WITH TECHNOLOGY ● SYNCGO ● 2026 COMPLIANT ● NO REDIRECTS ● </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: { background: '#050505', color: '#E9F0FF', minHeight: '100vh', fontFamily: 'monospace' },
  splash: { height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#000' },
  splashText: { color: '#CCFF00', fontSize: '12px', letterSpacing: '4px', marginTop: '20px' },
  container: { maxWidth: '500px', margin: '0 auto', padding: 'env(safe-area-inset-top) 20px 100px 20px' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' },
  brand: { display: 'flex', alignItems: 'center', gap: '15px' },
  logoCircle: { width: '50px', height: '50px', borderRadius: '15px', background: 'rgba(204, 255, 0, 0.1)', border: '1px solid #CCFF00', display: 'grid', placeItems: 'center' },
  logoIcon: { fontSize: '24px', color: '#CCFF00' },
  title: { fontSize: '20px', fontWeight: '900', letterSpacing: '2px', margin: 0 },
  subtitle: { fontSize: '9px', opacity: 0.4, margin: 0 },
  badge: { fontSize: '8px', padding: '4px 8px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', opacity: 0.5 },
  tabs: { display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: '14px', padding: '4px', marginBottom: '30px' },
  tab: { flex: 1, textAlign: 'center', padding: '12px', fontSize: '11px', opacity: 0.4 },
  tabActive: { flex: 1, textAlign: 'center', padding: '12px', fontSize: '11px', background: 'rgba(204, 255, 0, 0.1)', color: '#CCFF00', borderRadius: '10px', fontWeight: 'bold' },
  grid: { display: 'flex', flexDirection: 'column', gap: '15px' },
  caseTag: { fontSize: '9px', fontWeight: 'bold', color: '#CCFF00', marginBottom: '8px' },
  caseTitle: { fontSize: '18px', margin: '0 0 10px 0', letterSpacing: '1px' },
  caseDesc: { fontSize: '12px', opacity: 0.6, lineHeight: '1.5', margin: 0 },
  caseStats: { marginTop: '15px', fontSize: '10px', fontWeight: 'bold', opacity: 0.3 },
  auditBtn: { width: '100%', marginTop: '20px', padding: '14px', background: '#FF2BD6', border: 'none', borderRadius: '12px', color: '#fff', fontWeight: 'bold', fontSize: '12px' },
  ticker: { position: 'fixed', bottom: 0, left: 0, right: 0, background: '#000', borderTop: '1px solid #111', padding: '15px 0', overflow: 'hidden' },
  track: { display: 'flex', gap: '40px', whiteSpace: 'nowrap', animation: 'ticker 20s linear infinite', fontSize: '10px', opacity: 0.3 },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
