import React from 'react';
import Todo from './components/Todo';
import './style.css';

class TodoList extends React.Component {
  constructor() {
    super();
    this.addItem = this.addItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.pressEnter = this.pressEnter.bind(this)
    this.changeCompleted = this.changeCompleted.bind(this)
    this.confirmEditTask = this.confirmEditTask.bind(this)
    this.state = {
      todos: [
        { task: 'Take out the bins', completed: false, isEditing: false, editingTask: '' },
        { task: 'Put a wash load on', completed: true, isEditing: false, editingTask: '' },
        { task: 'Learn React', completed: false, isEditing: false, editingTask: '' }
      ],
      newItem: ''
    }
  }
  addItem() {
    const newTodos = this.state.todos
    if (this.state.newItem !== '') {
      const newTodo = { task: this.state.newItem, completed: false }
      newTodos.push(newTodo)
      this.setState({ todos: newTodos, newItem: '' })
    }
  }
  removeItem(i) {
    let removedTodos = this.state.todos
    removedTodos.splice(i, 1)
    this.setState({ todos: removedTodos })
  }
  pressEnter(e) {
    if (e.key === 'Enter') {
      this.addItem();
    }
  }
  changeCompleted(i) {
    let taskListToBeAltered = this.state.todos
    let alteredTask = taskListToBeAltered[i]
    alteredTask.completed = !alteredTask.completed;
    // taskListToBeAltered.splice(i, 1, alteredTask);
    this.setState({ todos: taskListToBeAltered });
  }
  showEditField(i) {
    let taskListToBeAltered = this.state.todos;
    let alteredTask = taskListToBeAltered[i];
    alteredTask.isEditing = !alteredTask.isEditing;
    alteredTask.editingTask = alteredTask.task;
    this.setState({ todos: taskListToBeAltered });
  }
  confirmEditTask(i) {
    let taskListToBeAltered = this.state.todos;
    let alteredTask = taskListToBeAltered[i];
    alteredTask.task = alteredTask.editingTask;
    alteredTask.isEditing = !alteredTask.isEditing;
    this.setState({ todos: taskListToBeAltered });
  }
  whilstEditing(i, value) {
    let taskListToBeAltered = this.state.todos;
    let alteredTask = taskListToBeAltered[i];
    alteredTask.editingTask = value;
    this.setState({ todos: taskListToBeAltered });
  }
  render() {
    // Before the return you can do all logic you need
    let areAnyTodosBeingEdited = this.state.todos.find(item => {
      return item.isEditing;
    })
    let todos = this.state.todos.map((task, i) => {
      return (
        <Todo
          key={i}
          todo={task.task}
          completed={task.completed}
          isEditing={task.isEditing}
          editingTask={task.editingTask}
          removeItem={() => {
            this.removeItem(i);
          }}
          changeCompleted={() => {
            this.changeCompleted(i);
          }}
          editTask={() => {
            this.showEditField(i);
          }}
          confirmEditTask={() => {
            this.confirmEditTask(i);
          }}
          whilstEditing={(e) => {
            this.whilstEditing(i, e.target.value);
          }}

        />
      )
    })

    return (
      <div className="container">
        <h1>Hey I'm a todo list:</h1>
        <div className="row">
          <div>
            <p className="pr-1"><strong>Add a new item:</strong></p>
          </div>
          <div>
            <input
              className="form-control"
              value={this.state.newItem}
              placeholder='enter text here...'
              onKeyPress={this.pressEnter}
              onChange={e => this.setState({ newItem: e.target.value })}
              disabled={areAnyTodosBeingEdited}
            />
          </div>
          <div>
            <button className="btn btn-primary" onClick={this.addItem} disabled={areAnyTodosBeingEdited}>Add item!</button>
          </div>
        </div>
        {todos}
        {this.state.newItem}
      </div>
    )
  }
}

export default TodoList;
