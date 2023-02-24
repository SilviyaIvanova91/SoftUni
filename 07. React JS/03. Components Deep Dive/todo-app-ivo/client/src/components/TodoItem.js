export const TodoItem = (props) => {
    let className = 'todo';

    if (props.isCompleted) {
        className += ' is-completed';
    }

    return (
        <tr className={className}>
            <td>{props.title}</td>
            <td>{props.isCompleted ? 'Complete' : 'Incomplete'}</td>
            <td className="todo-action">
                <button onClick={() => props.onClick(props)}>Change status</button>
            </td>
        </tr >
    );
}