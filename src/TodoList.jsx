import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodos }) {
    return (
        <ul className="list">
        {todos.length === 0 && "No Todos"}
        {/* Above is "short circuiting" */}
        {todos.map(todo => {
            return (
              <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodos={deleteTodos} />
            )
        })}
      </ul>
    )
}