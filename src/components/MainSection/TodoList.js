import React from 'react'
import todosData from './todosData'
import TodoItem from './TodoItem'

import styles from './styles.css'

const TodoList = () => {
  return (
    <ul className={styles['todo-list']}>
      <li>
        {todosData.map((item) => (
          <TodoItem key={item.id} text={item.text} />
        ))}
      </li>
    </ul>
  )
}

export default TodoList
