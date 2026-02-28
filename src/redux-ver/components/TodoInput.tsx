import React, { useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { addTodo } from '../store/todoSlice';

export const TodoInput: React.FC = () => {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Redux задача..."
        style={{ padding: '8px', marginRight: '10px', width: '200px' }}
      />
      <button type="submit">Добавить</button>
    </form>
  );
};