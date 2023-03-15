import ListGroup from "react-bootstrap/ListGroup";
import { TodoItem } from "./TodoItem";
import Button from "react-bootstrap/Button";

export const TodoList = ({ todos, onTodoAddClick }) => {
  return (
    <div style={{ width: "30%", margin: "10px auto" }}>
      <h1>Todo List</h1>
      <ListGroup style={{ marginBottom: "10px" }}>
        {todos.map((x) => (
          <TodoItem key={x._id} {...x} />
        ))}
      </ListGroup>

      <Button variant="primary" onClick={onTodoAddClick}>
        Add
      </Button>
    </div>
  );
};
