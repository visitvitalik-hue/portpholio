import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const tg = window.Telegram.WebApp;

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#000000');
    // Время на "синхронизацию" нейропрофиля
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={styles.loaderPage}>
        <div className="hypno-container">
          <div className="ring r1"></div>
          <div className="ring r2"></div>
          <div className="ring r3"></div>
          <div className="glow-point"></div>
        </div>
        <div className="loading-status">SYNCGO_NEURO_PROTOCOL_INIT...</div>
        <style>{`
          .hypno-container { position: relative; width: 220px; height: 220px; display: grid; place-items: center; }
          .ring { position: absolute; border-radius: 50%; border: 2px solid transparent; }
          .r1 { width: 180px; height: 180px; border-top-color: #CCFF00; border-bottom-color: #CCFF00; animation: rot 4s linear infinite; filter: blur(0.5px); }
          .r2 { width: 130px; height: 130px; border-left-color: #CCFF00; border-right-color: #CCFF00; animation: rot-rev 2.5s linear infinite; opacity: 0.7; }
          .r3 { width: 90px; height: 90px; border: 1px solid rgba(204, 255, 0, 0.3); animation: p 1.5s ease-in-out infinite; }
          .glow-point { width: 12px; height: 12px; background: #CCFF00; border-radius: 50%; box-shadow: 0 0 40px 15px rgba(204, 255, 0, 0.6); }
          
          @keyframes rot { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes rot-rev { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
          @keyframes p { 0%, 100% { transform: scale(1); opacity: 0.2; } 50% { transform: scale(1.1); opacity: 0.5; } }
          .loading-status { margin-top: 40px; color: #CCFF00; font-family: 'monospace'; letter-spacing: 4px; font-size: 11px; }
        `}</style>
      </div>
    );
  }

  return (
    <div style={styles.body}>
      <div style={styles.scrollWrapper}>
        <div style={styles.mainContent}>
          <header style={styles.header}>
            <div style={styles.logo}><span>SYNC</span>GO</div>
            <div style={styles.accentLine}></div>
          </header>

          <section className="n-card">
            <h2 style={styles.h2}>КТО МЫ?</h2>
            <p style={styles.p}>
              <b>SyncGo</b> — это технологическая сингулярность вашего бизнеса в Telegram. Мы не создаем инструменты, мы создаем <b>цифровое превосходство</b>.
            </p>
          </section>

          <section className="n-card" style={{borderLeft: '2px solid #CCFF00'}}>
            <h2 style={styles.h2}>ЧТО МЫ ДЕЛАЕМ?</h2>
            <p style={styles.p}>
              Проектируем и внедряем <b>бесшовные экосистемы</b>: 
              <br/>● Канал с архитектурой доверия. 
              <br/>● Бот с логикой дожима 24/7. 
              <br/>● Mini App с визуалом «Digital Luxury».
            </p>
          </section>

          <section className="n-card">
            <h2 style={styles.h2}>ПОЧЕМУ МЫ?</h2>
            <p style={styles.p}>
              Мы используем <b>Neuro-UX</b>, чтобы каждый клик вашего клиента приводил к чеку. Мы делаем дорого, чтобы вы зарабатывали еще дороже. Мы берем на себя <b>обязанность</b> за ваш кратный рост.
            </p>
          </section>

          <section className="n-card" style={{background: 'rgba(204, 255, 0, 0.03)', borderColor: 'rgba(204, 255, 0, 0.2)'}}>
             <h2 style={styles.h2}>РЕЗУЛЬТАТ</h2>
             <p style={styles.p}>
               Синхронизация трафика и продаж с гарантией вовлеченности через нативные механики 2026 года.
             </p>
          </section>

          <button 
            style={styles.mainButton}
            onClick={() => tg.HapticFeedback.notificationOccurred('success')}
          >
            ИНТЕРПРЕТИРОВАТЬ МОЙ ПРОЕКТ
          </button>
          
          <div style={{height: '100px'}}></div> {/* Пространство для скролла */}
        </div>
      </div>

      {/* ФИНАЛЬНАЯ БЕГУЩАЯ СТРОКА */}
      <div style={styles.tickerContainer}>
        <div className="ticker-track">
          <span>● SYNCGO: СИНХРОНИЗАЦИЯ ТРАФИКА В ПРОДАЖИ ● МАРКЕТИНГ БУДУЩЕГО ● ТЕХНОЛОГИИ 2026 ● NEURO_ARCHITECTS ● </span>
          <span>● SYNCGO: СИНХРОНИЗАЦИЯ ТРАФИКА В ПРОДАЖИ ● МАРКЕТИНГ БУДУЩЕГО ● ТЕХНОЛОГИИ 2026 ● NEURO_ARCHITECTS ● </span>
        </div>
      </div>

      <style>{`
        .n-card { background: rgba(255,255,255,0.02); padding: 25px; border-radius: 20px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05); }
        b { color: #CCFF00; }
        .ticker-track { display: flex; gap: 40px; whiteSpace: nowrap; animation: tick 20s linear infinite; }
        @keyframes tick { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
};

const styles = {
  body: { background: '#000', color: '#fff', height: '100vh', width: '100vw', fontFamily: 'sans-serif', overflow: 'hidden', position: 'fixed' },
  loaderPage: { height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#000' },
  scrollWrapper: { height: '100%', overflowY: 'auto', WebkitOverflowScrolling: 'touch', padding: 'calc(30px + env(safe-area-inset-top)) 20px 0 20px' },
  mainContent: { maxWidth: '450px', margin: '0 auto' },
  header: { textAlign: 'left', marginBottom: '40px' },
  logo: { fontSize: '32px', fontWeight: '900', letterSpacing: '-1.5px' },
  accentLine: { width: '45px', height: '5px', background: '#CCFF00', marginTop: '8px' },
  h2: { fontSize: '12px', letterSpacing: '3px', opacity: 0.3, marginBottom: '15px', fontWeight: 'bold' },
  p: { fontSize: '15px', lineHeight: '1.6', margin: 0, opacity: 0.85 },
  mainButton: { 
    width: '100%', padding: '22px', background: '#CCFF00', color: '#000', border: 'none', 
    borderRadius: '20px', fontWeight: '900', fontSize: '14px', letterSpacing: '1px',
    boxShadow: '0 0 40px rgba(204, 255, 0, 0.25)', marginBottom: '50px', cursor: 'pointer'
  },
  tickerContainer: { position: 'fixed', bottom: 0, left: 0, right: 0, padding: '16px 0', borderTop: '1px solid #151515', background: '#000', zIndex: 100, overflow: 'hidden' },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
