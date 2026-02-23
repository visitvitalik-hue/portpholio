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
        <div className="loading-status">SYNCGO_AGENCY_INIT...</div>
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
      {/* ДИАГОНАЛЬНЫЙ ФОН: Сделал ярче и четче */}
      <div className="bg-pattern">
        <div className="pattern-text">SYNCGO SYNCGO SYNCGO SYNCGO SYNCGO SYNCGO SYNCGO SYNCGO SYNCGO SYNCGO SYNCGO SYNCGO SYNCGO SYNCGO SYNCGO SYNCGO SYNCGO SYNCGO SYNCGO SYNCGO SYNCGO SYNCGO</div>
      </div>

      <div style={styles.scrollArea}>
        <div style={styles.mainContent}>
          <header style={styles.header}>
            <div style={styles.logo}><span>SYNC</span>GO</div>
            <div style={styles.accentLine}></div>
            <div style={styles.agencyTag}>AGENCY // DIGITAL_ARCHITECTURE</div>
          </header>

          <section className="n-card">
            <h2 style={styles.h2}>КТО МЫ?</h2>
            <p style={styles.p}>
              <b>SyncGo</b> — международное агентство по синхронизации бизнес-процессов в Telegram. Мы проектируем <b>экосистемы</b>, которые заменяют отделы маркетинга и продаж.
            </p>
          </section>

          <section className="n-card">
            <h2 style={styles.h2}>ЧТО МЫ ДЕЛАЕМ?</h2>
            <p style={styles.p}>
              Мы внедряем <b>автоматизированные протоколы</b>: от нейро-копирайтинга в каналах до высокотехнологичных Mini Apps с бесшовной оплатой.
            </p>
          </section>

          <section className="n-card">
            <h2 style={styles.h2}>ПОЧЕМУ МЫ?</h2>
            <p style={styles.p}>
              Наш <b>Neuro-UX</b> подход гарантирует удержание внимания клиента. Мы не просто делаем ботов, мы строим <b>активы</b> с капитализацией в Stars.
            </p>
          </section>

          <section className="n-card" style={{background: 'rgba(204, 255, 0, 0.05)'}}>
             <h2 style={styles.h2}>ПАРТНЕРСТВО</h2>
             <p style={styles.p}>
               Мы берем на сопровождение только 2 бренда в месяц. Индивидуальная архитектура, закрытые кейсы, гарантированный ROI.
             </p>
          </section>
          
          <div style={{height: '60px'}}></div> 
        </div>
      </div>

      <div style={styles.fixedBottom}>
        <div style={{padding: '0 20px'}}>
          <button 
            style={styles.mainButton}
            onClick={() => tg.HapticFeedback.notificationOccurred('success')}
          >
            ПОЛУЧИТЬ АУДИТ АГЕНТСТВА
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
        .bg-pattern {
          position: fixed; inset: 0; z-index: -1; opacity: 0.08; pointer-events: none;
          overflow: hidden;
        }
        .pattern-text {
          position: absolute; width: 300%; font-size: 50px; font-weight: 900;
          color: #CCFF00; transform: rotate(-45deg); line-height: 1.5;
          letter-spacing: 20px; white-space: normal; top: -50%; left: -50%;
        }

        .n-card { 
          background: rgba(15, 15, 15, 0.85); padding: 25px; 
          border-radius: 20px; margin-bottom: 20px; 
          border: 1px solid rgba(255,255,255,0.05);
          backdrop-filter: blur(12px);
        }
        .n-card:nth-child(even) { border-left: 4px solid #CCFF00; }
        .n-card:nth-child(odd) { border-right: 4px solid #CCFF00; }
        
        b { color: #CCFF00; }
        .ticker-track { display: flex; gap: 40px; white-space: nowrap; animation: tick 18s linear infinite; }
        @keyframes tick { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
};

const styles = {
  body: { background: '#000', color: '#fff', height: '100vh', width: '100vw', fontFamily: 'sans-serif', overflow: 'hidden', position: 'fixed' },
  loaderPage: { height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#000' },
  scrollArea: { 
    height: 'calc(100vh - 150px)', 
    overflowY: 'auto', WebkitOverflowScrolling: 'touch', 
    padding: '0 20px' 
  },
  mainContent: { maxWidth: '450px', margin: '0 auto' },
  header: { 
    textAlign: 'left', 
    paddingTop: 'calc(70px + env(safe-area-inset-top))', 
    marginBottom: '40px' 
  },
  logo: { fontSize: '32px', fontWeight: '900', letterSpacing: '-1.5px' },
  accentLine: { width: '45px', height: '5px', background: '#CCFF00', marginTop: '8px' },
  agencyTag: { fontSize: '9px', opacity: 0.3, letterSpacing: '2px', marginTop: '10px', fontWeight: 'bold' },
  h2: { fontSize: '12px', letterSpacing: '3px', opacity: 0.3, marginBottom: '15px', fontWeight: 'bold' },
  p: { fontSize: '15px', lineHeight: '1.6', margin: 0, opacity: 0.85 },
  fixedBottom: {
    position: 'fixed', bottom: 0, left: 0, right: 0,
    background: 'linear-gradient(to top, #000 70%, transparent)',
    paddingTop: '20px', zIndex: 110
  },
  mainButton: { 
    width: '100%', padding: '22px', background: '#CCFF00', color: '#000', border: 'none', 
    borderRadius: '20px', fontWeight: '900', fontSize: '14px', letterSpacing: '1px',
    boxShadow: '0 0 40px rgba(204, 255, 0, 0.3)', marginBottom: '15px'
  },
  tickerContainer: { 
    height: '42px', display: 'flex', alignItems: 'center',
    background: '#000', borderTop: '1px solid #151515', overflow: 'hidden',
    fontSize: '10px', opacity: 0.5, paddingBottom: 'env(safe-area-inset-bottom)'
  },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
