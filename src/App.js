import React from 'react';
import './App.css';
import Myinfo from './components/MyInfo';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Myinfo />
        <navbar className="App-navbar">
          <NavBar />
        </navbar>  
      </header>
      <main className="App-content">
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}

export default App;
