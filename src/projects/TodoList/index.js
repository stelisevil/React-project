import React from 'react';
import style from './style.css';

class Todo extends React.Component {
  render() {
    return (
      <p>{this.props.eachTodo}</p>

    )
  }
}

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: ['Take out the bins', 'Put a wash load on', 'Learn React', 'Gitgud at Overwatch'],
      test: 'Tester',
      newItem: ''
    }
  }
  render() {
    // Before the return you can do all logic you need
    let eachTodo = this.state.todos.map((item) => {
      return (
        <Todo
          eachTodo={item}
          // I know that this is in the wrong place
          addItem={() => {
            this.setState({ todos: this.state.todos.push(this.state.newItem) })
          }}
        />
      )
    })

    return (
      <div>
        <h1>Hey im a todo list:</h1>
        <b>Add a new item:</b> <input value={this.state.newItem} onChange={e => this.setState({ newItem: e.target.value })}/>
        <button onClick={this.props.addItem}>Add item!</button>
        {eachTodo}
        {this.state.newItem}
      </div>
    )

  }
}

export default TodoList;
