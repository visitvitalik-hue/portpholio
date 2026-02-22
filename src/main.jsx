import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const tg = window.Telegram.WebApp;

// Объекты из твоего HTML-файла
const APPS = [
    { id: 1, name: 'PixelGame', icon: '🎮', price: '500 XTR', tech: ['Phaser', 'Node.js'] },
    { id: 2, name: 'CryptoTracker', icon: '💹', price: '800 XTR', tech: ['React', 'WebSocket'] },
    { id: 3, name: 'AI_STRATEGIST', icon: '🤖', price: '1500 XTR', tech: ['OpenAI', 'RAG'] }
];

function App() {
    useEffect(() => {
        tg.ready(); // Сообщаем Telegram о готовности [cite: 441, 672]
        tg.expand(); // Разворачиваем на весь экран [cite: 692]
    }, []);

    const handleOrder = (app) => {
        // Логика заказа через Telegram Stars [cite: 452, 695]
        tg.sendData(JSON.stringify({ action: "order", item: app.name }));
    };

    return (
        <div className="container">
            <header>
                <div className="logo">◆ AI_DRAGON_LAB</div>
                <p className="subtitle">> СЕКТОР: 88 | ПОРТФОЛИО_2026</p>
            </header>

            <div className="bento-grid">
                {APPS.map(app => (
                    <div key={app.id} className="app-card">
                        <div className="screenshot-placeholder">{app.icon}</div>
                        <div className="app-info">
                            <h3>{app.name}</h3>
                            <div className="tech-tags">
                                {app.tech.map(t => <span key={t} className="tag">{t}</span>)}
                            </div>
                            <div className="price-row">
                                <span className="xtr">{app.price}</span>
                                <div className="actions">
                                    <button className="btn-demo" onClick={() => window.open('https://github.com')}>ДЕМО</button>
                                    <button className="btn-order" onClick={() => handleOrder(app)}>ЗАКАЗАТЬ</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
