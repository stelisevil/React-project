import React from 'react';
import './style.css';
import Chroma from 'chroma-js'

class CreateNewCategory extends React.Component {
  render () {
    // logic goes here

    let rgb = [this.props.newCategoryRed, this.props.newCategoryGreen, this.props.newCategoryBlue];
    let categoryTextColour = (Chroma.contrast(`rgb(${rgb})`, 'white') > 4.5) ? 'white' : 'black'
    let newCategoryColour = {
      backgroundColor: `rgb(${rgb})`,
      color: categoryTextColour
    };

    let cancelCreateCategoryButton = this.props.isNewCategoryBeingCreated && (
      <button
        className="btn btn-outline-danger"
        onClick={this.props.newCategoryBeingCreatedFalse}
      >
        Cancel
      </button>
    )

    let colourPicker = this.props.isNewCategoryBeingCreated && (
      <React.Fragment>
        <div className="row">
          <div className="col-2 input-colour">
            Red
          </div>
          <input
            className="col-4 input-range"
            type="range"
            min="0"
            max="255"
            value={this.props.newCategoryRed}
            onChange={this.props.newCategoryChangeRed}
          />
          <div className="col-1 input-number">
            {this.props.newCategoryRed}
          </div>
        </div>
        <div className="row">
          <div className="col-2 input-colour">
            Green
          </div>
          <input
            className="col-4 input-range"
            type="range"
            min="0"
            max="255"
            value={this.props.newCategoryGreen}
            onChange={this.props.newCategoryChangeGreen}
          />
          <div className="col-1 input-number">
            {this.props.newCategoryGreen}
          </div>
          <div className="colour-box" style={newCategoryColour}></div>
        </div>
        <div className="row">
          <div className="col-2 input-colour">
            Blue
          </div>
          <input
            className="col-4 input-range"
            type="range"
            min="0"
            max="255"
            value={this.props.newCategoryBlue}
            onChange={this.props.newCategoryChangeBlue}
          />
          <div className="col-1 input-number">
            {this.props.newCategoryBlue}
          </div>
        </div>
      </React.Fragment>

    );
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-6">
            <input
              className="form-control"
              value={this.props.newCategoryValue}
              placeholder="Add a new category here..."
              // onKeyPress={this.pressEnter}
              onChange={this.props.typingNewCategory}
              onFocus={this.props.newCategoryBeingCreatedTrue}
            />
          </div>
          <div>
            {cancelCreateCategoryButton}
            <button
              className="btn btn-primary"
              onClick={this.props.addCategory}
              disabled={(this.props.newCategoryValue.trim() === '')}
            >
              Confirm
            </button>
          </div>
        </div>
        {colourPicker}
      </React.Fragment>

      // stuff to render goes here
    )
  }
}
export default CreateNewCategory;
