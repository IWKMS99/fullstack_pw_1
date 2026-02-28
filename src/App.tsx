import './App.css';
import { ContextApp } from './context-ver/ContextApp';
import { ReduxApp } from './redux-ver/ReduxApp';
import { AnalysisSection } from './components/AnalysisSection';

function App() {
  return (
    <div className="app-container">
      <h1>Практическая работа №1</h1>
      <p style={{ marginBottom: '30px', color: '#888' }}>
        Сравнение Context API и Redux Toolkit на примере Todo List
      </p>
      
      <div className="versions-container" style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <ContextApp />
        <ReduxApp />
      </div>

      <AnalysisSection />
      
    </div>
  );
}

export default App;