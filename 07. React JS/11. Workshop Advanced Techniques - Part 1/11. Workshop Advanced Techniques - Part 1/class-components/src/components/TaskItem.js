import { Component } from "react";
import styles from './TaskItem.module.css';

import { TaskContext } from '../contexts/TaskContext';

class TaskItem extends Component {
    render() {
        const className = this.props.isCompleted ? styles.completed : '';

        return (
            <TaskContext.Consumer>
                {context =>
                    <>
                        <li
                            onClick={() => this.props.onClick(this.props.title)}
                            className={className}
                        >
                            {this.props.title}
                            <button onClick={(e) => context.taskDeleteHandler(e, this.props.title)}>
                                x
                            </button>
                        </li>
                     
                    </>
                }
            </TaskContext.Consumer>
        );
    }
}

export default TaskItem;
