import { useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

export default function App() {
  // setNewItem("stuff") <-- infinite loop of rerender
  const [todos, setTodos] = useState([])

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [...currentTodos, 
        { 
          id: crypto.randomUUID(), 
          title, 
          completed: false 
        }
      ]
    })  
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
      <NewTodoForm onSubmit={addTodo} />
      {/* Passing of a function via a property above */}
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodos={deleteTodos} />
    </>
  )
}