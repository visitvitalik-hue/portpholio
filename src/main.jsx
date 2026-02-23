import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const tg = window.Telegram.WebApp;

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#000000');
    // Даем чуть больше времени на "прогрев" системы
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={styles.loaderPage}>
        <div className="hypno-circle"></div>
        <div style={{color: '#CCFF00', marginTop: '20px', fontSize: '10px', letterSpacing: '2px'}}>SYNCGO_RECOVERING...</div>
        <style>{`
          .hypno-circle { 
            width: 60px; height: 60px; border: 2px solid #CCFF00; 
            border-radius: 50%; border-top-color: transparent;
            animation: spin 1s linear infinite;
          }
          @keyframes spin { to { transform: rotate(360deg); } }
        `}</style>
      </div>
    );
  }

  return (
    <div style={styles.body}>
      {/* ДИАГОНАЛЬНАЯ ПОДЛОЖКА (Стабильная версия) */}
      <div style={styles.bgPattern}></div>
      
      <div style={styles.scrollContainer}>
        <div style={styles.mainContent}>
          <header style={styles.header}>
            <div style={styles.logo}><span>SYNC</span>GO</div>
            <div style={styles.accentLine}></div>
            <div style={styles.agencyTag}>AGENCY // STABLE_VERSION_4.0</div>
          </header>

          <div className="stack">
            {/* ШАХМАТНЫЙ ПОРЯДОК */}
            <section className="fog-card card-left">
              <h2 style={styles.h2}>КТО МЫ?</h2>
              <p style={styles.p}>
                <b>SyncGo Agency</b> — архитекторы цифрового влияния. Мы синхронизируем ваш продукт с нейронными путями клиента.
              </p>
            </section>

            <section className="fog-card card-right">
              <h2 style={styles.h2}>ЧТО МЫ ДЕЛАЕМ?</h2>
              <p style={styles.p}>
                Проектируем <b>Mini Apps</b> уровня «Digital Luxury» и внедряем системы автоматического дожима через AI.
              </p>
            </section>

            <section className="fog-card card-left">
              <h2 style={styles.h2}>ПОЧЕМУ МЫ?</h2>
              <p style={styles.p}>
                Наш <b>Neuro-UX</b> превращает холодный трафик в лояльное комьюнити. Мы делаем дорого, чтобы вы зарабатывали еще дороже.
              </p>
            </section>

            <section className="fog-card card-right" style={{background: 'rgba(204, 255, 0, 0.05)'}}>
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
            ИНИЦИИРОВАТЬ СИНХРОНИЗАЦИЮ
          </button>
        </div>
        <div style={styles.ticker}>
          <div className="ticker-inner">
            <span>● СОВЕТ: ИСПОЛЬЗУЙТЕ MINI APPS ДЛЯ ПРОДАЖ ● SEO: ТГ БОТЫ 2026 ● СОВЕТ: УДЕРЖИВАЙТЕ ВНИМАНИЕ ЧЕРЕЗ ГЕЙМИФИКАЦИЮ ● SYNCGO AGENCY ● </span>
            <span>● СОВЕТ: ИСПОЛЬЗУЙТЕ MINI APPS ДЛЯ ПРОДАЖ ● SEO: ТГ БОТЫ 2026 ● СОВЕТ: УДЕРЖИВАЙТЕ ВНИМАНИЕ ЧЕРЕЗ ГЕЙМИФИКАЦИЮ ● SYNCGO AGENCY ● </span>
          </div>
        </div>
      </div>

      <style>{`
        .fog-card {
          background: rgba(15, 15, 15, 0.9); padding: 25px; border-radius: 20px;
          margin-bottom: 30px; border: 1px solid rgba(255,255,255,0.05);
          transition: 0.5s; backdrop-filter: blur(10px);
        }
        .card-left { border-left: 4px solid #CCFF00; }
        .card-right { border-right: 4px solid #CCFF00; }
        
        b { color: #CCFF00; }
        .ticker-inner { display: flex; gap: 50px; white-space: nowrap; animation: t-move 20s linear infinite; }
        @keyframes t-move { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
};

const styles = {
  body: { background: '#000', color: '#fff', height: '100vh', width: '100vw', fontFamily: 'sans-serif', overflow: 'hidden', position: 'fixed' },
  bgPattern: { position: 'absolute', inset: 0, zIndex: -1, opacity: 0.05, backgroundImage: 'linear-gradient(45deg, #CCFF00 25%, transparent 25%, transparent 50%, #CCFF00 50%, #CCFF00 75%, transparent 75%, transparent 100%)', backgroundSize: '100px 100px' },
  loaderPage: { height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#000' },
  scrollContainer: { height: 'calc(100vh - 150px)', overflowY: 'auto', padding: '0 20px', WebkitOverflowScrolling: 'touch' },
  mainContent: { maxWidth: '450px', margin: '0 auto' },
  header: { textAlign: 'left', paddingTop: 'calc(50px + env(safe-area-inset-top))', marginBottom: '30px' },
  logo: { fontSize: '28px', fontWeight: '900', letterSpacing: '-1.5px' },
  accentLine: { width: '40px', height: '4px', background: '#CCFF00', marginTop: '8px' },
  agencyTag: { fontSize: '8px', opacity: 0.3, letterSpacing: '2px', marginTop: '10px' },
  h2: { fontSize: '11px', letterSpacing: '2px', opacity: 0.3, marginBottom: '12px' },
  p: { fontSize: '15px', lineHeight: '1.6', margin: 0, opacity: 0.85 },
  fixedBottom: { position: 'fixed', bottom: 0, left: 0, right: 0, background: '#000', paddingTop: '10px', zIndex: 100 },
  btn: { width: '100%', padding: '20px', background: '#CCFF00', color: '#000', border: 'none', borderRadius: '18px', fontWeight: '900', fontSize: '14px', marginBottom: '15px' },
  ticker: { height: '40px', display: 'flex', alignItems: 'center', borderTop: '1px solid #111', fontSize: '9px', opacity: 0.4, overflow: 'hidden' }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
