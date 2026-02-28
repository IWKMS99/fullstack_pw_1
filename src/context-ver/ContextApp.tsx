import React from 'react';
import { TodoProvider } from './TodoContext';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

export const ContextApp: React.FC = () => {
  return (
    <TodoProvider>
      <div style={{ border: '1px solid #646cff', padding: '20px', borderRadius: '8px', minWidth: '300px' }}>
        <h3>Версия: Context API</h3>
        <TodoInput />
        <TodoList />
      </div>
    </TodoProvider>
  );
};