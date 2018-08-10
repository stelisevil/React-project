import React from 'react';
import style from './style.css';

class Todo extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.task} <button onClick={this.props.removeItem}>-</button></p>
      </div>
    )
  }
}

class TodoList extends React.Component {
  constructor() {
    super();
    this.addItem = this.addItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.state = {
      todos: ['Take out the bins', 'Put a wash load on', 'Learn React'],
      newItem: '',
      removedIndex: ''
    }
  }
  addItem() {
    const newTodos = this.state.todos
    newTodos.push(this.state.newItem)
    this.setState({ todos: newTodos, newItem: '' })
  }
  removeItem() {
    let removedItem = this.props.key
    this.setState({ removedIndex: removedItem })
    const removedTodos = this.state.todos
    removedTodos.splice(this.state.todos[this.state.removedIndex], 1)
    this.setState({ todos: removedTodos, removedIndex: '' })
  }
  render() {
    // Before the return you can do all logic you need
    let todos = this.state.todos.map((task, i) => {
      return (
        <Todo
          key={i}
          task={task}
          removeItem={this.removeItem}
        />
      )
    })

    return (
      <div>
        <h1>Hey I'm a todo list:</h1>
        <b>Add a new item:</b> <input value={this.state.newItem} onChange={e => this.setState({ newItem: e.target.value })}/>
        <button onClick={this.addItem}>Add item!</button>
        {todos}
        {this.state.newItem}
      </div>
    )
  }
}

export default TodoList;
