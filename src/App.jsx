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

    setNewItem("")
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          // todo.completed = completed <-- will not work since state is immutable!
          return { ...todo, completed } // do not mutate state, just create a new object
        }

        return todo
      })
    })
  }

  function deleteTodos(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
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
        {todos.length === 0 && "No Todos"}
        {/* Above is "short circuiting" */}
        {todos.map(todo => {
            return (
              <li key={todo.id}>
                <label>
                  <input type="checkbox" checked={todo.completed} 
                  onChange={e => toggleTodo(todo.id, e.target.checked)}/>
                  {todo.title}
                </label>
                <button onClick={() => deleteTodos(todo.id)} className="btn btn-danger">Delete</button>
                {/* we want () => so we can call it as a function rather than just getting the result */}
              </li>
            )
        })}
      </ul>
    </>
  )
}