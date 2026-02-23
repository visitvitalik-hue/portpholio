import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

// Критическая проверка: работаем только если SDK доступен
const tg = window.Telegram ? window.Telegram.WebApp : null;

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (tg) {
      try {
        tg.ready();
        tg.expand();
        tg.setHeaderColor('#000000');
        setIsReady(true);
      } catch (e) {
        console.error("SDK Init Error");
      }
    }
  }, []);

  if (!isReady) return <div style={{background:'#000',height:'100vh'}} />;

  return (
    <div style={styles.body}>
      <div style={styles.bg}></div>
      <div style={styles.scroll}>
        <header style={styles.header}>
          <div style={styles.logo}>SYNCGO</div>
          <div style={styles.tag}>AGENCY // LOGIC_OVER_STYLE</div>
        </header>

        {/* Шахматная обводка — единственный выживший элемент декора */}
        <section className="card left">
          <h2 style={styles.h2}>СТРАТЕГИЯ</h2>
          <p style={styles.p}>Мы не рисуем картинки. Мы проектируем системы, которые выдерживают нагрузку и приносят прибыль.</p>
        </section>

        <section className="card right">
          <h2 style={styles.h2}>АРХИТЕКТУРА</h2>
          <p style={styles.p}>Ваш Mini App должен работать всегда. Мы ставим стабильность выше визуальных эффектов.</p>
        </section>

        <button style={styles.btn} onClick={() => tg && tg.HapticFeedback.impactOccurred('medium')}>
          ПРОВЕРИТЬ ЛОГИКУ ПРОЕКТА
        </button>
      </div>
      <style>{`
        .card { background: #0a0a0a; padding: 20px; border-radius: 15px; margin-bottom: 20px; border: 1px solid #1a1a1a; }
        .left { border-left: 3px solid #CCFF00; }
        .right { border-right: 3px solid #CCFF00; }
      `}</style>
    </div>
  );
};

const styles = {
  body: { background: '#000', color: '#fff', height: '100vh', fontFamily: 'monospace', overflow: 'hidden' },
  bg: { position: 'absolute', inset: 0, zIndex: -1, opacity: 0.05, backgroundImage: 'repeating-linear-gradient(-45deg, #CCFF00 0, #CCFF00 1px, transparent 1px, transparent 40px)' },
  scroll: { height: '100%', overflowY: 'auto', padding: '60px 20px 100px 20px' },
  header: { marginBottom: '40px' },
  logo: { fontSize: '32px', fontWeight: '900', color: '#CCFF00' },
  tag: { fontSize: '10px', opacity: 0.4, marginTop: '5px' },
  h2: { fontSize: '12px', color: '#CCFF00', marginBottom: '10px' },
  p: { fontSize: '14px', lineHeight: '1.5', opacity: 0.8 },
  btn: { width: '100%', padding: '20px', background: '#CCFF00', color: '#000', border: 'none', borderRadius: '12px', fontWeight: 'bold' }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
