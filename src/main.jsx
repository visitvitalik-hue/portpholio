import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';

const tg = window.Telegram.WebApp;

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#000000');
    setTimeout(() => setLoading(false), 3000);
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
        <div className="loading-status">SYNCGO_DEFOGGING_SYSTEM...</div>
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
      <div className="bg-pattern">
        <div className="pattern-text">SYNCGO SYNCGO SYNCGO SYNCGO SYNCGO SYNCGO SYNCGO SYNCGO SYNCGO SYNCGO</div>
      </div>

      <div style={styles.scrollArea}>
        <div style={styles.mainContent}>
          <header style={styles.header}>
            <div style={styles.logo}><span>SYNC</span>GO</div>
            <div style={styles.accentLine}></div>
            <div style={styles.agencyTag}>AGENCY // FOG_REVEAL_PROTOCOL</div>
          </header>

          <div className="reveal-container">
            <section className="n-card reveal">
              <h2 style={styles.h2}>КТО МЫ?</h2>
              <p style={styles.p}>
                <b>SyncGo</b> — международное агентство по синхронизации бизнес-процессов. Мы проектируем <b>цифровое превосходство</b> через архитектуру нейронных связей мессенджера.
              </p>
            </section>

            <section className="n-card reveal">
              <h2 style={styles.h2}>ЧТО МЫ ДЕЛАЕМ?</h2>
              <p style={styles.p}>
                Внедряем <b>бесшовные экосистемы</b>: от нейро-копирайтинга до Mini Apps уровня «Digital Luxury» с интеграцией Telegram Stars.
              </p>
            </section>

            <section className="n-card reveal">
              <h2 style={styles.h2}>ПОЧЕМУ МЫ?</h2>
              <p style={styles.p}>
                Наш <b>Neuro-UX</b> подход гарантирует конверсию. Мы превращаем ваш канал в <b>автономный денежный печатный станок</b>.
              </p>
            </section>

            <section className="n-card reveal" style={{background: 'rgba(204, 255, 0, 0.05)'}}>
               <h2 style={styles.h2}>РЕЗУЛЬТАТ</h2>
               <p style={styles.p}>
                 <b>+300% вовлеченности</b> за счет синхронизации трафика и нативных механик удержания 2026 года.
               </p>
            </section>
          </div>
          
          <div style={{height: '100px'}}></div> 
        </div>
      </div>

      <div style={styles.fixedBottom}>
        <div style={{padding: '0 20px'}}>
          <button 
            style={styles.mainButton}
            onClick={() => tg.HapticFeedback.notificationOccurred('success')}
          >
            РАССЕЯТЬ ТУМАН АУДИТОМ
          </button>
        </div>
        <div style={styles.tickerContainer}>
          <div className="ticker-track">
            <span>● SYNCGO AGENCY ● СИНХРОНИЗАЦИЯ ТРАФИКА В ПРОДАЖИ ● МАРКЕТИНГ БУДУЩЕГО ● ТЕХНОЛОГИИ 2026 ● </span>
            <span>● SYNCGO AGENCY ● СИНХРОНИЗАЦИЯ ТРАФИКА В ПРОДАЖИ ● МАРКЕТИНГ БУДУЩЕГО ● ТЕХНОЛОГИИ 2026 ● </span>
          </div>
        </div>
      </div>

      <style>{`
        .bg-pattern { position: fixed; inset: 0; z-index: -1; opacity: 0.1; pointer-events: none; overflow: hidden; }
        .pattern-text { position: absolute; width: 300%; font-size: 60px; font-weight: 900; color: #CCFF00; transform: rotate(-45deg); opacity: 0.4; top: -50%; left: -50%; }

        /* ЭФФЕКТ ТУМАНА */
        .reveal {
          opacity: 0.1;
          filter: blur(15px) grayscale(100%);
          transform: translateY(50px) scale(0.9);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          view-timeline-name: --item;
          view-timeline-axis: block;
          animation-timeline: --item;
          animation-name: show-card;
          animation-range: entry 10% cover 40%;
          animation-fill-mode: both;
        }

        @keyframes show-card {
          to {
            opacity: 1;
            filter: blur(0) grayscale(0%);
            transform: translateY(0) scale(1);
          }
        }

        .n-card { 
          background: rgba(10, 10, 10, 0.9); padding: 30px; 
          border-radius: 24px; margin-bottom: 40px; 
          border: 1px solid rgba(255,255,255,0.05);
          backdrop-filter: blur(20px);
        }
        .n-card:nth-child(even) { border-left: 5px solid #CCFF00; }
        .n-card:nth-child(odd) { border-right: 5px solid #CCFF00; }
        
        b { color: #CCFF00; }
        .ticker-track { display: flex; gap: 40px; white-space: nowrap; animation: tick 20s linear infinite; }
        @keyframes tick { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
};

const styles = {
  body: { background: '#000', color: '#fff', height: '100vh', width: '100vw', fontFamily: 'sans-serif', overflow: 'hidden', position: 'fixed' },
  loaderPage: { height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#000' },
  scrollArea: { height: 'calc(100vh - 150px)', overflowY: 'auto', padding: '0 20px' },
  mainContent: { maxWidth: '450px', margin: '0 auto' },
  header: { textAlign: 'left', paddingTop: 'calc(80px + env(safe-area-inset-top))', marginBottom: '50px' },
  logo: { fontSize: '36px', fontWeight: '900', letterSpacing: '-2px' },
  accentLine: { width: '50px', height: '6px', background: '#CCFF00', marginTop: '10px' },
  agencyTag: { fontSize: '10px', opacity: 0.3, letterSpacing: '3px', marginTop: '15px', fontWeight: 'bold' },
  h2: { fontSize: '13px', letterSpacing: '4px', opacity: 0.4, marginBottom: '20px', fontWeight: 'bold' },
  p: { fontSize: '16px', lineHeight: '1.7', margin: 0, opacity: 0.9 },
  fixedBottom: { position: 'fixed', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, #000 80%, transparent)', paddingTop: '20px', zIndex: 110 },
  mainButton: { width: '100%', padding: '24px', background: '#CCFF00', color: '#000', border: 'none', borderRadius: '22px', fontWeight: '900', fontSize: '15px', letterSpacing: '1px', boxShadow: '0 0 50px rgba(204, 255, 0, 0.4)', marginBottom: '20px' },
  tickerContainer: { height: '45px', display: 'flex', alignItems: 'center', background: '#000', borderTop: '1px solid #151515', overflow: 'hidden', fontSize: '10px', opacity: 0.5, paddingBottom: 'env(safe-area-inset-bottom)' },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
