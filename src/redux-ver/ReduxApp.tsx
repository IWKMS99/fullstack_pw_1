import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

export const ReduxApp: React.FC = () => {
  return (
    <Provider store={store}>
      <div style={{ border: '1px solid #ff4444', padding: '20px', borderRadius: '8px', minWidth: '300px' }}>
        <h3>Версия: Redux Toolkit</h3>
        <TodoInput />
        <TodoList />
      </div>
    </Provider>
  );
};