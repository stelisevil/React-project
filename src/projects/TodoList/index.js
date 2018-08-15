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
    // this.showEditField = this.showEditField.bind(this)
    this.state = {
      todos: [
        { task: 'Take out the bins', completed: false, isEditing: false },
        { task: 'Put a wash load on', completed: true, isEditing: false },
        { task: 'Learn React', completed: false, isEditing: false }
      ],
      newItem: '',
      editedItem: ''
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
    this.setState({ todos: taskListToBeAltered });
    this.setState({ editedItem: alteredTask.task });
  }
  confirmEditTask(i) {
    let taskListToBeAltered = this.state.todos;
    let alteredTask = taskListToBeAltered[i];
    alteredTask.task = this.state.editedItem;
    this.setState({ todos: taskListToBeAltered });
    alteredTask.isEditing = !alteredTask.isEditing;
  }

  render() {
    // Before the return you can do all logic you need
    let todos = this.state.todos.map((task, i) => {
      return (
        <Todo
          key={i}
          todo={task.task}
          completed={task.completed}
          isEditing={task.isEditing}
          editedItem={this.state.editedItem}
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
          whilstEditing={e => this.setState({ editedItem: e.target.value })}

        />
      )
    })

    return (
      <div className='container'>
        <h1>Hey I'm a todo list:</h1>
        <div className='row'>
          <div>
            <p className='pr-1'><strong>Add a new item:</strong></p>
          </div>
          <div>
            <input
              className='form-control'
              value={this.state.newItem}
              placeholder='enter text here...'
              onKeyPress={this.pressEnter}
              onChange={e => this.setState({ newItem: e.target.value })}
            />
          </div>
          <div>
            <button class="btn btn-primary" onClick={this.addItem}>Add item!</button>
          </div>
        </div>
        {todos}
        {this.state.newItem}
      </div>
    )
  }
}

export default TodoList;
