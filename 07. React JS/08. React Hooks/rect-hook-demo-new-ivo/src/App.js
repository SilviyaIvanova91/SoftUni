import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { useEffect, useState } from "react";
import { AddTodoModal } from "./components/AddTodoModal";
import { TodoContext } from "./contexts/TodoContext";

const baseUrl = "http://localhost:3030/jsonstore/todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [showAddTodo, setShowAddTodo] = useState(false);

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((result) => {
        setTodos(Object.values(result));
        // setTodos((state) => {    // СЕТВАМЕ САМО НОВ STATE, НАПЪЛНО ЗАБРАНЕНО Е ДА ИЗПОЛЗВА СТАРИЯ И ДОБАВЯНЕ НА НОВ!! ДОБАВЯМЕ САМО НОВИ РЕФЕРЕНЦИИ!!!
        //   state.push({});

        //   return state;
        // });
      });
  }, []);

  const onTodoAddSubmit = async (values) => {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...values, isCompleted: false }),
    });

    const result = await response.json();

    setShowAddTodo(false);
    setTodos((state) => [...state, result]);
  };

  const onTodoAddClick = () => {
    setShowAddTodo(true);
  };

  const onTodoAddClose = () => {
    setShowAddTodo(false);
  };

  const onTodoDeleteClick = async (todoId) => {
    await fetch(`${baseUrl}/${todoId}`, {
      method: "DELETE",
    });

    setTodos((state) => state.filter((x) => x._id !== todoId));
  };

  const onTodoClick = async (todoId) => {
    const todo = todos.find((x) => x._id === todoId);

    await fetch(`${baseUrl}/${todoId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...todo, isCompleted: !todo.isCompleted }),
    });

    setTodos((state) =>
      state.map((x) =>
        x._id === todoId ? { ...x, isCompleted: !x.isCompleted } : x
      )
    );
  };

  const contextValue = {
    onTodoDeleteClick,
    onTodoClick,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      <div>
        <Header />

        <TodoList todos={todos} onTodoAddClick={onTodoAddClick} />

        <AddTodoModal
          show={showAddTodo}
          onTodoAddSubmit={onTodoAddSubmit}
          onTodoAddClose={onTodoAddClose}
        />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
