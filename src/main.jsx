const PROJECTS = [
  {
    title: "HELLOWEEN_AI",
    desc: "Генеративная атмосфера и ИИ-персонажи.",
    bg: "https://твоя-ссылка/helloween_bg.jpg",
    action: "СМОТРЕТЬ КЕЙС"
  },
  {
    title: "CYBER_DRAGON",
    desc: "Лабораторные интерфейсы будущего.",
    bg: "https://твоя-ссылка/dragon_bg.jpg",
    action: "ТЕСТ_ДРАЙВ"
  }
];

function App() {
  return (
    <div className="scroll-wrapper" style={{scrollSnapType: 'y mandatory', overflowY: 'scroll', height: '100vh'}}>
      {PROJECTS.map((p, i) => (
        <section key={i} className="scene-container" style={{backgroundImage: `url(${p.bg})`}}>
          <div className="overlay-content">
            <h1 className="scene-title">{p.title}</h1>
            <p style={{opacity: 0.8, marginBottom: '20px'}}>{p.desc}</p>
            <button className="cta-button" onClick={() => tg.sendData(`order_${p.title}`)}>
              {p.action}
            </button>
          </div>
        </section>
      ))}
    </div>
  );
}
