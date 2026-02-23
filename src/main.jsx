import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const tg = window.Telegram.WebApp;

const App = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('hub');

  useEffect(() => {
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#000000');
    
    // Системная кнопка "Назад" для экспертного UX
    tg.BackButton.onClick(() => setActiveTab('hub'));
    if (activeTab !== 'hub') tg.BackButton.show();
    else tg.BackButton.hide();

    // Имитация сборки системы для демонстрации мощности
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const handleAction = (title) => {
    tg.HapticFeedback.impactOccurred('heavy'); // Нативная тактильность
    tg.showConfirm(`ЗАПУСТИТЬ ПРОТОКОЛ: ${title}?`, (ok) => {
      if (ok) tg.sendData(JSON.stringify({ service: title }));
    });
  };

  if (loading) {
    return (
      <div style={styles.loaderWrap}>
        <div className="grid-bg"></div>
        <div style={styles.loaderContent}>
          <div className="pulse-core">⚙️</div>
          <div className="loading-text">
            <div className="line-code">RUNNING_SEO_SCRIPTS... [OK]</div>
            <div className="line-code">ANALYZING_UX_LOGIC... [WAIT]</div>
            <div className="line-code">BUILDING_TMA_SYSTEM_2026...</div>
          </div>
        </div>
        <style>{`
          .grid-bg { 
            position: absolute; inset: 0; 
            background-image: linear-gradient(rgba(0,122,255,0.1) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(0,122,255,0.1) 1px, transparent 1px);
            background-size: 40px 40px; transform: perspective(500px) rotateX(60deg);
            animation: grid-move 8s linear infinite; opacity: 0.3;
          }
          @keyframes grid-move { from { background-position: 0 0; } to { background-position: 0 400px; } }
          .pulse-core { font-size: 60px; animation: core-pulse 2s infinite ease-in-out; text-shadow: 0 0 20px #007AFF; }
          @keyframes core-pulse { 0%, 100% { transform: scale(1); opacity: 0.5; } 50% { transform: scale(1.15); opacity: 1; } }
          .loading-text { margin-top: 40px; font-family: monospace; color: #007AFF; font-size: 11px; }
          .line-code { margin-bottom: 6px; border-right: 2px solid #007AFF; white-space: nowrap; overflow: hidden; animation: typing 2s steps(30, end) infinite; }
          @keyframes typing { from { width: 0 } to { width: 100% } }
          @keyframes ticker { to { transform: translateX(-50%); } }
        `}</style>
      </div>
    );
  }

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        {/* TOP BAR: Safe Area Respect */}
        <div style={styles.topBar}>
          <span>SOLO_STARTUP // CORE_ENGINE</span>
          <span>STABLE_v1.0.26</span>
        </div>

        {/* LOGO SECTION: Abstract Node */}
        <header style={styles.header}>
          <div className="node-logo-static">⚙️</div>
          <h1 style={styles.h1}>SOLO STARTUP</h1>
          <p style={styles.p}>AUDIT • DESIGN • GROWTH</p>
        </header>

        {/* TABS: Segmentation */}
        <div style={styles.tabs}>
          <div style={activeTab === 'hub' ? styles.tabActive : styles.tab} onClick={() => setActiveTab('hub')}>РЕШЕНИЯ</div>
          <div style={activeTab === 'audit' ? styles.tabActive : styles.tab} onClick={() => setActiveTab('audit')}>ЭКСПЕРТИЗА</div>
        </div>

        {activeTab === 'hub' ? (
          <div style={styles.grid}>
            <div className="card-pro" onClick={() => handleAction('VIRAL_GROWTH')}>
              <div style={styles.icon}>🚀</div>
              <h3 style={styles.cardTitle}>VIRAL_GROWTH</h3>
              <p style={styles.cardText}>Реферальные системы 2.0. Рост базы без затрат на рекламу.</p>
            </div>
            <div className="card-pro" onClick={() => handleAction('E_COM_PRO')}>
              <div style={styles.icon}>🛒</div>
              <h3 style={styles.cardTitle}>E_COM_FACTORY</h3>
              <p style={styles.cardText}>Нативные магазины с оплатой Stars. Конверсия на пике.</p>
            </div>
          </div>
        ) : (
          <div style={styles.grid}>
             {/* РЕАЛЬНЫЙ АУДИТ КЕЙС */}
            <div className="card-pro" style={{borderLeft: '4px solid #ff4b4b'}}>
              <div style={{color: '#ff4b4b', fontSize: '10px', fontWeight: 'bold', marginBottom: '8px'}}>КЕЙС: МАГАЗИН КРОССОВОК</div>
              <h3 style={styles.cardTitle}>КОНФЛИКТ НАВИГАЦИИ</h3>
              <p style={styles.cardText}>Отсутствие BackButton ведет к отвалу 25% юзеров на этапе корзины.</p>
            </div>
          </div>
        )}

        {/* FOOTER TICKER: Industry Standards */}
        <div style={styles.ticker}>
          <div style={{...styles.track, animation: 'ticker 15s linear infinite'}}>
            <span>● 2026 COMPLIANT ● NO REDIRECTS ● NATIVE SDK 2.0 ● SEO OPTIMIZED ● PURE EXPERTISE ● </span>
            <span>● 2026 COMPLIANT ● NO REDIRECTS ● NATIVE SDK 2.0 ● SEO OPTIMIZED ● PURE EXPERTISE ● </span>
          </div>
        </div>
      </div>
      <style>{`
        .node-logo-static { width: 60px; height: 60px; margin: 0 auto 15px; background: rgba(0, 122, 255, 0.1); border-radius: 50%; border: 1px solid #007AFF; display: grid; place-items: center; font-size: 30px; }
        .card-pro { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 18px; padding: 20px; transition: 0.2s; }
        .card-pro:active { transform: scale(0.97); background: rgba(255,255,255,0.07); }
      `}</style>
    </div>
  );
};

const styles = {
  body: { background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', overflow: 'hidden' },
  loaderWrap: { position: 'fixed', inset: 0, background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 },
  loaderContent: { position: 'relative', zIndex: 10, textAlign: 'center' },
  container: { maxWidth: '500px', margin: '0 auto', padding: 'env(safe-area-inset-top) 20px 100px 20px' },
  topBar: { display: 'flex', justifyContent: 'space-between', fontSize: '9px', opacity: 0.3, letterSpacing: '2px', marginBottom: '30px' },
  header: { textAlign: 'center', marginBottom: '40px' },
  h1: { fontSize: '24px', fontWeight: '900', letterSpacing: '-1px', margin: 0 },
  p: { fontSize: '11px', opacity: 0.4, marginTop: '5px' },
  tabs: { display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: '14px', padding: '4px', marginBottom: '24px' },
  tab: { flex: 1, textAlign: 'center', padding: '10px', fontSize: '12px', opacity: 0.5 },
  tabActive: { flex: 1, textAlign: 'center', padding: '10px', fontSize: '12px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', fontWeight: 'bold' },
  grid: { display: 'flex', flexDirection: 'column', gap: '15px' },
  icon: { fontSize: '30px', marginBottom: '10px' },
  cardTitle: { fontSize: '16px', fontWeight: '800', margin: '0 0 5px 0' },
  cardText: { fontSize: '12px', opacity: 0.5, lineHeight: '1.4', margin: 0 },
  ticker: { position: 'fixed', bottom: 0, left: 0, right: 0, background: '#000', borderTop: '1px solid #111', padding: '12px 0' },
  track: { display: 'flex', gap: '40px', whiteSpace: 'nowrap' },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
