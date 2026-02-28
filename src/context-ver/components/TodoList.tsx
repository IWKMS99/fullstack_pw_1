import React from 'react';
import { useTodoContext } from '../TodoContext';
import { TodoItem } from './TodoItem';

export const TodoList: React.FC = () => {
  const { todos } = useTodoContext();

  if (todos.length === 0) {
    return <p style={{ color: '#888' }}>Список задач пуст...</p>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};