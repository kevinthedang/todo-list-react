export function TodoList({ todos }) {
    return (
        <ul className="list">
        {todos.length === 0 && "No Todos"}
        {/* Above is "short circuiting" */}
        {todos.map(todo => {
            return (
              <li key={todo.id}>
                <label>
                  <input type="checkbox" checked={todo.completed} 
                    // onChange={e => toggleTodo(todo.id, e.target.checked)}
                  />
                  {todo.title}
                </label>
                <button 
                    // onClick={() => deleteTodos(todo.id)} 
                    className="btn btn-danger">Delete</button>
                {/* we want () => so we can call it as a function rather than just getting the result */}
              </li>
            )
        })}
      </ul>
    )
}