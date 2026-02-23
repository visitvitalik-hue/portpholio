import React, { useEffect, useState } from 'react';
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
        <div className="hypno">
          <div className="r r1"></div>
          <div className="r r2"></div>
          <div className="r r3"></div>
        </div>
        <div className="status">SYNCGO_DEEP_FOG_INIT...</div>
        <style>{`
          .hypno { position: relative; width: 150px; height: 150px; display: grid; place-items: center; }
          .r { position: absolute; border-radius: 50%; border: 2px solid transparent; }
          .r1 { width: 100%; height: 100%; border-top-color: #CCFF00; animation: rot 3s linear infinite; }
          .r2 { width: 70%; height: 70%; border-right-color: #CCFF00; animation: rot-rev 2s linear infinite; }
          .r3 { width: 40%; height: 40%; border-bottom-color: #CCFF00; animation: rot 1s linear infinite; }
          @keyframes rot { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes rot-rev { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
          .status { margin-top: 20px; color: #CCFF00; font-family: monospace; font-size: 10px; letter-spacing: 2px; }
        `}</style>
      </div>
    );
  }

  return (
    <div style={styles.body}>
      {/* ВОСКРЕШЕННАЯ ПОДЛОЖКА */}
      <div className="bg-overlay"></div>
      
      <div style={styles.scrollContainer}>
        <div style={styles.content}>
          <header style={styles.header}>
            <div style={styles.logo}><span>SYNC</span>GO</div>
            <div style={styles.accentLine}></div>
            <div style={styles.tag}>AGENCY // ELITE_SOLUTIONS</div>
          </header>

          <div className="cards-stack">
            <section className="fog-card">
              <h2 style={styles.h2}>КТО МЫ?</h2>
              <p style={styles.p}>
                <b>SyncGo Agency</b> — архитекторы цифрового влияния. Мы не просто настраиваем рекламу, мы синхронизируем ваш продукт с нейронными путями клиента.
              </p>
            </section>

            <div className="scroll-hint">
               <div className="arrow"></div>
            </div>

            <section className="fog-card">
              <h2 style={styles.h2}>ЧТО МЫ ДЕЛАЕМ?</h2>
              <p style={styles.p}>
                Проектируем <b>Mini Apps</b>, которые чувствуются как нативные приложения iOS/Android. Внедряем системы автоматического дожима через AI-агентов.
              </p>
            </section>

            <div className="scroll-hint">
               <div className="arrow"></div>
            </div>

            <section className="fog-card">
              <h2 style={styles.h2}>ПОЧЕМУ МЫ?</h2>
              <p style={styles.p}>
                В 2026 году выигрывает тот, кто владеет вниманием. Наш <b>Neuro-UX</b> превращает холодный трафик в лояльное комьюнити за 3 клика.
              </p>
            </section>

            <div className="scroll-hint">
               <div className="arrow"></div>
            </div>

            <section className="fog-card" style={{borderColor: '#CCFF00'}}>
              <h2 style={styles.h2}>РЕЗУЛЬТАТ</h2>
              <p style={styles.p}>
                Полная прозрачность аналитики, масштабируемость X5 и статус лидера ниши. Мы работаем на результат, который можно измерить.
              </p>
            </section>
          </div>
          <div style={{height: '120px'}}></div>
        </div>
      </div>

      <div style={styles.bottomFixed}>
        <div style={{padding: '0 20px'}}>
          <button 
            style={styles.btn}
            onClick={() => tg.HapticFeedback.notificationOccurred('success')}
          >
            ИНИЦИИРОВАТЬ СИНХРОНИЗАЦИЮ
          </button>
        </div>
        <div style={styles.ticker}>
          <div className="t-track">
            <span>● СОВЕТ: ИСПОЛЬЗУЙТЕ MINI APPS ДЛЯ ПРЯМЫХ ПРОДАЖ ● SEO: ТГ БОТЫ 2026 ● СОВЕТ: УДЕРЖИВАЙТЕ ВНИМАНИЕ ЧЕРЕЗ ГЕЙМИФИКАЦИЮ ● SYNCGO AGENCY ● КЛЮЧ: ВЫСОКАЯ КОНВЕРСИЯ ● </span>
            <span>● СОВЕТ: ИСПОЛЬЗУЙТЕ MINI APPS ДЛЯ ПРЯМЫХ ПРОДАЖ ● SEO: ТГ БОТЫ 2026 ● СОВЕТ: УДЕРЖИВАЙТЕ ВНИМАНИЕ ЧЕРЕЗ ГЕЙМИФИКАЦИЮ ● SYNCGO AGENCY ● КЛЮЧ: ВЫСОКАЯ КОНВЕРСИЯ ● </span>
          </div>
        </div>
      </div>

      <style>{`
        .bg-overlay {
          position: fixed; inset: 0; z-index: -1;
          background: 
            repeating-linear-gradient(-45deg, rgba(204, 255, 0, 0.03) 0, rgba(204, 255, 0, 0.03) 1px, transparent 1px, transparent 80px),
            linear-gradient(135deg, #000 0%, #050505 100%);
        }
        .bg-overlay::before {
          content: 'SYNCGO'; position: absolute; font-size: 80px; font-weight: 900;
          color: rgba(204, 255, 0, 0.05); transform: rotate(-45deg);
          top: 10%; left: -10%; white-space: nowrap;
        }

        .fog-card {
          background: rgba(15, 15, 15, 0.7); padding: 30px; border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.05); backdrop-filter: blur(10px);
          margin-bottom: 20px;
          /* ДВУСТОРОННИЙ ТУМАН */
          view-timeline-name: --card; view-timeline-axis: block;
          animation: fade-fog both; animation-timeline: --card;
          animation-range: entry 0% cover 30%, exit 70% exit 100%;
        }
        @keyframes fade-fog {
          0% { opacity: 0; filter: blur(20px); transform: translateY(50px) scale(0.9); }
          30%, 70% { opacity: 1; filter: blur(0); transform: translateY(0) scale(1); }
          100% { opacity: 0; filter: blur(20px); transform: translateY(-50px) scale(0.9); }
        }

        .fog-card:nth-child(even) { border-left: 4px solid #CCFF00; }
        .fog-card:nth-child(odd) { border-right: 4px solid #CCFF00; }

        .scroll-hint { height: 60px; display: flex; justify-content: center; align-items: center; opacity: 0.3; }
        .arrow { width: 15px; height: 15px; border-right: 2px solid #CCFF00; border-bottom: 2px solid #CCFF00; transform: rotate(45deg); animation: bounce 2s infinite; }
        @keyframes bounce { 0%, 20%, 50%, 80%, 100% { transform: translateY(0) rotate(45deg); } 40% { transform: translateY(-10px) rotate(45deg); } 60% { transform: translateY(-5px) rotate(45deg); } }

        .t-track { display: flex; gap: 50px; white-space: nowrap; animation: t 25s linear infinite; }
        @keyframes t { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        b { color: #CCFF00; }
      `}</style>
    </div>
  );
};

const styles = {
  body: { background: '#000', color: '#fff', height: '100vh', width: '100vw', fontFamily: 'sans-serif', overflow: 'hidden', position: 'fixed' },
  loaderPage: { height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#000' },
  scrollContainer: { height: 'calc(100vh - 160px)', overflowY: 'auto', padding: '0 20px', WebkitOverflowScrolling: 'touch' },
  content: { maxWidth: '450px', margin: '0 auto' },
  header: { textAlign: 'left', paddingTop: 'calc(55px + env(safe-area-inset-top))', marginBottom: '40px' },
  logo: { fontSize: '30px', fontWeight: '900', letterSpacing: '-1.5px' },
  accentLine: { width: '40px', height: '5px', background: '#CCFF00', marginTop: '8px' },
  tag: { fontSize: '8px', opacity: 0.3, letterSpacing: '2px', marginTop: '10px' },
  h2: { fontSize: '11px', letterSpacing: '3px', opacity: 0.4, marginBottom: '15px' },
  p: { fontSize: '15px', lineHeight: '1.6', margin: 0, opacity: 0.9 },
  bottomFixed: { position: 'fixed', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, #000 85%, transparent)', paddingTop: '20px', zIndex: 200 },
  btn: { width: '100%', padding: '22px', background: '#CCFF00', color: '#000', border: 'none', borderRadius: '20px', fontWeight: '900', fontSize: '14px', boxShadow: '0 0 40px rgba(204, 255, 0, 0.3)', marginBottom: '15px' },
  ticker: { height: '40px', display: 'flex', alignItems: 'center', background: '#000', borderTop: '1px solid #111', fontSize: '9px', opacity: 0.5, paddingBottom: 'env(safe-area-inset-bottom)', overflow: 'hidden' }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
