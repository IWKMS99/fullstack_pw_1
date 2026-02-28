import React from 'react';
import './AnalysisSection.css'; // Сейчас создадим стили

export const AnalysisSection: React.FC = () => {
  return (
    <div className="analysis-container">
      <details>
        <summary>Открыть сравнительный анализ</summary>
        
        <div className="analysis-content">
          <h3>1. Сравнение архитектур</h3>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Критерий</th>
                <th>Context API</th>
                <th>Redux Toolkit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Сложность</strong></td>
                <td>Низкая. Встроен в React.</td>
                <td>Средняя. Нужно настраивать Store и Slices.</td>
              </tr>
              <tr>
                <td><strong>Отладка</strong></td>
                <td>Сложно. Не видно истории изменений.</td>
                <td>Идеально. <strong>Redux DevTools</strong>.</td>
              </tr>
              <tr>
                <td><strong>Производительность</strong></td>
                <td>Лишние ререндеры при изменении контекста.</td>
                <td>Оптимизировано (селекторы).</td>
              </tr>
              <tr>
                <td><strong>Масштабируемость</strong></td>
                <td>Низкая. "Ад провайдеров" в корне.</td>
                <td>Высокая. Модульная структура (Slices).</td>
              </tr>
            </tbody>
          </table>

          <div className="conclusions">
            <div className="card context-card">
              <h4>Когда выбрать Context?</h4>
              <ul>
                <li>Маленькие приложения (Todo, Лендинг).</li>
                <li>Редкие изменения данных (Тема, Язык, User Auth).</li>
                <li>Нужно просто избежать Prop Drilling.</li>
              </ul>
            </div>

            <div className="card redux-card">
              <h4>Когда выбрать Redux?</h4>
              <ul>
                <li>Сложная логика и частые обновления.</li>
                <li>Большая команда разработчиков.</li>
                <li>Нужна предсказуемость и логирование.</li>
                <li>Кэширование данных с сервера (RTK Query).</li>
              </ul>
            </div>
          </div>

          <div className="faq-section">
            <h3>Ключевые понятия</h3>
            <p>
              <strong>Prop Drilling</strong> — проблема передачи данных через кучу промежуточных компонентов. 
              Решается и Context, и Redux.
            </p>
            <p>
              <strong>Принципы Redux</strong>: 1) Единственный источник правды (Store), 
              2) State только для чтения, 3) Изменения только через чистые функции (Reducers).
            </p>
          </div>
        </div>
      </details>
    </div>
  );
};