import React, { Component } from 'react';
import todosData from './todosData'
import ContactCard from './ContactCard'
import TodoList from './TodoList'

import productsData from './vSchoolProducts'
import contactsData from './contactsData'
import Products from './Products'
import HandlingEvents from './HandlingEvents';



class MainContent extends Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
  }

  handleTodos(ev) {

  }
  render() {
  const productsComponent = productsData.map(item => <Products key={item.id} product={item}/>)
  const contactsComponent = contactsData.map(item => <ContactCard key={item.id} contact={item}/>)
    return(
      <main>
        <h2>Todo List</h2>
          <div className="todo-list">
            <TodoList />
          </div>
          <div>
            {productsComponent}
          </div>
          <div className="contacts">
            <h2>Cats Contact LIst</h2>
    
            {contactsComponent}

            <HandlingEvents />

          </div>
      </main>
    )
  }
}

export default MainContent;