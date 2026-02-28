import React, { useState } from 'react';
import { useTodoContext } from '../TodoContext';

export const TodoInput: React.FC = () => {
  const [text, setText] = useState('');
  const { addTodo } = useTodoContext();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Что нужно сделать?"
        style={{ padding: '8px', marginRight: '10px', width: '200px' }}
      />
      <button type="submit">Добавить</button>
    </form>
  );
};