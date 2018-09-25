import React from 'react';
import './style.css';
import Chroma from 'chroma-js'
import redcross from './images/redcross.png';

class CategoryCheckBoxes extends React.Component {
  render () {
    // logic goes here
    let eachCategory = this.props.categoriesInfo.map((category, i) => {
      let categoryTextColour = (Chroma.contrast(category.colour, 'white') > 4.5) ? 'white' : 'black'
      let categoryBoxColour = {
        backgroundColor: category.colour,
        color: categoryTextColour
      };

      return (
        <label className="checkbox-wrapper" style={categoryBoxColour} key={i}>
          <input
            checked={category.checked}
            type="checkbox"
            className="checkbox"
            onClick={(event) => {
              this.props.toggleCheckBox(i);
            }}
          />
          {category.category}
          <img
            className="redcross"
            alt="Red Cross"
            src={redcross}
            onClick={(e) => {
              this.props.deleteCategory(e, i)
            }}
          />
        </label>
      )
    })

    return (
      // stuff to render goes here
      eachCategory
    )
  }
}
export default CategoryCheckBoxes;
