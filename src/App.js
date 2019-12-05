import React from 'react';
import './App.css';
import MainContent from './components/MainContent';
import TodoItem from './components/TodoItem';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
          <Header />
      <main className="App-content">
        <MainContent />
        <div className="todo-list">
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
