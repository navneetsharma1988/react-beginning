export const TodoItem = ({ id, name, completed, toggleTodo, deleteTodo }) => {
    return <li className="list-item">
        <label htmlFor="" className="list-item-label">
            <input
                type="checkbox"
                checked={completed}
                onChange={(e) => toggleTodo(id, e)}
                data-list-item-checbox
            />
            <span data-list-item-text>{name}</span>
        </label>
        <button data-button-delete onClick={() => deleteTodo(id)}>Delete</button>
  </li>
};
