import React from 'react';
import type { ITodo } from '../../types/todo';
import { useTodoContext } from '../TodoContext';

interface TodoItemProps {
  todo: ITodo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { toggleTodo, removeTodo } = useTodoContext();

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      padding: '8px',
      borderBottom: '1px solid #444',
      marginBottom: '8px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          style={{ cursor: 'pointer' }}
        />
        <span style={{ 
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? '#888' : 'inherit'
        }}>
          {todo.title}
        </span>
      </div>
      <button 
        onClick={() => removeTodo(todo.id)}
        style={{ backgroundColor: '#ff4444', fontSize: '0.8em', padding: '4px 8px' }}
      >
        Удалить
      </button>
    </div>
  );
};