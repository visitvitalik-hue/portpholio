// Обновленный блок Showcase Аудитов для нашего приложения
const audits = [
  {
    target: "@StepAndStyle_Bot",
    issue: "Конфликт навигации (UX)",
    lost: "25% чеков",
    fix: "Внедрение WebApp.BackButton и Haptic SDK."
  },
  {
    target: "Инфобиз: Марафон Похудения",
    issue: "Bundle Size 4.2MB (Скорость)",
    lost: "50% юзеров на Android",
    fix: "Оптимизация ассетов и ленивая загрузка."
  }
];

// Вставляем этот контент во вторую вкладку
{activeTab === 'audit' && (
  <div style={styles.grid}>
    <div style={styles.sectionHeader}>ВЫПОЛНЕННЫЕ КЕЙСЫ АУДИТА</div>
    {audits.map((a, i) => (
      <div key={i} className="card-pro card-full">
        <div style={{color: '#ff4b4b', fontSize: '10px', fontWeight: 'bold'}}>КЕЙС: {a.target}</div>
        <h3 style={styles.cardTitle}>{a.issue}</h3>
        <p style={styles.cardText}>
          <span style={{color: '#ff4b4b'}}>● Убыток: {a.lost}</span><br/>
          <span style={{color: '#007AFF'}}>● Решение: {a.fix}</span>
        </p>
      </div>
    ))}
    <button style={styles.auditBtn} onClick={() => handleAction('ORDER_FULL_AUDIT')}>
      ЗАКАЗАТЬ МОЙ АУДИТ
    </button>
  </div>
)}
