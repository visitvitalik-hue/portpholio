import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const tg = window.Telegram.WebApp;

const App = () => {
  const [activeTab, setActiveTab] = useState('main');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Инициализация
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#000000');
    
    // Имитация Skeleton Loading (чтобы не было белого экрана при загрузке)
    setTimeout(() => setLoading(false), 1000);

    // Системная кнопка Назад
    tg.BackButton.onClick(() => setActiveTab('main'));
    if (activeTab !== 'main') tg.BackButton.show();
    else tg.BackButton.hide();
  }, [activeTab]);

  const handleOrder = (name) => {
    tg.HapticFeedback.notificationOccurred('success');
    tg.showConfirm(`Записаться на "${name}"?`, (ok) => {
      if (ok) tg.sendData(JSON.stringify({ action: 'order', service: name }));
    });
  };

  if (loading) {
    return (
      <div style={styles.loader}>
        <div className="spinner"></div>
        <p style={{marginTop: '20px', fontSize: '12px', opacity: 0.5}}>LOADING SECTOR_88...</p>
      </div>
    );
  }

  return (
    <div style={styles.body}>
      <style>{`
        @keyframes ticker { to { transform: translateX(-50%); } }
        .spinner { width: 40px; height: 40px; border: 3px solid rgba(255,255,255,0.1); border-top-color: #FF2BD6; border-radius: 50%; animation: spin 1s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .glass-card { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(15px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 24px; padding: 20px; }
        .story-ring { background: linear-gradient(45deg, #7DF9FF, #FF2BD6); padding: 2px; border-radius: 50%; width: 60px; height: 60px; }
      `}</style>

      <div style={styles.container}>
        {/* STORIES (Как в Instagram/Snaq Fabriq) */}
        <div style={styles.stories}>
          {['Макияж', 'Кейсы', 'Прайс', 'VIP'].map((s, i) => (
            <div key={i} style={styles.storyItem}>
              <div className="story-ring"><div style={styles.storyInner}></div></div>
              <span style={{fontSize: '10px', marginTop: '5px'}}>{s}</span>
            </div>
          ))}
        </div>

        {/* HERO SECTION */}
        <header style={styles.header}>
          <h1 style={styles.title}>INFLUENCER_OS</h1>
          <p style={styles.subtitle}>Персональная экосистема контента и услуг</p>
        </header>

        {/* CONTENT TABS */}
        <div style={styles.tabs}>
          <div style={activeTab === 'main' ? styles.tabActive : styles.tab} onClick={() => setActiveTab('main')}>УСЛУГИ</div>
          <div style={activeTab === 'loyalty' ? styles.tabActive : styles.tab} onClick={() => setActiveTab('loyalty')}>БОНУСЫ</div>
        </div>

        {activeTab === 'main' ? (
          <div style={styles.grid}>
            <div className="glass-card" onClick={() => handleOrder('Premium MakeUp')}>
              <div style={{fontSize: '24px'}}>💄</div>
              <h3 style={styles.cardTitle}>Premium MakeUp</h3>
              <p style={styles.cardDesc}>Полный образ с разбором косметички.</p>
              <div style={styles.cardPrice}>300 XTR</div>
            </div>
            <div className="glass-card" onClick={() => handleOrder('Consultation')}>
              <div style={{fontSize: '24px'}}>📱</div>
              <h3 style={styles.cardTitle}>Бренд-разбор</h3>
              <p style={styles.cardDesc}>Аудит твоего блога и воронки продаж.</p>
              <div style={styles.cardPrice}>1500 XTR</div>
            </div>
          </div>
        ) : (
          <div className="glass-card" style={{textAlign: 'center'}}>
            <h2 style={{color: '#7DF9FF'}}>ПРОГРАММА ЛОЯЛЬНОСТИ</h2>
            <p style={{fontSize: '14px', opacity: 0.7}}>Приведи 3 подруг и получи скидку 50% на любой образ.</p>
            <button style={styles.mainBtn} onClick={() => tg.openTelegramLink('https://t.me/share/url?url=https://t.me/yourbot')}>ПРИГЛАСИТЬ</button>
          </div>
        )}

        {/* TICKER */}
        <div style={styles.ticker}>
          <div style={{...styles.track, animation: 'ticker 15s linear infinite'}}>
            <span>FACTORY_88 ● DESIGN FOR BLOGGERS ● STARS PAY ENABLED ● </span>
            <span>FACTORY_88 ● DESIGN FOR BLOGGERS ● STARS PAY ENABLED ● </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: { background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' },
  loader: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#000' },
  container: { maxWidth: '500px', margin: '0 auto', padding: '16px 20px' },
  stories: { display: 'flex', gap: '15px', overflowX: 'auto', marginBottom: '30px', paddingBottom: '10px' },
  storyItem: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  storyInner: { background: '#000', borderRadius: '50%', width: '100%', height: '100%', border: '2px solid #000' },
  header: { marginBottom: '30px' },
  title: { fontSize: '24px', letterSpacing: '4px', fontWeight: 'bold', margin: 0 },
  subtitle: { fontSize: '12px', opacity: 0.4, marginTop: '5px' },
  tabs: { display: 'flex', gap: '10px', marginBottom: '20px' },
  tab: { flex: 1, textAlign: 'center', padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', fontSize: '12px' },
  tabActive: { flex: 1, textAlign: 'center', padding: '12px', background: '#FF2BD6', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' },
  grid: { display: 'flex', flexDirection: 'column', gap: '15px' },
  cardTitle: { margin: '10px 0 5px 0', fontSize: '18px' },
  cardDesc: { fontSize: '12px', opacity: 0.5, margin: 0 },
  cardPrice: { marginTop: '15px', color: '#7DF9FF', fontWeight: 'bold' },
  mainBtn: { background: '#FF2BD6', border: 'none', color: '#fff', padding: '12px 24px', borderRadius: '12px', fontWeight: 'bold', marginTop: '15px' },
  ticker: { position: 'fixed', bottom: 0, left: 0, right: 0, background: '#000', padding: '10px 0', borderTop: '1px solid #111' },
  track: { display: 'flex', gap: '40px', whiteSpace: 'nowrap' }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
