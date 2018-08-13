import React from 'react';
import './style.css';

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

export default Todo;
