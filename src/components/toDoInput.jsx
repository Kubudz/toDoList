import React, { useState } from 'react';

// Komponent do dodawania nowego zadania
const TodoInput = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    addTodo(inputValue);
    setInputValue(''); // Resetuje wartość wejściową
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Dodaj nowe zadanie" 
      />
      <button className='be' onClick={handleAddTodo}>Dodaj</button>
    </div>
  );
};

export default TodoInput;