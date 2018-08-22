import React from 'react';
import './style.css';

class SortByCategory extends React.Component {
  render () {
    /*
      const todoList = this.props.todoList;
      const categoriesList = this.props.categoriesList;
    */
    const { todoList, categoriesList, toggleOrganiseByCategory } = this.props;

    /*
      foreaches here please
    */
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

    /*
      foreach
    */
    for (let todoIndex = 0; todoIndex < todoList.length; todoIndex++) {
      let eachTodoCategories = todoList[todoIndex].categories;
      for (let i = 0; i < eachTodoCategories.length; i++) {
        orderByCategoriesObj[eachTodoCategories[i]].push(todoList[todoIndex])
      }
    }

    let displaySortedByCategories = activeCategoryList.map((categoryId, i) => {
      /*
        Variable name more descipt, give the find method in-scope category variable a shorter name
      */
      let eachCategory = categoriesList.find( category => category.id === categoryId )

      /*
        We can destructue the eachCategory object here to get the values
        Remember to remove instances of eachCategory. from the names once youve done it
        const { colour, text, category } = eachCategory;
      */

      let categoryBoxColour = {
        backgroundColor: eachCategory.colour,
        /*
          As discussed, this shouldn't be part of the category object because its a
          value that will never change - if you ever have something in state that will
          never charge its usually a sign it can be moved out into a render concern.

          E.g. this cateogrytext color, its set as black or white when the colour
          is created so we can decide the text colour here in render rather than storing it
        */
        color: eachCategory.text
      };
      let arrayOfCategoryTasks = orderByCategoriesObj[categoryId]
      let listOfCategoryTasks = arrayOfCategoryTasks.map((eachTask, i) => {
        // Not style, classname
        let styleCompletedTask = (eachTask.completed) ? 'completed' : 'not-completed'
        // Key should always go on the top element being returned
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
      // ? not sure about this one just double check but have a look at the key
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
            onClick={toggleOrganiseByCategory}
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
