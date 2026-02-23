import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const tg = window.Telegram.WebApp;

const App = () => {
  const [activeTab, setActiveTab] = useState('hub');

  useEffect(() => {
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#000000');
    // Активируем нативную навигацию, чтобы не плодить лишние кнопки
    tg.BackButton.onClick(() => setActiveTab('hub'));
    if (activeTab !== 'hub') tg.BackButton.show();
    else tg.BackButton.hide();
  }, [activeTab]);

  const handleAction = (title) => {
    tg.HapticFeedback.impactOccurred('heavy');
    tg.showConfirm(`Запустить протокол: ${title}?`, (ok) => {
      if (ok) tg.sendData(JSON.stringify({ service: title }));
    });
  };

  return (
    <div style={styles.body}>
      <style>{`
        @keyframes ticker { to { transform: translateX(-50%); } }
        .node-logo { width: 60px; height: 60px; margin: 0 auto; background: rgba(0, 122, 255, 0.1); border-radius: 50%; border: 1px solid #007AFF; display: grid; place-items: center; }
        .grid-container { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 20px; }
        .card-pro { background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.07); border-radius: 16px; padding: 16px; transition: 0.2s; position: relative; overflow: hidden; }
        .card-pro:active { background: rgba(255, 255, 255, 0.08); transform: scale(0.97); }
        .card-full { grid-column: span 2; }
        .status-tag { position: absolute; top: 8px; right: 8px; font-size: 8px; background: #007AFF; padding: 2px 6px; border-radius: 4px; font-weight: 800; }
      `}</style>

      <div style={styles.container}>
        {/* HEADER: Брендинг без воды */}
        <header style={styles.header}>
          <div className="node-logo">⚙️</div>
          <h1 style={styles.h1}>STARTUP ENGINE</h1>
          <p style={styles.p}>Аудит • Разработка • SEO • Масштабирование</p>
        </header>

        {/* ТАБЫ: Навигация по разделам */}
        <div style={styles.tabs}>
          <div style={activeTab === 'hub' ? styles.tabActive : styles.tab} onClick={() => setActiveTab('hub')}>КАТАЛОГ РЕШЕНИЙ</div>
          <div style={activeTab === 'audit' ? styles.tabActive : styles.tab} onClick={() => setActiveTab('audit')}>ЭКСПЕРТИЗА</div>
        </div>

        {activeTab === 'hub' ? (
          <div className="grid-container">
            {/* Секция 1: Товарка / E-com */}
            <div className="card-pro" onClick={() => handleAction('E-COM_FACTORY')}>
              <div style={styles.icon}>🛍️</div>
              <h3 style={styles.cardTitle}>E-COM FACTORY</h3>
              <p style={styles.cardText}>Витрина, корзина, оплата Stars. Конверсия +40% к обычному боту.</p>
            </div>

            {/* Секция 2: Услуги / Запись */}
            <div className="card-pro" onClick={() => handleAction('BOOKING_SYSTEM')}>
              <div style={styles.icon}>📅</div>
              <h3 style={styles.cardTitle}>BOOKING PRO</h3>
              <p style={styles.cardText}>Нативный календарь записи. Снижение нагрузки на админа в 3 раза.</p>
            </div>

            {/* Секция 3: Масштабирование (Full Span) */}
            <div className="card-pro card-full" onClick={() => handleAction('REFFERAL_SYSTEM')}>
              <div className="status-tag">BEST FOR GROWTH</div>
              <div style={styles.icon}>🚀</div>
              <h3 style={styles.cardTitle}>VIRAL ECOSYSTEM (REFFERAL 2.0)</h3>
              <p style={styles.cardText}>Связка Канал + Бот + Рефералка. Рост базы за счет текущих юзеров. Как у SOKOLOV (14k+ за месяц).</p>
            </div>
          </div>
        ) : (
          <div style={styles.grid}>
            {/* Раздел реального аудита */}
            <div className="card-pro card-full" onClick={() => handleAction('TECHNICAL_AUDIT')}>
              <h3 style={styles.cardTitle}>🔍 ТЕХНИЧЕСКИЙ АУДИТ</h3>
              <p style={styles.cardText}>Анализ Bundle Size, SEO-метатегов и отклика сервера. Мы скажем, почему ваш Mini App «тормозит».</p>
            </div>
            <div className="card-pro card-full" onClick={() => handleAction('UX_SEO_REPORT')}>
              <h3 style={styles.cardTitle}>📊 UX & SEO РЕПОРТ</h3>
              <p style={styles.cardText}>Анализ воронки внутри мессенджера. Проверка индексации Google/Яндекс.</p>
            </div>
          </div>
        )}

        {/* НИЖНЯЯ ПАНЕЛЬ С ТЕХ-ИНФОЙ */}
        <div style={styles.ticker}>
          <div style={styles.track}>
            <span>● 2026 COMPLIANT ● NO REDIRECTS ● NATIVE SDK 2.0 ● SEO OPTIMIZED ● </span>
            <span>● 2026 COMPLIANT ● NO REDIRECTS ● NATIVE SDK 2.0 ● SEO OPTIMIZED ● </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: { background: '#000', color: '#fff', minHeight: '100vh', fontFamily: '-apple-system, sans-serif' },
  container: { maxWidth: '500px', margin: '0 auto', padding: 'env(safe-area-inset-top) 16px 100px 16px' },
  header: { textAlign: 'center', marginBottom: '30px' },
  h1: { fontSize: '24px', fontWeight: '900', letterSpacing: '-1px', margin: '10px 0 5px 0' },
  p: { fontSize: '11px', opacity: 0.4, textTransform: 'uppercase', letterSpacing: '1px' },
  tabs: { display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '4px', marginBottom: '20px' },
  tab: { flex: 1, textAlign: 'center', padding: '10px', fontSize: '12px', opacity: 0.5 },
  tabActive: { flex: 1, textAlign: 'center', padding: '10px', fontSize: '12px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', fontWeight: 'bold' },
  icon: { fontSize: '28px', marginBottom: '10px' },
  cardTitle: { fontSize: '15px', fontWeight: '800', margin: '0 0 6px 0' },
  cardText: { fontSize: '12px', lineHeight: '1.4', opacity: 0.5, margin: 0 },
  ticker: { position: 'fixed', bottom: 0, left: 0, right: 0, background: '#000', borderTop: '1px solid #111', padding: '12px 0' },
  track: { display: 'flex', gap: '40px', whiteSpace: 'nowrap', animation: 'ticker 15s linear infinite', fontSize: '9px', opacity: 0.2 },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
