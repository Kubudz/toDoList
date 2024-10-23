import React from 'react';
import TodoItem from './toDoItem';

// Komponent do wyświetlania listy zadań
const TodoList = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <ol>
      {todos.map((todo, index) => (
        <TodoItem 
          key={index} 
          todo={todo} 
          index={index} 
          toggleTodo={toggleTodo} 
          removeTodo={removeTodo} 
        />
      ))}
    </ol>
  );
};

export default TodoList;