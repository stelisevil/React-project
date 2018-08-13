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
    this.state = {
      todos: [
        { task: 'Take out the bins', completed: false },
        { task: 'Put a wash load on', completed: true },
        { task: 'Learn React', completed: false }
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
      <div className='container'>
        <h1>Hey I'm a todo list:</h1>
        <div className='row'>
          <div className='col-sm'>
            <b>Add a new item:</b>
          </div>
          <div className='col-sm'>
            <input className='form-control' value={this.state.newItem} placeholder='enter text here...' onKeyPress={this.pressEnter} onChange={e => this.setState({ newItem: e.target.value })}/>
          </div>
          <div className='col-sm'>
            <button onClick={this.addItem}>Add item!</button>
          </div>
        </div>
        {todos}
        {this.state.newItem}
      </div>
    )
  }
}

export default TodoList;
