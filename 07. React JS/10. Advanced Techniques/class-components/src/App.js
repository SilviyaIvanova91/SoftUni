import { Component } from 'react';
import TaskList from './components/TaskList';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <main className="App-header">
                    <h1>ToDo List</h1>
                    <TaskList />
                </main>
            </div>
        );
    }
}

export default App;
