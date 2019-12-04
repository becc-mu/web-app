import React from 'react';
import './App.css';
import MyInfo from './components/MyInfo';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainContent />
        <MyInfo />
      </header>
      <Footer />
    </div>
  );
}

export default App;
