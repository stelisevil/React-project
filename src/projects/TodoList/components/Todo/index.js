import React from 'react';
import './style.css';

class Todo extends React.Component {
  render() {
    let className = this.props.completed ? 'completed' : 'notComplete';
    return (
      <div>
        <p className={className}>{this.props.task.task} <button class="btn btn-secondary btn-sm" onClick={this.props.removeItem}>Remove Item</button> <button class="btn btn-secondary btn-sm" onClick={this.props.changeCompleted}>Task Complete!</button></p>
      </div>
    )
  }
}

export default Todo;
