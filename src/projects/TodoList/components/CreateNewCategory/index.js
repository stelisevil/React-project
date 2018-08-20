import React from 'react';
import './style.css';

class CreateNewCategory extends React.Component {
  render () {
    let rgb = [];
    rgb.push(this.props.newCategoryRed)
    rgb.push(this.props.newCategoryGreen)
    rgb.push(this.props.newCategoryBlue)
    let newCategoryColour = {
      backgroundColor: `rgb(${rgb})`
    };
    // logic goes here
    let colourPicker = this.props.isNewCategoryBeingCreated ? (
      <React.Fragment>
        <div className="row">
          <div className="col-2 input-colour">
            Red
          </div>
          <input
            className="col-4 input-range"
            type="range"
            min="0" max="255"
            value={this.props.newCategoryRed}
            onInput={this.props.newCategoryChangeRed}
          />
          <div className="col-1">
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
            min="0" max="255"
            value={this.props.newCategoryGreen}
            onInput={this.props.newCategoryChangeGreen}
          />
          <div className="col-1">
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
            min="0" max="255"
            value={this.props.newCategoryBlue}
            onInput={this.props.newCategoryChangeBlue}
          />
          <div className="col-1">
            {this.props.newCategoryBlue}
          </div>
        </div>
      </React.Fragment>

    ) : (
      null
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
            <button
              className="btn btn-primary"
              onClick={this.props.addCategory}
              // disabled={areAnyTodosBeingEdited}
            >
              Add Category
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
