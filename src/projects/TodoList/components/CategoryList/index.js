import React from 'react';
import './style.css';

class CategoryList extends React.Component {
  render () {
    let categoriesInfo = this.props.categoriesInfo; // <-- category array of objects
    let eachTaskCategory = this.props.taskCategories.map((categoryId, i) => {
      let eachCategory = categoriesInfo.find( category => category.id === categoryId )
      let categoryTooltip = eachCategory.category
      let categoryDotColour = {
        backgroundColor: eachCategory.colour
      };
      return (
        <span
          key={i}
          className="dot"
          style={categoryDotColour}
          data-toggle="tooltip"
          data-placement="top"
          title={categoryTooltip}
        />
      )
    })
    return (
      eachTaskCategory
    )
  }
}

export default CategoryList;
