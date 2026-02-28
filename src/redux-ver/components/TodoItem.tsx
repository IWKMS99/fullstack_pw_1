import React from 'react';
import type { ITodo } from '../../types/todo';
import { useAppDispatch } from '../store/hooks';
import { toggleTodo, removeTodo } from '../store/todoSlice';

interface TodoItemProps {
  todo: ITodo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useAppDispatch();

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: '8px', 
      borderBottom: '1px solid #444' 
    }}>
      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
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
        onClick={() => dispatch(removeTodo(todo.id))}
        style={{ backgroundColor: '#ff4444', fontSize: '0.8em' }}
      >
        Удалить
      </button>
    </div>
  );
};