import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready(); // Сообщаем Telegram, что приложение загрузилось [cite: 9]
    tg.expand(); // Разворачиваем на весь экран [cite: 222]
  }, []);

  const user = tg.initDataUnsafe?.user;

  // Твоя динамическая витрина объектов
  const products = [
    { id: 1, name: "[OBJECT: AI_RETOUCHER]", price: "500 XTR", desc: "ИИ-ретушь для фотографов" },
    { id: 2, name: "[OBJECT: PROMPT_GENERATOR]", price: "300 XTR", desc: "Генератор промптов для Pika" }
  ];

  return (
    <div className="app-container">
      <header>
        <h1>AI DRAGON LAB</h1>
        <p>СЕКТОР: 88 | ОПЕРАТОР: {user?.first_name || "Unknown"}</p>
      </header>
      
      <div className="grid">
        {products.map(item => (
          <div key={item.id} className="card">
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <button onClick={() => tg.sendData(`Order: ${item.name}`)}>
              ТЕСТ / {item.price}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
