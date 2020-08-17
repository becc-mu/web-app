import React, { useState } from 'react';

const TodoItem = (props) => {
  // console.log(props)
  const [checked, setChecked] = useState(false)
  const [completed, setCompleted] = useState(false)
  return(
    <div className="todo-item">
      <input
        type="checkbox"
        checked={checked}
        onChange={ev => setChecked(!checked)}
        onClick={ ev => setCompleted(!completed)}
        // onChange={() => props.checked ? console.log(`${props.completed}`)  : false }
    />
        {props.text}
    </div>
  )
}

export default TodoItem;