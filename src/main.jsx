import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const tg = window.Telegram.WebApp;

const App = () => {
  useEffect(() => {
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#000000');
  }, []);

  return (
    <div style={styles.body}>
      {/* Глобальные стили для исключения косяков на разных OS */}
      <style>{`
        * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
        body { margin: 0; padding: 0; background: #000; overflow-x: hidden; }
        
        .neon-alchemy-card {
          background: linear-gradient(135deg, rgba(20, 20, 20, 0.8) 0%, rgba(5, 5, 5, 0.9) 100%);
          border: 1px solid rgba(204, 255, 0, 0.15);
          border-radius: 24px;
          padding: 24px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .neon-alchemy-card::before {
          content: ''; position: absolute; top: -50%; left: -50%; 
          width: 200%; height: 200%;
          background: radial-gradient(circle, rgba(204, 255, 0, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .btn-sync {
          background: #CCFF00;
          color: #000;
          border: none;
          border-radius: 14px;
          padding: 16px;
          font-weight: 900;
          font-size: 14px;
          letter-spacing: 1px;
          width: 100%;
          box-shadow: 0 4px 15px rgba(204, 255, 0, 0.3);
        }
      `}</style>

      <div style={styles.container}>
        {/* HEADER: SYNCGO LUXURY */}
        <header style={styles.header}>
          <div style={styles.logoBox}>
             <div style={styles.logoCircle}>S</div>
             <div style={styles.logoCircle}>G</div>
          </div>
          <h1 style={styles.brandName}>SYNCGO</h1>
          <div style={styles.statusLine}>SYSTEM_ACTIVE // 2026</div>
        </header>

        {/* MAIN DISPLAY */}
        <div className="neon-alchemy-card">
          <div style={styles.tag}>EXPERTISE_HUB</div>
          <h2 style={styles.cardTitle}>PREMIUM_AUDIT</h2>
          <p style={styles.cardText}>
            Синхронизируем ваш трафик с реальной прибылью. Выявляем утечки конверсии в Mini Apps.
          </p>
          <div style={styles.divider}></div>
          <button 
            className="btn-sync" 
            onClick={() => {
              tg.HapticFeedback.notificationOccurred('success');
              tg.showAlert("Инициализация аудита SYNCGO...");
            }}
          >
            ПОЛУЧИТЬ РЕЗУЛЬТАТ
          </button>
        </div>

        {/* FOOTER: Pixel Perfect Bottom Area */}
        <footer style={styles.footer}>
           SYNCGO DIGITAL ENGINE • NO_NAME_STARTUP_POWER
        </footer>
      </div>
    </div>
  );
};

const styles = {
  body: { 
    color: '#fff', 
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    minHeight: '100vh'
  },
  container: { 
    maxWidth: '450px', 
    margin: '0 auto', 
    // Учет Safe Areas для челок и шторок
    padding: 'calc(20px + env(safe-area-inset-top)) 20px calc(40px + env(safe-area-inset-bottom)) 20px' 
  },
  header: { textAlign: 'center', marginBottom: '40px' },
  logoBox: { display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '15px' },
  logoCircle: { 
    width: '35px', height: '35px', borderRadius: '10px', 
    border: '2px solid #CCFF00', color: '#CCFF00', 
    display: 'grid', placeItems: 'center', fontWeight: '900', fontSize: '18px'
  },
  brandName: { fontSize: '28px', fontWeight: '900', letterSpacing: '4px', margin: 0 },
  statusLine: { fontSize: '10px', opacity: 0.3, letterSpacing: '2px', marginTop: '5px' },
  tag: { color: '#CCFF00', fontSize: '9px', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '10px' },
  cardTitle: { fontSize: '22px', fontWeight: '800', margin: '0 0 12px 0' },
  cardText: { fontSize: '14px', opacity: 0.6, lineHeight: '1.6', margin: 0 },
  divider: { height: '1px', background: 'rgba(255,255,255,0.05)', margin: '20px 0' },
  footer: { 
    position: 'fixed', bottom: 'env(safe-area-inset-bottom)', left: 0, right: 0,
    textAlign: 'center', fontSize: '9px', opacity: 0.2, padding: '20px', letterSpacing: '1px'
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
