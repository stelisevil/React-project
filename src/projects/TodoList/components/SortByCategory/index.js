import React from 'react';
import './style.css';
import Chroma from 'chroma-js'

class SortByCategory extends React.Component {
  render () {
    /*
      const todoList = this.props.todoList;
      const categoriesList = this.props.categoriesList;
    */
    const { todoList, categoriesList, toggleOrganiseByCategory, showOrganiseByCategory } = this.props;



    let activeCategoryList = [];
    todoList.forEach((todo) => {
      let eachTodoCategories = todo.categories
      eachTodoCategories.forEach((item) => {
        if(!activeCategoryList.includes(item)) {
          activeCategoryList.push(item);
        }
      })
    });

    let orderByCategoriesObj = {};
    activeCategoryList.forEach(activeCategory => {
      orderByCategoriesObj[activeCategory] = []
    });

    todoList.forEach((todo) => {
      let eachTodoCategories = todo.categories;
      eachTodoCategories.forEach((item) => {
        orderByCategoriesObj[item].push(todo);
      })
    })

    let displaySortedByCategories = activeCategoryList.map((categoryId, i) => {

      let category = categoriesList.find( cat => cat.id === categoryId )

      /*
        We can destructue the category object here to get the values
        Remember to remove instances of category. from the names once youve done it
        const { colour, text, category } = category;
      */
      let categoryTextColour = (Chroma.contrast(category.colour, 'white') > 4.5) ? 'white' : 'black'
      let categoryBoxColour = {
        backgroundColor: category.colour,
        color: categoryTextColour,
      };
      let arrayOfCategoryTasks = orderByCategoriesObj[categoryId]
      let listOfCategoryTasks = arrayOfCategoryTasks.map((eachTask, i) => {
        let completedTaskClassName = (eachTask.completed) ? 'completed' : 'not-completed'
        return (
          <div className="row" key={i}>
            <span
              className="dot"
              style={categoryBoxColour}
              data-toggle="tooltip"
              data-placement="top"
              title={category.category}
            />
            <div key={i} className={completedTaskClassName + " h6 mt-2 ml-1"}>{eachTask.task}</div>
          </div>
        )
      })
      return (
        <React.Fragment key={i}>
          <div className="h3 pl-1 m-0" style={categoryBoxColour}>{category.category}</div>
          {listOfCategoryTasks}
        </React.Fragment>
      )
    })

    let showOrganiseByCategoryButton = (showOrganiseByCategory) ? (
      <React.Fragment>
        <div className="row p-2">
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={toggleOrganiseByCategory}
          >
            Cancel
          </button>
        </div>
        {displaySortedByCategories}
      </React.Fragment>
    ) : (
      <div className="row p-2">
        <button
          type="button"
          className="btn btn-primary"
          onClick={toggleOrganiseByCategory}
        >
          Organise Tasks by Category
        </button>
      </div>
    );

    return (
        showOrganiseByCategoryButton
    )
  }
}

export default SortByCategory;
