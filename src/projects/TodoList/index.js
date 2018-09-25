import React from 'react';
import Todo from './components/Todo';
import CategoryCheckBoxes from './components/CategoryCheckBoxes';
import CreateNewCategory from './components/CreateNewCategory';
import SortByCategory from './components/SortByCategory';
import Chroma from 'chroma-js';
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
    this.addCategory = this.addCategory.bind(this)
    this.deleteCategory = this.deleteCategory.bind(this)
    this.state = {
      todos: [
        { task: 'Take out the bins', completed: false, isEditing: false, editingTask: '', categories: [1,3,4] },
        { task: 'Put a wash load on', completed: true, isEditing: false, editingTask: '', categories: [1,4] },
        { task: 'Learn React', completed: false, isEditing: false, editingTask: '', categories: [1,3] }
      ],
      newItem: '',
      categories: [
        { id: 1, category: "Urgent", colour: "#dc3545", checked: false },
        { id: 2, category: "Housework", colour: "#007bff", checked: false },
        { id: 3, category: "Shopping", colour: "#28a745", checked: false },
        { id: 4, category: "Birthday", colour: "#ffc107", checked: false }
      ],
      newCategory: '',
      newCategoryRed: '0',
      newCategoryGreen: '0',
      newCategoryBlue: '0',
      newCategoryBeingCreated: false,
      showOrganiseByCategory: false
    }
  }
  addItem() {
    const newTodos = this.state.todos
    if (this.state.newItem.trim() !== '') {
      const checkedCategories = this.state.categories.filter(todo => todo.checked)
      const newTodoCategories = checkedCategories.map((category, i) => category.id)
      const newCategories = this.state.categories.map(category => {
        category.checked = false;
        return category;
      });
      const newTodo = { task: this.state.newItem, completed: false, categories: newTodoCategories }
      newTodos.push(newTodo)
      this.setState({ todos: newTodos, newItem: '', categories: newCategories });
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
  addCategory() {
    let largestCategoryId = (this.state.categories[(this.state.categories).length-1]) ? (
      this.state.categories[(this.state.categories).length-1].id
    ) : (
      0
    )
    const newCategoryColour = `rgb(${this.state.newCategoryRed}, ${this.state.newCategoryGreen}, ${this.state.newCategoryBlue})`;
    const newCategory = {
      id: largestCategoryId+1,
      category: this.state.newCategory,
      colour: newCategoryColour,
      checked: false
    };
    const newCategoryArray = this.state.categories
    newCategoryArray.push(newCategory)
    this.setState({ categories: newCategoryArray, newCategoryBeingCreated: false, newCategory: '' })
  }
  deleteCategory(i) {
    let categoryToBeDeleted = this.state.categories[i].id;
    console.log(categoryToBeDeleted)
    let alteredTodoList = this.state.todos;
    alteredTodoList.forEach((todo) => {
      todo.categories.forEach((cat, i) => {
        if (cat === categoryToBeDeleted) {
          todo.categories.splice(i, 1);
        }
      })
    })
    let alteredCategoryList = this.state.categories;
    alteredCategoryList.forEach((cat, i) => {
      if (cat.id === categoryToBeDeleted) {
        alteredCategoryList.splice(i, 1);
      }
    })
    this.setState({ todos: alteredTodoList, categories: alteredCategoryList })
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
          deleteCategory={(e, i) => {
            this.deleteCategory(i);
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
              onChange={(e) => {
                this.setState({ newItem: e.target.value })
              }}
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
            deleteCategory={(e, i) => {
              this.deleteCategory(i);
            }}
          />
        </div>
        <div>
          <CreateNewCategory
            newCategoryValue={this.state.newCategory}
            newCategoryRed={this.state.newCategoryRed}
            newCategoryGreen={this.state.newCategoryGreen}
            newCategoryBlue={this.state.newCategoryBlue}
            isNewCategoryBeingCreated={this.state.newCategoryBeingCreated}
            newCategoryChangeRed={(e) => {
              this.setState({ newCategoryRed: e.target.value });
            }}
            newCategoryChangeGreen={(e) => {
              this.setState({ newCategoryGreen: e.target.value });
            }}
            newCategoryChangeBlue={(e) => {
              this.setState({ newCategoryBlue: e.target.value });
            }}
            newCategoryBeingCreatedFalse={() => {
              this.setState({
                newCategoryBeingCreated: false,
                newCategory: '',
                newCategoryRed: '0',
                newCategoryBlue: '0',
                newCategoryGreen: '0'
              })
            }}
            newCategoryBeingCreatedTrue={() => {
              this.setState({ newCategoryBeingCreated: true })
            }}
            typingNewCategory={(e) => {
              this.setState({ newCategory: e.target.value });
            }}
            addCategory={() => {
              this.addCategory();
            }}
          />
        </div>
        {todos}
        <div>
          <SortByCategory
            todoList={this.state.todos}
            categoriesList={this.state.categories}
            showOrganiseByCategory={this.state.showOrganiseByCategory}
            toggleOrganiseByCategory={() => {
              this.setState({ showOrganiseByCategory: !this.state.showOrganiseByCategory })
            }}
          />
        </div>
      </div>
    )
  }
}

export default TodoList;
