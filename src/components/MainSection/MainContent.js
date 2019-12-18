import React from 'react';
import Greetings from './Greetings'
import TodoItem from './TodoItem'
import ContactCard from './ContactCard';
import Cat from '../../assets/Cat.png'
import FunnyCat from '../../assets/funnyCat.png'
import LookingUp from '../../assets/LookingUp.png'
import vSchool from './vSchoolProducts'
import Products from './Products'

function MainContent() {
  const vProducts = vSchool.map(item => <Products key={item.id} name={item.name} price={item.price} description={item.description} />)
  return(
    <main>
      <Greetings />
      <h2>Welcome to my Portfolio page</h2>
      <p>It is a simple web app I have created using React</p>
      <h2>Todo List</h2>
        <div className="todo-list">
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </div>
        <div>
          {vProducts}
        </div>
        <div className="contacts">
          <h2>Cats Contact LIst</h2>
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
  )
}

export default MainContent;