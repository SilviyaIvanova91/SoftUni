import { useContext } from "react";
import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { TodoContext } from "../contexts/TodoContext";

export const TodoItem = ({ _id, text, isCompleted }) => {
  const { onTodoDeleteClick, onTodoClick } = useContext(TodoContext);

  return (
    <ListGroup.Item
      action
      style={{ display: "flex", justifyContent: "space-between" }}
      onClick={() => onTodoClick(_id)}
    >
      <p style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
        {text}
      </p>
      <Button variant="dark" onClick={() => onTodoDeleteClick(_id)}>
        X
      </Button>
    </ListGroup.Item>
  );
};
