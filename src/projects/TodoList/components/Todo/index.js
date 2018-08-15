import React from 'react';
import './style.css';

class Todo extends React.Component {
  render() {
    let className = this.props.completed ? 'completed' : 'notComplete';
    let editing = this.props.isEditing ? (
      <span>
        <input
          value={this.props.editedItem}
          onChange={this.props.whilstEditing}
        />
        <button onClick={this.props.confirmEditTask}>Confirm</button>
      </span>
    ) : (
      <span className={className}>{this.props.todo}</span>
    );
    return (
      <div>
        {editing}
        <button class="btn btn-secondary btn-sm" onClick={this.props.removeItem}>
          Remove Item
        </button>
        <button class="btn btn-secondary btn-sm" onClick={this.props.changeCompleted}>
          Task Complete!
        </button>
        <button onClick={this.props.editTask}>
          Edit Task
        </button>
      </div>
    )
  }
}

export default Todo;
