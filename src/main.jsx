import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const tg = window.Telegram ? window.Telegram.WebApp : null;

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (tg) {
      tg.ready();
      tg.expand();
      tg.setHeaderColor('#000000');
    }
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{background: '#000', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div className="loader"></div>
        <style>{`.loader { width: 30px; height: 30px; border: 2px solid #CCFF00; border-top-color: transparent; border-radius: 50%; animation: s 0.6s linear infinite; } @keyframes s { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div style={styles.body}>
      {/* ДИАГОНАЛЬНЫЙ ФОН: Виден и стабилен */}
      <div style={styles.bg}></div>
      
      <div style={styles.scroll}>
        <div style={styles.wrap}>
          <header style={styles.header}>
            <div style={styles.logo}><span>SYNC</span>GO</div>
            <div style={styles.line}></div>
            <div style={styles.tag}>AGENCY // SOLID_CORE_V5.5</div>
          </header>

          <div className="cards-stack">
            <section className="n-card c-left">
              <h2 style={styles.h2}>КТО МЫ?</h2>
              <p style={styles.p}><b>SyncGo Agency</b> — архитекторы цифрового превосходства. Мы синхронизируем ваш продукт с нейронными путями клиента.</p>
            </section>

            <section className="n-card c-right">
              <h2 style={styles.h2}>ЧТО МЫ ДЕЛАЕМ?</h2>
              <p style={styles.p}>Проектируем <b>Mini Apps</b> уровня «Digital Luxury» и внедряем системы автоматического дожима 24/7.</p>
            </section>

            <section className="n-card c-left">
              <h2 style={styles.h2}>ПОЧЕМУ МЫ?</h2>
              <p style={styles.p}>Наш <b>Neuro-UX</b> превращает холодный трафик в лояльное комьюнити. Мы делаем дорого, чтобы вы зарабатывали еще дороже.</p>
            </section>

            <section className="n-card c-right" style={{background: 'rgba(204, 255, 0, 0.05)', borderColor: '#CCFF00'}}>
              <h2 style={styles.h2}>РЕЗУЛЬТАТ</h2>
              <p style={styles.p}>Синхронизация трафика и продаж с гарантией вовлеченности через нативные механики 2026 года.</p>
            </section>
          </div>
          <div style={{height: '140px'}}></div>
        </div>
      </div>

      <div style={styles.bottomBar}>
        <div style={{padding: '0 20px'}}>
          <button style={styles.btn} onClick={() => tg && tg.HapticFeedback.notificationOccurred('success')}>
            ПОЛУЧИТЬ АУДИТ АГЕНТСТВА
          </button>
        </div>
        <div style={styles.ticker}>
          <div className="t-track">
            <span>● SYNCGO AGENCY ● ТЕХНОЛОГИИ 2026 ● ВЫСОКАЯ КОНВЕРСИЯ ● NEURO_UX ● СИНХРОНИЗАЦИЯ ТРАФИКА В ПРОДАЖИ ● </span>
            <span>● SYNCGO AGENCY ● ТЕХНОЛОГИИ 2026 ● ВЫСОКАЯ КОНВЕРСИЯ ● NEURO_UX ● СИНХРОНИЗАЦИЯ ТРАФИКА В ПРОДАЖИ ● </span>
          </div>
        </div>
      </div>

      <style>{`
        .n-card { background: rgba(10, 10, 10, 0.9); padding: 25px; border-radius: 20px; margin-bottom: 25px; border: 1px solid rgba(255,255,255,0.05); backdrop-filter: blur(10px); }
        .c-left { border-left: 4px solid #CCFF00; }
        .c-right { border-right: 4px solid #CCFF00; }
        b { color: #CCFF00; }
        .t-track { display: flex; gap: 40px; white-space: nowrap; animation: move 20s linear infinite; }
        @keyframes move { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
};

const styles = {
  body: { background: '#000', color: '#fff', height: '100vh', width: '100vw', fontFamily: 'sans-serif', overflow: 'hidden', position: 'fixed' },
  bg: { position: 'absolute', inset: 0, zIndex: -1, opacity: 0.06, backgroundImage: 'repeating-linear-gradient(-45deg, #CCFF00 0, #CCFF00 1px, transparent 1px, transparent 80px)' },
  scroll: { height: '100%', overflowY: 'auto', padding: '0 20px', WebkitOverflowScrolling: 'touch' },
  wrap: { maxWidth: '450px', margin: '0 auto' },
  header: { textAlign: 'left', paddingTop: 'calc(60px + env(safe-area-inset-top))', marginBottom: '35px' },
  logo: { fontSize: '30px', fontWeight: '900', letterSpacing: '-1.5px' },
  line: { width: '45px', height: '5px', background: '#CCFF00', marginTop: '8px' },
  tag: { fontSize: '8px', opacity: 0.3, letterSpacing: '2px', marginTop: '10px' },
  h2: { fontSize: '11px', letterSpacing: '3px', opacity: 0.3, marginBottom: '15px', fontWeight: 'bold' },
  p: { fontSize: '15px', lineHeight: '1.6', margin: 0, opacity: 0.85 },
  bottomBar: { position: 'fixed', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, #000 80%, transparent)', paddingTop: '20px', zIndex: 100 },
  btn: { width: '100%', padding: '22px', background: '#CCFF00', color: '#000', border: 'none', borderRadius: '18px', fontWeight: '900', fontSize: '14px', marginBottom: '15px', boxShadow: '0 0 30px rgba(204, 255, 0, 0.2)' },
  ticker: { height: '42px', display: 'flex', alignItems: 'center', background: '#000', borderTop: '1px solid #111', fontSize: '10px', opacity: 0.4, overflow: 'hidden', paddingBottom: 'env(safe-area-inset-bottom)' }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
