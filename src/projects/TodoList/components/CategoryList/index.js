import React from 'react';
import './style.css';

class CategoryList extends React.Component {
  render () {
    let categoriesInfo = this.props.categoriesInfo; // <-- category object
    let categoryColour = categoriesInfo.find( category => category.id === this.props.categoryId )
      
    let categoryDotColour = {
      backgroundColor: categoryColour.colour
    };

    return (
      <span className="dot" style={categoryDotColour}></span>
    )
  }
}

export default CategoryList;
