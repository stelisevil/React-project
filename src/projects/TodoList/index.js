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
      test: 'Tester'
    }
  }
  render() {
    // Before the return you can do all logic you need
    let eachTodo = this.state.todos.map((item) => {
      return (
        <Todo
          eachTodo={item}
        />
      )
    })

    return (
      <div>
        <h1>Hey im a todo list:</h1>
        {eachTodo}
      </div>
    )

  }
}

export default TodoList;
