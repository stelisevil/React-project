import React from 'react';
import style from './style.css';

class Todo extends React.Component {
  render() {
    let className = this.props.completed ? 'completed' : 'notComplete';
    return (
      <div>
        <p className={className}>{this.props.task.task} <button onClick={this.props.removeItem}>Remove Item</button> <button onClick={this.props.changeCompleted}>Task Complete!</button></p>
      </div>
    )
  }
}

class TodoList extends React.Component {
  constructor() {
    super();
    this.addItem = this.addItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.pressEnter = this.pressEnter.bind(this)
    this.changeCompleted = this.changeCompleted.bind(this)
    this.state = {
      todos: [{ task: 'Take out the bins', completed: false }, { task: 'Put a wash load on', completed: true}, { task: 'Learn React', completed: false }],
      newItem: { task: '', completed: false }
    }
  }
  addItem() {
    const newTodos = this.state.todos
    if (this.state.newItem.task !== '') {
      newTodos.push(this.state.newItem)
      this.setState({ todos: newTodos, newItem: { task: '', completed: false } })
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
    this.setState({ todos: { task: this.state.todos[i].task, completed: !this.state.todos[i].completed }})
  }
  render() {
    // Before the return you can do all logic you need
    let todos = this.state.todos.map((task, i) => {
      return (
        <Todo
          key={i}
          task={task}
          removeItem={() => {
            this.removeItem(i);
          }}
          completed={task.completed}
          changeCompleted={() => {
            this.changeCompleted(i)
          }}
        />
      )
    })

    return (
      <div>
        <h1>Hey I'm a todo list:</h1>
        <b>Add a new item:</b> <input value={this.state.newItem.task} onKeyPress={this.pressEnter} onChange={e => this.setState({ newItem: { task: e.target.value, completed: false } })}/>
        <button onClick={this.addItem}>Add item!</button>
        {todos}
        {this.state.newItem.task}
      </div>
    )
  }
}

export default TodoList;
