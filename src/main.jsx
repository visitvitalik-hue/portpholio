import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const tg = window.Telegram.WebApp;

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#000000');
    // Имитация "прошивки" нейроинтерфейса
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={styles.loaderPage}>
        <div className="alchemy-circle">
          <div className="liquid-core"></div>
        </div>
        <div className="neuro-text">
          <span className="typewriter">СИНХРОНИЗАЦИЯ_АМБИЦИЙ...</span>
        </div>
        <style>{`
          .alchemy-circle { 
            width: 120px; height: 120px; border-radius: 50%; 
            border: 2px solid rgba(204, 255, 0, 0.1);
            position: relative; display: grid; place-items: center;
            animation: rotate 10s linear infinite;
          }
          .liquid-core {
            width: 60px; height: 60px; background: #CCFF00;
            border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
            filter: blur(8px); box-shadow: 0 0 40px #CCFF00;
            animation: morph 3s ease-in-out infinite alternate;
          }
          @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes morph {
            0% { border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%; transform: scale(1); }
            100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: scale(1.1); }
          }
          .neuro-text { margin-top: 40px; font-family: 'monospace'; color: #CCFF00; font-size: 10px; letter-spacing: 2px; }
          @keyframes ticker { to { transform: translateX(-50%); } }
        `}</style>
      </div>
    );
  }

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        {/* IDENTITY BLOCK */}
        <header style={styles.header}>
          <div style={styles.logoWrap}>
            <span style={{color: '#CCFF00'}}>SYNC</span>GO
          </div>
          <div style={styles.line}></div>
        </header>

        {/* НЕЙРОЛИНГВИСТИЧЕСКИЙ МАНИФЕСТ */}
        <section className="neuro-card">
          <h2 style={styles.h2}>КТО МЫ?</h2>
          <p style={styles.p}>
            <b>SyncGo</b> — это технологическая сингулярность вашего бизнеса в Telegram. Мы не создаем инструменты, мы создаем <b>цифровое превосходство</b>. Мы — те, кто синхронизирует хаос трафика в идеальный поток прибыли.
          </p>
        </section>

        <section className="neuro-card" style={{borderLeft: '2px solid #CCFF00'}}>
          <h2 style={styles.h2}>ЧТО МЫ ДЕЛАЕМ?</h2>
          <p style={styles.p}>
            Проектируем и внедряем <b>бесшовные экосистемы</b>: 
            <br/>● Канал с архитектурой доверия. 
            <br/>● Бот с логикой дожима 24/7. 
            <br/>● Mini App с визуалом «Digital Luxury».
          </p>
        </section>

        <section className="neuro-card">
          <h2 style={styles.h2}>ПОЧЕМУ МЫ?</h2>
          <p style={styles.p}>
            Потому что ваш результат — это наша <b>обязанность</b>. Мы используем <b>Neuro-UX</b> (психофизиологические триггеры), чтобы каждый клик вашего клиента приводил к чеку. Мы делаем дорого, чтобы вы зарабатывали еще дороже.
          </p>
        </section>

        <button 
          style={styles.mainBtn}
          onClick={() => tg.HapticFeedback.notificationOccurred('success')}
        >
          ИНТЕРПРЕТИРОВАТЬ МОЙ ПРОЕКТ
        </button>

        {/* TICKER */}
        <div style={styles.ticker}>
          <div style={styles.track}>
            <span>● SYNCGO ● 2026 ● NEURO_ARCHITECTS ● LUXURY_CONVERSION ● </span>
            <span>● SYNCGO ● 2026 ● NEURO_ARCHITECTS ● LUXURY_CONVERSION ● </span>
          </div>
        </div>
      </div>
      <style>{`
        .neuro-card { 
          background: rgba(255,255,255,0.02); padding: 25px; 
          border-radius: 20px; margin-bottom: 20px;
        }
        b { color: #CCFF00; }
      `}</style>
    </div>
  );
};

const styles = {
  body: { background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' },
  loaderPage: { height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#000' },
  container: { maxWidth: '450px', margin: '0 auto', padding: 'calc(30px + env(safe-area-inset-top)) 20px 100px 20px' },
  header: { textAlign: 'left', marginBottom: '40px' },
  logoWrap: { fontSize: '32px', fontWeight: '900', letterSpacing: '-1px' },
  line: { width: '40px', height: '4px', background: '#CCFF00', marginTop: '10px' },
  h2: { fontSize: '14px', letterSpacing: '2px', opacity: 0.4, marginBottom: '15px' },
  p: { fontSize: '15px', lineHeight: '1.6', margin: 0, opacity: 0.8 },
  mainBtn: { 
    width: '100%', padding: '20px', background: '#CCFF00', color: '#000', 
    border: 'none', borderRadius: '18px', fontWeight: '900', fontSize: '14px',
    marginTop: '20px', boxShadow: '0 0 30px rgba(204, 255, 0, 0.2)'
  },
  ticker: { position: 'fixed', bottom: 0, left: 0, right: 0, padding: '15px 0', borderTop: '1px solid #111', background: '#000' },
  track: { display: 'flex', gap: '40px', whiteSpace: 'nowrap', animation: 'ticker 10s linear infinite', fontSize: '10px', opacity: 0.2 }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
