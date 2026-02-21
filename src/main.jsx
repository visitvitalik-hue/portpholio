import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const tg = window.Telegram.WebApp;

const SCENES = [
  {
    id: 1,
    title: "MYSTICAL_VIBE",
    desc: "Атмосферный AI-агент с глубоким погружением в контент. Идеально для сторителлинга.",
    img: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=1000"
  },
  {
    id: 2,
    title: "CYBER_DRAGON_LAB",
    desc: "Лаборатория будущего. Mini Apps с биометрией и Stars-платежами.",
    img: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=1000"
  }
];

function App() {
  useEffect(() => {
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#000000');
  }, []);

  return (
    <div className="scroll-container">
      {SCENES.map(scene => (
        <section key={scene.id} className="scene" style={{backgroundImage: `url(${scene.img})`}}>
          <div className="overlay">
            <div style={{fontSize: '10px', opacity: 0.6, marginBottom: '5px'}}>OBJECT_0{scene.id}</div>
            <h1>{scene.title}</h1>
            <p>{scene.desc}</p>
            <button className="cta-button" onClick={() => tg.sendData("order_" + scene.id)}>
              УЗНАТЬ СТОИМОСТЬ
            </button>
          </div>
        </section>
      ))}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
