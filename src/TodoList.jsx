import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
    return <ul id="list">
        {todos.map(todo =>
            <TodoItem
                key={todo.id}
                {...todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />)}
    </ul>
}