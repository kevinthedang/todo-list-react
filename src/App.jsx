import { useState } from "react"
import "./styles.css"

export default function App() {
  const [newItem, setNewItem] = useState("")
  // setNewItem("stuff") <-- infinite loop of rerender
  const [todos, setTodos] = useState([])

  
  function handleSubmit(e) {
    e.preventDefault() // prevent page from refreshing / rerendering

    setTodos((currentTodos) => {
      return [...currentTodos, 
        { 
          id: crypto.randomUUID(), 
          title: newItem, 
          completed: false 
        }
      ]
    })  
  }

  return (
    // fragment wrapper
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input 
            value={newItem} 
            onChange={e => setNewItem(e.target.value)} 
            type="text" 
            id="item" />
          {/* onChange was cahnged for every key, value is the input value set */}
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.map(todo => {
            return (
              <li>
                <label>
                  <input type="checkbox" checked={todo.completed} />
                  {todo.title}
                </label>
                <button className="btn btn-danger">Delete</button>
              </li>
            )
            
        })}
      </ul>
    </>
  )
}