import React from 'react';
import './App.css';
import MainContent from './components/MainContent';
import TodoItem from './components/TodoItem';
import Footer from './components/Footer';
import Header from './components/Header';
import ContactCard from './components/ContactCard';
// import './assets/cat_opt.png'

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
            name="Mr Whiskers"
            imageSrc="../assets/cat_opt.png" alt="cat"
            phone="(44) 456-1234"
            email="m.whiskers@yahoo.com"
          />
          <ContactCard 
            name="Iamsky"
            imgUrl="./assets/cat_opt.pn" alt="cat"
            phone="Phone: (44) 456-1234"
            email="iamsky@example.com"
          />
          <ContactCard 
            name="Fluffykins"
            imgUrl="./assets/cat_opt.pn" alt="cat"
            phone="(44) 356-1534"
            email="a.Fluffykins@gmail.com"
          />
          <ContactCard 
            name="Moussky"
            imgUrl="./assets/cat_opt.pn" alt="cat"
            phone="(44) 206-1204"
            email="moussky@hotmail.com"
          />
      <div className="contact-card">
        <img src="./assets/cat_opt.pn" alt="cat"></img>
        <h3>Iamsky</h3>
        <p>Phone: (44) 456-1234</p>
        <p>Email: iamsky@example.com</p>
      </div>

      <div className="contact-card">
        <img src="./assets/cat_opt.pn" alt="cat"></img>
        <h3>Fluffykins</h3>
        <p>Phone: (44) 356-1534</p>
        <p>Email: a.Fluffykins@gmail.com</p>
      </div>

      <div className="contact-card">
        <img src="./assets/cat_opt.pn" alt="cat"></img>
        <h3>Moussky</h3>
        <p>Phone: (44) 206-1204</p>
        <p>Email: moussky@hotmail.com</p>
      </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
