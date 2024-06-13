import React from 'react'
import { useState } from 'react';
function Counter() {
    
    const [todos, setTodos] = useState(['todo 1', 'todo 2']);

return (
  <ul>
        {todos.map((todo, idx) => <li key = {idx}> {todo} </li>)}
        <button onClick={ () => setTodos([...todos, 'another one'])}> Click </button>
  </ul> 
    
  )
}

export default Counter