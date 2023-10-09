export function TodoItem({ completed, id, title, toggleTodo, deleteTodos }) {
    return (
        <li>
            <label>
                <input type="checkbox" checked={completed} 
                    onChange={e => toggleTodo(id, e.target.checked)}
                />
                {title}
            </label>
            <button 
                onClick={() => deleteTodos(id)} 
                className="btn btn-danger">Delete</button>
            {/* we want () => so we can call it as a function rather than just getting the result */}
        </li>
    )
}