import React, { useState } from "react";
import ReactDom from "react-dom";

function App() {
  const [task, settask] =   useState("")
  const [todos, settodos] = useState([
    "akash",
    "kamal"
])
  function createtodo() {
settodos(oldtodos=> {
  return [... oldtodos,task] 
})

  } 

  return <div>
    <h1>This is todoApp</h1>
    <input type="text" name="{task}" onChange={e=>{
      settask(e.target.value)
    }} />
    <button onClick = {createtodo}>create todo</button>

     <ul>
       {todos.map(todo =>{
         return <li>{todo}</li>
       })}
     </ul>
  </div>
}


export default App;