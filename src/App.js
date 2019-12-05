import React from 'react';
import './App.css';
// import Myinfo from './components/MyInfo';
// import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
          <Header />
      <main className="App-content">    
        <MainContent />
        <TodoList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
