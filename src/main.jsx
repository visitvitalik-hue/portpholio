import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
// Подключаем официальный UI Kit Telegram
import { 
  AppRoot, List, Section, Cell, Tabbar, 
  Headline, Banner, Button, Placeholder, 
  Avatar, LargeTitle, Spinner 
} from '@telegram-apps/telegram-ui';
import '@telegram-apps/telegram-ui/dist/styles.css';

const tg = window.Telegram.WebApp;

const App = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('shop');

  useEffect(() => {
    tg.ready();
    tg.expand();
    // Активируем системные кнопки (Back и Main)
    tg.BackButton.show();
    tg.MainButton.setParams({
      text: 'ОФОРМИТЬ ЗАКАЗ',
      color: '#7DF9FF',
      text_color: '#000000'
    });

    // Имитация Skeleton Loading (как в твоем совете по UX)
    setTimeout(() => setLoading(false), 1500);
  }, []);

  const handleProductClick = (name) => {
    tg.HapticFeedback.impactOccurred('medium');
    tg.MainButton.show(); // Показываем главную кнопку при выборе товара
  };

  if (loading) {
    return (
      <AppRoot>
        <Placeholder header="Загрузка лаборатории..." description="Сектор 88 готовит интерфейс">
          <Spinner size="large" />
        </Placeholder>
      </AppRoot>
    );
  }

  return (
    <AppRoot>
      <div style={styles.safeArea}>
        
        {/* 1. STORIES BLOCK (Психология возвращаемости) */}
        <Section style={{ padding: '10px 0' }}>
          <div style={styles.storiesScroll}>
            {['Новинки', 'Отзывы', 'Кейсы', 'Stars'].map((s, i) => (
              <div key={i} style={styles.storyCircle}>
                <div style={styles.storyRing} />
                <span style={styles.storyText}>{s}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* 2. HERO BANNER (Манифест) */}
        <Section>
          <Banner
            before={<Avatar size={48} src="https://via.placeholder.com/100" />}
            header="AI_DRAGON_LAB"
            subheader="Мы превращаем ваш бизнес в цифровой актив за 72 часа."
            type="section"
          >
            <Button size="s" mode="filled">Узнать больше</Button>
          </Banner>
        </Section>

        {/* 3. КОНТЕНТ ПО ВКЛАДКАМ (Tab Bar Logic) */}
        {activeTab === 'shop' && (
          <List>
            <Section header="ВИТРИНА ОБЪЕКТОВ">
              <Cell 
                before={<span style={{fontSize: '24px'}}>🏗️</span>}
                subtitle="Для застройщиков и девелоперов"
                after={<Button size="s" mode="beveled">500 XTR</Button>}
                onClick={() => handleProductClick('VILLA_OS')}
              >
                VILLA_OS_2026
              </Cell>
              <Cell 
                before={<span style={{fontSize: '24px'}}>💄</span>}
                subtitle="Для Beauty-индустрии"
                after={<Button size="s" mode="beveled">300 XTR</Button>}
                onClick={() => handleProductClick('GLOW_LUMINAL')}
              >
                GLOW_LUMINAL
              </Cell>
            </Section>
          </List>
        )}

        {activeTab === 'tasks' && (
          <List>
             <Section header="МИССИИ И ЛОЯЛЬНОСТЬ">
               <Cell before="⭐" subtitle="Получите +100 баллов">Подписка на канал</Cell>
               <Cell before="👥" subtitle="Шанс на выигрыш +1">Пригласить друга</Cell>
             </Section>
          </List>
        )}

        {/* 4. NATIVE TAB BAR (Нижняя навигация) */}
        <Tabbar>
          <Tabbar.Item 
            active={activeTab === 'shop'} 
            onClick={() => setActiveTab('shop')}
            text="Витрина"
          >
            🛒
          </Tabbar.Item>
          <Tabbar.Item 
            active={activeTab === 'tasks'} 
            onClick={() => setActiveTab('tasks')}
            text="Миссии"
          >
            💎
          </Tabbar.Item>
          <Tabbar.Item text="Поиск">🔍</Tabbar.Item>
          <Tabbar.Item text="Профиль">👤</Tabbar.Item>
        </Tabbar>

      </div>
    </AppRoot>
  );
};

const styles = {
  safeArea: {
    paddingBottom: 'calc(80px + env(safe-area-inset-bottom))',
    paddingTop: 'env(safe-area-inset-top)',
  },
  storiesScroll: {
    display: 'flex',
    gap: '15px',
    padding: '0 16px',
    overflowX: 'auto',
    scrollbarWidth: 'none'
  },
  storyCircle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px'
  },
  storyRing: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'linear-gradient(45deg, #7DF9FF, #FF2BD6)',
    padding: '2px',
    border: '2px solid var(--tg-theme-bg-color)'
  },
  storyText: { fontSize: '10px', fontWeight: '500' }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
