import React from 'react';
import { useAppSelector } from '../store/hooks';
import { TodoItem } from './TodoItem';

export const TodoList: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.items);

  if (todos.length === 0) {
    return <p style={{ color: '#888' }}>В Redux пусто...</p>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};