import React from 'react';
import './style.css';

class SortByCategory extends React.Component {
  render () {
    const todoList = this.props.todoList;
    const categoriesList = this.props.categoriesList;

    let activeCategoryList = [];
    for (let todoIndex = 0; todoIndex < todoList.length; todoIndex++) {
      let eachTodoCategories = todoList[todoIndex].categories;
      for (let i = 0; i < eachTodoCategories.length; i++) {
        if (!activeCategoryList.includes(eachTodoCategories[i])) {
          activeCategoryList.push(eachTodoCategories[i]);
        }
      }
    }

    let orderByCategoriesObj = {};
    activeCategoryList.forEach(activeCategory => {
      orderByCategoriesObj[activeCategory] = []
    });

    for (let todoIndex = 0; todoIndex < todoList.length; todoIndex++) {
      let eachTodoCategories = todoList[todoIndex].categories;
      for (let i = 0; i < eachTodoCategories.length; i++) {
        orderByCategoriesObj[eachTodoCategories[i]].push(todoList[todoIndex])
      }
    }

    let displaySortedByCategories = activeCategoryList.map((categoryId, i) => {
      let eachCategory = categoriesList.find( category => category.id === categoryId )
      let categoryBoxColour = {
        backgroundColor: eachCategory.colour,
        color: eachCategory.text
      };
      let arrayOfCategoryTasks = orderByCategoriesObj[categoryId]
      let listOfCategoryTasks = arrayOfCategoryTasks.map((eachTask, i) => {
        let styleCompletedTask = (eachTask.completed) ? 'completed' : 'not-completed'
        return (
          <div className="row">
            <span
              className="dot"
              style={categoryBoxColour}
              data-toggle="tooltip"
              data-placement="top"
              title={eachCategory.category}
            />
            <div key={i} className={styleCompletedTask + " h6 mt-2 ml-1"}>{eachTask.task}</div>
          </div>
        )
      })
      return (
        <React.Fragment>
          <div key={i} className="row h3 pl-1 m-0" style={categoryBoxColour}>{eachCategory.category}</div>
          {listOfCategoryTasks}
        </React.Fragment>
      )
    })
    return (
      <React.Fragment>
        <div className="row p-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.props.toggleOrganiseByCategory}
          >
            Organise by Category
          </button>
        </div>
        {displaySortedByCategories}
      </React.Fragment>

    )
  }
}

export default SortByCategory;
