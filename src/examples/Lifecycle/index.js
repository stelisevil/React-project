import React from 'react';

class LifeCycle extends React.Component {

  constructor() {
    super();
    console.log('setting up parent');
    this.state = {
      name: 'Matthew'
    }
  }

  render() {
    console.log('rendering parent');
    return (
      <React.Fragment>
        <p>Hello {this.state.name}</p>
        <Input
          name={this.state.name}
          save={newValue => {
            this.setState({ name: newValue })
          }}
        />
      </React.Fragment>
    )
  }

}

class Input extends React.Component {

  constructor(props) {
    super(props);
    console.log('setting up child');
    this.state = {
      inputValue: props.name,
      lengthOfNewWord: props.name.length
    }
  }

  componentDidMount() {
    console.log('mounted child');
  }

  componentWillReceiveProps(newProps) {
    this.setState({ lengthOfNewWord: newProps.name.length });
    console.log('Child receiveing new props!', newProps);
  }

  render() {
    console.log('rendering child');
    return (
      <React.Fragment>
        <input
          value={this.state.inputValue}
          onChange={(e) => {
            this.setState({ inputValue: e.target.value })
          }}
        />
        <button onClick={() => {
          this.props.save(this.state.inputValue)
        }}>
          Save
        </button>
        <p>New Word length: {this.state.lengthOfNewWord}</p>
      </React.Fragment>

    )
  }

}

export default LifeCycle;
