import React from 'react';
import './App.css';
import MainContent from './components/MainContent';
import TodoItem from './components/TodoItem';
import Footer from './components/Footer';
import Header from './components/Header';
import ContactCard from './components/ContactCard';
import Cat from './assets/Cat.png'
import FunnyCat from './assets/funnyCat.png'
import LookingUp from './assets/LookingUp.png'


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
        <div className="contacts">
          <ContactCard
            contact={{name: "Mr Whiskers", imgUrl: Cat, phone: "(44) 456-1234", email: "m.whiskers@yahoo.com"}}
          />
          <ContactCard
            contact={{name: "Iamsky", imgUrl: FunnyCat, phone: "(44) 456-1234", email: "iamsky@example.com"}}
          />
          <ContactCard
            contact={{name: "Fluffykins", imgUrl: LookingUp, phone: "(44) 356-1534", email: "a.Fluffykins@gmail.com"}}
          />
          <ContactCard
            contact={{name: "Moussky", imgUrl: Cat, phone: "(44) 206-1204", email: "moussky@hotmail.com"}}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
