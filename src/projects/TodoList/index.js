import React from 'react';
import Todo from './components/Todo';
import CategoryCheckBoxes from './components/CategoryCheckBoxes';
import './style.css';

class TodoList extends React.Component {
  constructor() {
    super();
    this.addItem = this.addItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.pressEnter = this.pressEnter.bind(this)
    this.changeCompleted = this.changeCompleted.bind(this)
    this.confirmEditTask = this.confirmEditTask.bind(this)
    this.toggleCheckBox = this.toggleCheckBox.bind(this)
    this.state = {
      todos: [
        { task: 'Take out the bins', completed: false, isEditing: false, editingTask: '', categories: [1,2,3,4] },
        { task: 'Put a wash load on', completed: true, isEditing: false, editingTask: '', categories: [1,4] },
        { task: 'Learn React', completed: false, isEditing: false, editingTask: '', categories: [3] }
      ],
      newItem: '',
      categories: [
        { id: 1, category: "Urgent", colour: "#dc3545", checked: false },
        { id: 2, category: "Housework", colour: "#007bff", checked: false },
        { id: 3, category: "Shopping", colour: "#28a745", checked: false },
        { id: 4, category: "Birthday", colour: "#ffc107", checked: false }
      ]
    }
  }
  addItem() {
    const newTodos = this.state.todos
    if (this.state.newItem.trim() !== '') {
      let checkedCategories = this.state.categories.filter(todo => todo.checked === true)
      let newTodoCategories = checkedCategories.map((category, i) => {
        category.checked = false
        return category.id
      })
      const newTodo = { task: this.state.newItem, completed: false, categories: newTodoCategories }
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
    let alteredTask = this.state.todos[i];
    alteredTask.completed = !alteredTask.completed
    this.setState({ todos: this.state.todos });
  }
  showEditField(i) {
    let alteredTask = this.state.todos[i];
    alteredTask.isEditing = !alteredTask.isEditing;
    alteredTask.editingTask = alteredTask.task;
    this.setState({ todos: this.state.todos });
  }
  confirmEditTask(i) {
    let alteredTask = this.state.todos[i];
    alteredTask.task = alteredTask.editingTask;
    alteredTask.isEditing = !alteredTask.isEditing;
    this.setState({ todos: this.state.todos });
  }
  whilstEditing(i, value) {
    let alteredTask = this.state.todos[i];
    alteredTask.editingTask = value;
    this.setState({ todos: this.state.todos });
  }
  toggleCheckBox(i) {
    let alteredCheckBox = this.state.categories[i];
    alteredCheckBox.checked = !alteredCheckBox.checked;
    this.setState({ categories: this.state.categories });
  }
  render() {
    // Before the return you can do all logic you need
    const areAnyTodosBeingEdited = this.state.todos.find(item => {
      return item.isEditing;
    })
    let todos = this.state.todos.map((task, i) => {
      return (
        <Todo
          key={i}
          todo={task.task}
          completed={task.completed}
          isEditing={task.isEditing}
          editingTask={task.editingTask}
          taskCategories={task.categories}
          categoriesInfo={this.state.categories}
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
          whilstEditing={(e) => {
            this.whilstEditing(i, e.target.value);
          }}
        />
      )
    })

    return (
      <div className="container mt-1">
        <h1>Hey I&apos;m a todo list:</h1>
        <div className="row">
          <div className="col-6">
            <input
              className="form-control"
              value={this.state.newItem}
              placeholder="Add a new task here..."
              onKeyPress={this.pressEnter}
              onChange={e => this.setState({ newItem: e.target.value })}
              disabled={areAnyTodosBeingEdited}
            />
          </div>
          <div>
            <button
              className="btn btn-primary"
              onClick={this.addItem}
              disabled={areAnyTodosBeingEdited}
            >
              Confirm
            </button>
          </div>
        </div>
        <div className="row">
          <CategoryCheckBoxes
            categoriesInfo={this.state.categories}
            toggleCheckBox={this.toggleCheckBox}
          />
        </div>
        {todos}
      </div>
    )
  }
}

export default TodoList;
