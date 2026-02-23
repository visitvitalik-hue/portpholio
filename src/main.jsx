import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const tg = window.Telegram.WebApp;

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#000000');
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={styles.loaderPage}>
        <div className="hypno-box">
          <div className="r r1"></div>
          <div className="r r2"></div>
          <div className="r r3"></div>
        </div>
        <div className="l-status">SYNCGO_DEEP_SYNC...</div>
        <style>{`
          .hypno-box { position: relative; width: 150px; height: 150px; display: grid; place-items: center; }
          .r { position: absolute; border-radius: 50%; border: 2px solid transparent; }
          .r1 { width: 100%; height: 100%; border-top-color: #CCFF00; animation: rot 3s linear infinite; }
          .r2 { width: 70%; height: 70%; border-right-color: #CCFF00; animation: rot-rev 2s linear infinite; }
          .r3 { width: 40%; height: 40%; border-bottom-color: #CCFF00; animation: rot 1s linear infinite; }
          @keyframes rot { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes rot-rev { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
          .l-status { margin-top: 30px; color: #CCFF00; font-family: monospace; font-size: 10px; letter-spacing: 3px; }
        `}</style>
      </div>
    );
  }

  return (
    <div style={styles.body}>
      {/* ДИАГОНАЛЬНЫЙ ФОН */}
      <div className="bg-canvas"></div>
      
      <div style={styles.scrollContainer}>
        <div style={styles.mainWrapper}>
          <header style={styles.header}>
            <div style={styles.logo}><span>SYNC</span>GO</div>
            <div style={styles.accentLine}></div>
            <div style={styles.agency}>AGENCY // DEEP_FOG_REVEAL</div>
          </header>

          <div className="stack">
            <section className="f-card">
              <h2 style={styles.h2}>КТО МЫ?</h2>
              <p style={styles.p}>
                <b>SyncGo Agency</b> — архитекторы цифрового влияния. Мы не просто настраиваем рекламу, мы синхронизируем ваш продукт с нейронными путями клиента.
              </p>
            </section>

            <div className="s-hint"><span>▼</span></div>

            <section className="f-card">
              <h2 style={styles.h2}>ЧТО МЫ ДЕЛАЕМ?</h2>
              <p style={styles.p}>
                Проектируем <b>Mini Apps</b>, которые чувствуются как нативные приложения iOS/Android. Внедряем системы автоматического дожима через AI-агентов.
              </p>
            </section>

            <div className="s-hint"><span>▼</span></div>

            <section className="f-card">
              <h2 style={styles.h2}>ПОЧЕМУ МЫ?</h2>
              <p style={styles.p}>
                В 2026 году выигрывает тот, кто владеет вниманием. Наш <b>Neuro-UX</b> превращает холодный трафик в лояльное комьюнити за 3 клика.
              </p>
            </section>

            <div className="s-hint"><span>▼</span></div>

            <section className="f-card" style={{borderColor: '#CCFF00'}}>
              <h2 style={styles.h2}>РЕЗУЛЬТАТ</h2>
              <p style={styles.p}>
                Полная прозрачность аналитики, масштабируемость X5 и статус лидера ниши. Мы работаем на результат, который можно измерить.
              </p>
            </section>
          </div>
          <div style={{height: '100px'}}></div>
        </div>
      </div>

      <div style={styles.bottomBar}>
        <div style={{padding: '0 20px'}}>
          <button 
            style={styles.btn}
            onClick={() => tg.HapticFeedback.notificationOccurred('success')}
          >
            ИНИЦИИРОВАТЬ СИНХРОНИЗАЦИЮ
          </button>
        </div>
        <div style={styles.ticker}>
          <div className="track-s">
            <span>● СОВЕТ: ИСПОЛЬЗУЙТЕ MINI APPS ДЛЯ ПРЯМЫХ ПРОДАЖ ● SEO: ТГ БОТЫ 2026 ● СОВЕТ: УДЕРЖИВАЙТЕ ВНИМАНИЕ ЧЕРЕЗ ГЕЙМИФИКАЦИЮ ● SYNCGO AGENCY ● КЛЮЧ: ВЫСОКАЯ КОНВЕРСИЯ ● </span>
            <span>● СОВЕТ: ИСПОЛЬЗУЙТЕ MINI APPS ДЛЯ ПРЯМЫХ ПРОДАЖ ● SEO: ТГ БОТЫ 2026 ● СОВЕТ: УДЕРЖИВАЙТЕ ВНИМАНИЕ ЧЕРЕЗ ГЕЙМИФИКАЦИЮ ● SYNCGO AGENCY ● КЛЮЧ: ВЫСОКАЯ КОНВЕРСИЯ ● </span>
          </div>
        </div>
      </div>

      <style>{`
        .bg-canvas {
          position: fixed; inset: 0; z-index: -1;
          background: linear-gradient(135deg, #000 0%, #050505 100%);
        }
        .bg-canvas::before {
          content: 'SYNCGO SYNCGO SYNCGO SYNCGO'; position: absolute; 
          font-size: 60px; font-weight: 900; color: rgba(204, 255, 0, 0.05); 
          transform: rotate(-45deg); top: -20%; left: -20%; white-space: nowrap;
          word-spacing: 50px; line-height: 1.5; width: 200%;
        }

        .f-card {
          background: rgba(15, 15, 15, 0.7); padding: 25px; border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.05); backdrop-filter: blur(10px);
          margin-bottom: 30px;
          /* УЛЬТРА-ТУМАН ПРИ СКРОЛЛЕ */
          view-timeline-name: --c; view-timeline-axis: block;
          animation: focus-reveal both; animation-timeline: --c;
          animation-range: entry 0% cover 50%, exit 50% exit 100%;
        }
        @keyframes focus-reveal {
          0%, 100% { opacity: 0; filter: blur(25px); transform: scale(0.85); }
          50% { opacity: 1; filter: blur(0); transform: scale(1); }
        }

        .f-card:nth-child(odd) { border-left: 4px solid #CCFF00; }
        .f-card:nth-child(even) { border-right: 4px solid #CCFF00; }

        .s-hint { height: 40px; display: flex; justify-content: center; align-items: center; color: #CCFF00; opacity: 0.3; animation: bnc 2s infinite; }
        @keyframes bnc { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }

        .track-s { display: flex; gap: 50px; white-space: nowrap; animation: t 30s linear infinite; }
        @keyframes t { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        b { color: #CCFF00; }
      `}</style>
    </div>
  );
};

const styles = {
  body: { background: '#000', color: '#fff', height: '100vh', width: '100vw', fontFamily: 'sans-serif', overflow: 'hidden', position: 'fixed' },
  loaderPage: { height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000' },
  scrollContainer: { height: 'calc(100vh - 160px)', overflowY: 'auto', padding: '0 20px', WebkitOverflowScrolling: 'touch' },
  mainWrapper: { maxWidth: '450px', margin: '0 auto' },
  header: { textAlign: 'left', paddingTop: 'calc(50px + env(safe-area-inset-top))', marginBottom: '40px' },
  logo: { fontSize: '28px', fontWeight: '900', letterSpacing: '-1px' },
  accentLine: { width: '40px', height: '4px', background: '#CCFF00', marginTop: '8px' },
  agency: { fontSize: '8px', opacity: 0.3, letterSpacing: '2px', marginTop: '10px' },
  h2: { fontSize: '11px', letterSpacing: '2px', opacity: 0.3, marginBottom: '12px' },
  p: { fontSize: '14px', lineHeight: '1.5', margin: 0, opacity: 0.85 },
  bottomBar: { position: 'fixed', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, #000 80%, transparent)', paddingTop: '20px', zIndex: 100 },
  btn: { width: '100%', padding: '20px', background: '#CCFF00', color: '#000', border: 'none', borderRadius: '18px', fontWeight: '900', fontSize: '13px', boxShadow: '0 0 30px rgba(204, 255, 0, 0.3)', marginBottom: '15px' },
  ticker: { height: '40px', display: 'flex', alignItems: 'center', background: '#000', borderTop: '1px solid #111', fontSize: '9px', opacity: 0.4, paddingBottom: 'env(safe-area-inset-bottom)', overflow: 'hidden' }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
