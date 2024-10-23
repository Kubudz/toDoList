import React, { useState, useEffect } from 'react';
import TodoList from './components/toDoList';
import TodoInput from './components/toDoInput';
import FilterButtons from './components/FilterButtons';

// Definicja komponentu App
const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [btnType, setBtnType] = useState("all");

  


  // Ładowanie zadań z localStorage
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Zapisywanie zadań do localStorage
  useEffect(() => {
    if (todos.length > 0) localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Funkcja do dodawania nowego zadania
  const addTodo = (text) => {
    if (text.trim() === '') {
      alert('Nie możesz dodać pustego zadania!');
      return;
    }
    setTodos([...todos, { text, completed: false }]);
  };

  // Funkcja do przełączania stanu zadania
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  // Funkcja do usuwania zadania
  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };
  const filtered = todos.filter(el => {
    if (btnType === "not") return !el.completed;
    if (btnType === "done") return el.completed;
    return true;
  });
  return (
    <div id='toDoContainer'>
      <FilterButtons setBtnType={setBtnType} />
      <TodoInput addTodo={addTodo} />
      <TodoList todos={filtered} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
};

export default App;