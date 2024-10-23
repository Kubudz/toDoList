import React from 'react';

// Komponent do wyświetlania pojedynczego zadania
const TodoItem = ({ todo, index, toggleTodo, removeTodo }) => {
  return (
    <li className="item" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.text}
      <button onClick={() => toggleTodo(index)} className='done'>zrobione</button>
      <button onClick={() => removeTodo(index)} className='usun'>Usuń</button>
    </li>
  );
};

export default TodoItem;