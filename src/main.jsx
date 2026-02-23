import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const tg = window.Telegram.WebApp;

const App = () => {
  const [tickets, setTickets] = useState(1); // Шансы на выигрыш
  const [tab, setTab] = useState('giveaway');

  useEffect(() => {
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#070914');
  }, []);

  const shareLink = () => {
    const userId = tg.initDataUnsafe?.user?.id || '88';
    const url = `https://t.me/DragonLabBot?start=ref${userId}`;
    tg.openTelegramLink(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent('Бро, забирай AI-агента в Dragon Lab и участвуй в розыгрыше! 🐉')}`);
    tg.HapticFeedback.impactOccurred('medium');
  };

  return (
    <div style={styles.body}>
      <style>{`
        @keyframes ticker { to { transform: translateX(-50%); } }
        .bento-card { background: rgba(16,18,35,0.7); backdrop-filter: blur(15px); border: 1px solid rgba(255,255,255,0.1); border-radius: 24px; }
      `}</style>

      <div style={styles.container}>
        {/* HEADER С БАЛЛАМИ (Как в кейсе Sokolov) */}
        <header style={styles.header}>
          <div style={styles.stats}>
            <div style={styles.statItem}>
              <span style={styles.statLabel}>ТВОИ ШАНСЫ</span>
              <span style={styles.statValue}>{tickets} 🎫</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statLabel}>РЕФЕРАЛЫ</span>
              <span style={styles.statValue}>0 👥</span>
            </div>
          </div>
          <div style={styles.status}>LIVE • v2.0</div>
        </header>

        {/* НАВИГАЦИЯ */}
        <nav style={styles.nav}>
          <button style={tab === 'giveaway' ? styles.navBtnActive : styles.navBtn} onClick={() => setTab('giveaway')}>РОЗЫГРЫШ</button>
          <button style={tab === 'tasks' ? styles.navBtnActive : styles.navBtn} onClick={() => setTab('tasks')}>ЗАДАНИЯ</button>
        </nav>

        {tab === 'giveaway' ? (
          <div style={styles.content}>
            <div className="bento-card" style={styles.heroCard}>
              <h2 style={styles.heroTitle}>ГЛАВНЫЙ ПРИЗ: AI_STATION</h2>
              <p style={styles.heroDesc}>Приглашай друзей — каждый друг дает +1 билет к шансу на победу в понедельник!</p>
              <button style={styles.mainBtn} onClick={shareLink}>ПРИГЛАСИТЬ ДРУЗЕЙ</button>
            </div>
          </div>
        ) : (
          <div style={styles.grid}>
            {/* МИССИИ (Как в ChatLabs) */}
            <div className="bento-card" style={styles.taskCard} onClick={() => { setTickets(t => t+1); tg.HapticFeedback.notificationOccurred('success'); }}>
              <div style={styles.taskIcon}>⭐</div>
              <div style={{flex: 1}}>
                <h4 style={styles.m0}>ОСТАВИТЬ ОТЗЫВ</h4>
                <p style={styles.taskSub}>Загрузи скриншот отзыва в бот</p>
              </div>
              <div style={styles.rewardTag}>+1 БИЛЕТ</div>
            </div>
          </div>
        )}

        {/* БЕГУЩАЯ СТРОКА (Твой стиль) */}
        <div style={styles.ticker}>
          <div style={styles.track}>
            <span>🚀 DRAGON_LAB: РОЗЫГРЫШ КАЖДЫЙ ПОНЕДЕЛЬНИК ● ПРИВЕДИ ДРУГА — ПОЛУЧИ ШАНС ● </span>
            <span>🚀 DRAGON_LAB: РОЗЫГРЫШ КАЖДЫЙ ПОНЕДЕЛЬНИК ● ПРИВЕДИ ДРУГА — ПОЛУЧИ ШАНС ● </span>
          </div>
        </div>

        <footer style={styles.footer}>© AI DRAGON LAB • СЕКТОР 88</footer>
      </div>
    </div>
  );
};

const styles = {
  body: { background: '#070914', color: '#E9F0FF', minHeight: '100vh', fontFamily: 'sans-serif' },
  container: { maxWidth: '500px', margin: '0 auto', padding: '20px' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' },
  stats: { display: 'flex', gap: '20px' },
  statItem: { display: 'flex', flexDirection: 'column' },
  statLabel: { fontSize: '10px', opacity: 0.5, letterSpacing: '1px' },
  statValue: { fontSize: '18px', fontWeight: 'bold', color: '#7DF9FF' },
  status: { padding: '4px 10px', background: 'rgba(125,249,255,0.1)', border: '1px solid #7DF9FF', borderRadius: '10px', fontSize: '10px' },
  nav: { display: 'flex', gap: '10px', marginBottom: '20px' },
  navBtn: { flex: 1, padding: '12px', background: 'rgba(255,255,255,0.05)', border: 'none', borderRadius: '12px', color: '#fff', fontSize: '12px' },
  navBtnActive: { flex: 1, padding: '12px', background: '#7DF9FF', border: 'none', borderRadius: '12px', color: '#000', fontWeight: 'bold', fontSize: '12px' },
  heroCard: { padding: '30px', textAlign: 'center' },
  heroTitle: { color: '#FF2BD6', fontSize: '20px', margin: '0 0 10px 0' },
  heroDesc: { fontSize: '14px', opacity: 0.7, marginBottom: '20px', lineHeight: '1.4' },
  mainBtn: { width: '100%', padding: '16px', background: '#7DF9FF', border: 'none', borderRadius: '16px', color: '#000', fontWeight: 'bold', fontSize: '14px' },
  grid: { display: 'flex', flexDirection: 'column', gap: '12px' },
  taskCard: { padding: '16px', display: 'flex', alignItems: 'center', gap: '15px' },
  taskIcon: { fontSize: '24px' },
  m0: { margin: 0 },
  taskSub: { fontSize: '11px', opacity: 0.5, margin: '2px 0 0 0' },
  rewardTag: { color: '#7DF9FF', fontWeight: 'bold', fontSize: '12px' },
  ticker: { margin: '30px -20px', background: 'rgba(16,18,35,0.8)', overflow: 'hidden', padding: '10px 0' },
  track: { display: 'flex', gap: '40px', whiteSpace: 'nowrap', animation: 'ticker 15s linear infinite' },
  footer: { textAlign: 'center', marginTop: '40px', fontSize: '10px', opacity: 0.3 }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
