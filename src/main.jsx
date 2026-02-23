import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const tg = window.Telegram.WebApp;

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#000000');
    const timer = setTimeout(() => setLoading(false), 3000);
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
        <div className="loading-status">SYNCGO_SYNCHRONIZING...</div>
        <style>{`
          .hypno-container { position: relative; width: 180px; height: 180px; display: grid; place-items: center; }
          .ring { position: absolute; border-radius: 50%; border: 2px solid transparent; }
          .r1 { width: 100%; height: 100%; border-top-color: #CCFF00; border-bottom-color: #CCFF00; animation: rot 4s linear infinite; }
          .r2 { width: 70%; height: 70%; border-left-color: #CCFF00; border-right-color: #CCFF00; animation: rot-rev 2s linear infinite; opacity: 0.6; }
          .r3 { width: 40%; height: 40%; border: 1px solid rgba(204, 255, 0, 0.3); animation: p 1.5s ease-in-out infinite; }
          .glow-point { width: 8px; height: 8px; background: #CCFF00; border-radius: 50%; box-shadow: 0 0 30px 10px rgba(204, 255, 0, 0.6); }
          @keyframes rot { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes rot-rev { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
          @keyframes p { 0%, 100% { transform: scale(1); opacity: 0.3; } 50% { transform: scale(1.2); opacity: 0.7; } }
          .loading-status { margin-top: 30px; color: #CCFF00; font-family: monospace; letter-spacing: 3px; font-size: 9px; }
        `}</style>
      </div>
    );
  }

  return (
    <div style={styles.body}>
      <div style={styles.scrollWrapper}>
        <div style={styles.mainContent}>
          {/* HEADER FIX: Сдвиг под кнопку закрытия */}
          <header style={styles.header}>
            <div style={styles.logo}><span>SYNC</span>GO</div>
            <div style={styles.accentLine}></div>
          </header>

          <section className="n-card">
            <h2 style={styles.h2}>КТО МЫ?</h2>
            <p style={styles.p}>
              <b>SyncGo</b> — это технологическая сингулярность вашего бизнеса. Мы не создаем инструменты, мы создаем <b>цифровое превосходство</b>.
            </p>
          </section>

          <section className="n-card">
            <h2 style={styles.h2}>ЧТО МЫ ДЕЛАЕМ?</h2>
            <p style={styles.p}>
              Проектируем <b>бесшовные экосистемы</b>: 
              Канал с архитектурой доверия, Бот с логикой дожима 24/7 и Mini App уровня «Digital Luxury».
            </p>
          </section>

          <section className="n-card">
            <h2 style={styles.h2}>ПОЧЕМУ МЫ?</h2>
            <p style={styles.p}>
              Используем <b>Neuro-UX</b>, чтобы каждый клик приводил к чеку. Делаем дорого, чтобы вы зарабатывали еще дороже.
            </p>
          </section>

          <section className="n-card" style={{background: 'rgba(204, 255, 0, 0.03)'}}>
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
          
          <div style={{height: '80px'}}></div>
        </div>
      </div>

      {/* TICKER FIX: Высота строго в 1-2 строки на мобиле */}
      <div style={styles.tickerContainer}>
        <div className="ticker-track">
          <span>● SYNCGO: СИНХРОНИЗАЦИЯ ТРАФИКА В ПРОДАЖИ ● МАРКЕТИНГ БУДУЩЕГО ● ТЕХНОЛОГИИ 2026 ● NEURO_ARCHITECTS ● </span>
          <span>● SYNCGO: СИНХРОНИЗАЦИЯ ТРАФИКА В ПРОДАЖИ ● МАРКЕТИНГ БУДУЩЕГО ● ТЕХНОЛОГИИ 2026 ● NEURO_ARCHITECTS ● </span>
        </div>
      </div>

      <style>{`
        /* ШАХМАТНЫЙ ПОРЯДОК ОБВОДКИ */
        .n-card { 
          background: rgba(255,255,255,0.02); padding: 22px; 
          border-radius: 18px; margin-bottom: 16px; 
          border: 1px solid rgba(255,255,255,0.05);
          position: relative;
        }
        .n-card:nth-child(odd) { border-left: 3px solid #CCFF00; }
        .n-card:nth-child(even) { border-right: 3px solid #CCFF00; }
        
        b { color: #CCFF00; }
        .ticker-track { display: flex; gap: 30px; white-space: nowrap; animation: tick 15s linear infinite; }
        @keyframes tick { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
};

const styles = {
  body: { background: '#000', color: '#fff', height: '100vh', width: '100vw', fontFamily: 'sans-serif', overflow: 'hidden', position: 'fixed' },
  loaderPage: { height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#000' },
  scrollWrapper: { height: '100%', overflowY: 'auto', WebkitOverflowScrolling: 'touch', padding: '0 20px' },
  mainContent: { maxWidth: '450px', margin: '0 auto' },
  header: { 
    textAlign: 'left', 
    // Увеличенный отступ сверху специально для кнопок TMA (Safe Area + Margin)
    paddingTop: 'calc(50px + env(safe-area-inset-top))', 
    marginBottom: '35px' 
  },
  logo: { fontSize: '28px', fontWeight: '900', letterSpacing: '-1px' },
  accentLine: { width: '40px', height: '4px', background: '#CCFF00', marginTop: '6px' },
  h2: { fontSize: '11px', letterSpacing: '2px', opacity: 0.3, marginBottom: '12px', fontWeight: 'bold' },
  p: { fontSize: '14px', lineHeight: '1.5', margin: 0, opacity: 0.8 },
  mainButton: { 
    width: '100%', padding: '20px', background: '#CCFF00', color: '#000', border: 'none', 
    borderRadius: '18px', fontWeight: '900', fontSize: '13px', letterSpacing: '1px',
    boxShadow: '0 0 30px rgba(204, 255, 0, 0.2)', marginBottom: '40px'
  },
  tickerContainer: { 
    position: 'fixed', bottom: 0, left: 0, right: 0, 
    // Жесткий контроль высоты
    height: '40px', display: 'flex', alignItems: 'center',
    background: '#000', borderTop: '1px solid #151515', zIndex: 100, overflow: 'hidden',
    fontSize: '9px', opacity: 0.4
  },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
