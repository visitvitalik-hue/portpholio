import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const tg = window.Telegram.WebApp;

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#000000');
    // Минимальная задержка для инициализации API без перегрузки
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={styles.loaderPage}>
        <div className="hypno-mini"></div>
        <style>{`
          .hypno-mini { 
            width: 40px; height: 40px; border: 3px solid rgba(204, 255, 0, 0.1); 
            border-top-color: #CCFF00; border-radius: 50%; 
            animation: spin 0.8s linear infinite;
          }
          @keyframes spin { to { transform: rotate(360deg); } }
        `}</style>
      </div>
    );
  }

  return (
    <div style={styles.body}>
      {/* СТАБИЛЬНАЯ ДИАГОНАЛЬНАЯ ПОДЛОЖКА */}
      <div style={styles.bgPattern}></div>
      
      <div style={styles.scrollArea}>
        <div style={styles.mainContent}>
          <header style={styles.header}>
            <div style={styles.logo}><span>SYNC</span>GO</div>
            <div style={styles.accentLine}></div>
            <div style={styles.agencyTag}>AGENCY // STABLE_V5</div>
          </header>

          <div className="stack">
            {/* ШАХМАТНЫЙ ПОРЯДОК */}
            <section className="n-card c-left">
              <h2 style={styles.h2}>КТО МЫ?</h2>
              <p style={styles.p}>
                <b>SyncGo Agency</b> — это технологическая сингулярность вашего бизнеса. Мы создаем <b>цифровое превосходство</b>.
              </p>
            </section>

            <section className="n-card c-right">
              <h2 style={styles.h2}>ЧТО МЫ ДЕЛАЕМ?</h2>
              <p style={styles.p}>
                Проектируем <b>Mini Apps</b> уровня «Digital Luxury» и внедряем системы автоматического дожима 24/7.
              </p>
            </section>

            <section className="n-card c-left">
              <h2 style={styles.h2}>ПОЧЕМУ МЫ?</h2>
              <p style={styles.p}>
                Наш <b>Neuro-UX</b> превращает холодный трафик в деньги. Мы делаем дорого, чтобы вы зарабатывали еще дороже.
              </p>
            </section>

            <section className="n-card c-right" style={{background: 'rgba(204, 255, 0, 0.05)'}}>
              <h2 style={styles.h2}>РЕЗУЛЬТАТ</h2>
              <p style={styles.p}>
                Синхронизация трафика и продаж с гарантией вовлеченности через нативные механики 2026 года.
              </p>
            </section>
          </div>
          <div style={{height: '100px'}}></div>
        </div>
      </div>

      <div style={styles.fixedBottom}>
        <div style={{padding: '0 20px'}}>
          <button style={styles.btn} onClick={() => tg.HapticFeedback.notificationOccurred('success')}>
            ПОЛУЧИТЬ АУДИТ
          </button>
        </div>
        <div style={styles.ticker}>
          <div className="t-track">
            <span>● SYNCGO AGENCY ● ТЕХНОЛОГИИ 2026 ● ВЫСОКАЯ КОНВЕРСИЯ ● NEURO_UX ● </span>
            <span>● SYNCGO AGENCY ● ТЕХНОЛОГИИ 2026 ● ВЫСОКАЯ КОНВЕРСИЯ ● NEURO_UX ● </span>
          </div>
        </div>
      </div>

      <style>{`
        .n-card {
          background: rgba(12, 12, 12, 0.95); padding: 22px; border-radius: 20px;
          margin-bottom: 25px; border: 1px solid rgba(255,255,255,0.05);
          backdrop-filter: blur(8px);
        }
        .c-left { border-left: 4px solid #CCFF00; }
        .c-right { border-right: 4px solid #CCFF00; }
        b { color: #CCFF00; }
        .t-track { display: flex; gap: 40px; white-space: nowrap; animation: move 18s linear infinite; }
        @keyframes move { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
};

const styles = {
  body: { background: '#000', color: '#fff', height: '100vh', width: '100vw', fontFamily: 'sans-serif', overflow: 'hidden', position: 'fixed' },
  bgPattern: { position: 'absolute', inset: 0, zIndex: -1, opacity: 0.03, backgroundImage: 'repeating-linear-gradient(-45deg, #CCFF00 0, #CCFF00 1px, transparent 1px, transparent 60px)' },
  loaderPage: { height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000' },
  scrollArea: { height: 'calc(100vh - 140px)', overflowY: 'auto', padding: '0 20px', WebkitOverflowScrolling: 'touch' },
  mainContent: { maxWidth: '450px', margin: '0 auto' },
  header: { textAlign: 'left', paddingTop: 'calc(55px + env(safe-area-inset-top))', marginBottom: '35px' },
  logo: { fontSize: '30px', fontWeight: '900', letterSpacing: '-1.5px' },
  accentLine: { width: '45px', height: '5px', background: '#CCFF00', marginTop: '8px' },
  agencyTag: { fontSize: '9px', opacity: 0.3, letterSpacing: '2px', marginTop: '10px' },
  h2: { fontSize: '11px', letterSpacing: '2px', opacity: 0.3, marginBottom: '12px', fontWeight: 'bold' },
  p: { fontSize: '15px', lineHeight: '1.6', margin: 0, opacity: 0.85 },
  fixedBottom: { position: 'fixed', bottom: 0, left: 0, right: 0, background: '#000', paddingTop: '15px', zIndex: 100 },
  btn: { width: '100%', padding: '22px', background: '#CCFF00', color: '#000', border: 'none', borderRadius: '18px', fontWeight: '900', fontSize: '14px', marginBottom: '15px' },
  ticker: { height: '40px', display: 'flex', alignItems: 'center', borderTop: '1px solid #111', fontSize: '9px', opacity: 0.4, overflow: 'hidden' }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
