import React from 'react';
import './style.css';

class Todo extends React.Component {
  render() {

    let completedTask = this.props.completed ? 'completed' : 'not-complete';
    let editing = this.props.isEditing ? (
      <React.Fragment>
        <input
          value={this.props.editingTask}
          onChange={this.props.whilstEditing}
        />
        <button
          className="btn btn-info btn-sm"
          onClick={this.props.confirmEditTask}
          disabled={this.props.editingTask.trim() === '' }
        >
          Confirm
        </button>
      </React.Fragment>
    ) : (
      <span className={completedTask + " border rounded p-1 col"}>
        {this.props.todo}
      </span>
    );

    let showButtons = (!this.props.isEditing) && (
      <React.Fragment>
        <button className="btn btn-danger btn-sm col-2" onClick={this.props.removeItem}>
          Remove Item
        </button>
        <button className="btn btn-success btn-sm col-2" onClick={this.props.changeCompleted}>
          Task Complete!
        </button>
      </React.Fragment>
    )

    return (
      <div className="row mt-2">
        {editing}
        {showButtons}
        <button className="btn btn-warning btn-sm col-2" onClick={this.props.editTask}>
          {this.props.isEditing ? 'Cancel' : 'Edit Task'}
        </button>
      </div>
    )
  }
}

export default Todo;
