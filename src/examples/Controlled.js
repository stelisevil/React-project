import React from 'react';

export default class Controlled extends React.Component {

  constructor() {
    super();
    this.state = {
      name: '',
      contolled: ''
    }
  }

  render() {
    return(
      <div>
        <p>Uncontrolled</p>
        Enter name: <input onChange={e => this.setState({ name: e.target.value })}/>
        <br />
        Somewhere else: <input onChange={e => this.setState({ name: e.target.value })}/>
        <br />
        Name: {this.state.name}
        <p>Controlled</p>
        Enter name: <input value={this.state.controlled} onChange={e => this.setState({ controlled: e.target.value })}/>
        <br />
        Somewhere else: <input value={this.state.controlled} onChange={e => this.setState({ controlled: e.target.value })}/>
        <br />
        Name: {this.state.controlled}
      </div>
    )
  }
}
