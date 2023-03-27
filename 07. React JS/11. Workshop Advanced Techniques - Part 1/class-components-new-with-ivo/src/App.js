import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { TodoContext } from "./context/TodoContext";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      name: "Ivan V",
    };

    this.onTodoClick = this.onTodoClick.bind(this);
    this.onTodoDelete = this.onTodoDelete.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount");

    fetch("http://localhost:3000/data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          todos: data.todos,
        });
      });
  }

  onTodoClick(todoId) {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
      ),
    });
  }

  onTodoDelete(todoId) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== todoId),
    });
  }

  render() {
    //  throw { message: `Failed to delete todoId: ${todoId}` };

    return (
      <ErrorBoundary>
        <TodoContext.Provider
          value={{ todos: this.state.todos, name: this.state.name }}
        >
          <Header />

          <h2>{this.state.name}</h2>

          <TodoList
            todos={this.state.todos}
            onTodoClick={this.onTodoClick}
            onTodoDelete={this.onTodoDelete}
          />
        </TodoContext.Provider>
      </ErrorBoundary>
    );
  }
}

export default App;
