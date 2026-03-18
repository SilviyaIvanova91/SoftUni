class Task {
  title: string;
  description: string;
  completed: boolean = false;
  private _createdBy: string;

  constructor(title: string, description: string, createdBy: string) {
    this.title = title;
    this.description = description;
    this._createdBy = createdBy;
  }

  get createdBy(): string {
    return this._createdBy;
  }

  toggleStatus(): void {
    this.completed = !this.completed;
  }

  getDetails(): string {
    return `Task: ${this.title} - ${this.description} - ${this.completed ? "Completed" : "Pending"}`;
  }

  static createSampleTasks(): Task[] {
    const tasks: Task[] = [
      new Task("Do homework", "wewqeq", "Alice"),
      new Task("Clean house", "ewewe", "Bob"),
    ];
    return tasks;
  }
}

const task1 = new Task("Complete homework", "Finish math exercises", "Charlie");
task1.toggleStatus();
console.log(task1.getDetails());
console.log("--------------------------------");

const task2 = new Task("Clean room", "Clean the room", "Mary");
console.log(task2.getDetails());

console.log("--------------------------------");
const tasks = Task.createSampleTasks();
tasks.forEach((task) => console.log(task.getDetails()));
