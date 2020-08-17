import React, {Component} from 'react'
import '../App.css'
import { BrowserRouter, Link } from 'react-router-dom'
// import Route from 'react-router-dom/Route'
// import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Greetings from './MainSection/Greetings'
import TodoList from './MainSection/TodoList'

class NavBar extends Component {
  render() {
    return(
      <BrowserRouter>
          <div className="header-container">
            <h1>Portfolio</h1>
          <ul id="nav">
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/" >Home</Link></li>
          </ul>
        </div>
        <div>
            <Route path="/" exact strict render={
              () => {
                return(
                  <div>
                    <Greetings />
                    <h2>Welcome to my Portfolio page</h2>
                    <p>It is a simple web app I have created using React</p>
                  </div>
                )
              }
            }/>
          </div>
          <div>
            <Route path="/about" exact strict render={
              () => {
                return(
                  <TodoList />
                )
              }
            }/>
          </div>
      </BrowserRouter>
    )
  }
}

export default NavBar;