import React from 'react';
import './style.css';

class CategoryList extends React.Component {
  render () {
    let categoriesInfo = this.props.categoriesInfo; // <-- category array of objects
    let eachTaskCategory = this.props.taskCategories.map((categoryId, i) => {
      let categoryColour = categoriesInfo.find( category => category.id === categoryId )
      let categoryDotColour = {
        backgroundColor: categoryColour.colour
      };
      return (
        <span id={i} className="dot" style={categoryDotColour}></span>
      )
    })
    return (
      eachTaskCategory
    )
  }
}

export default CategoryList;
