import React from 'react';
import './style.css';

class CategoryCheckBoxes extends React.Component {
  render () {
    // logic goes here
    let eachCategory = this.props.categoriesInfo.map((category, i) => {
      let categoryBoxColour = {
        backgroundColor: category.colour
      };

      return (
        <span className="checkbox-wrapper" style={categoryBoxColour} key={i}>
          <input
            checked={category.checked}
            type="checkbox"
            className="checkbox"
            onClick={(event) => {
              this.props.toggleCheckBox(i);
            }}
          />
          {category.category}
        </span>
      )
    })

    return (
      // stuff to render goes here
      eachCategory
    )
  }
}
export default CategoryCheckBoxes;
