import React from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';

const App: React.FC = () => {
  return (
    <div className="App">
      <header>TODO</header>
      <TodoList />
    </div>
  );
}

export default App;
