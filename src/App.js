import React from 'react';
import './App.css';

class CompanyName extends React.Component {
  render() {
    const className = this.props.highlight ? 'highlight' : 'non-highlight';
    return (
      <li className={className}>
        {this.props.company}
      </li>
    )
  }
}

// Name component
class Name extends React.Component {
  render() {
    let convictionMessage;
    if (this.props.convinctions) {
      convictionMessage = 'You have convinctions, you naughty boy';
    } else {
      convictionMessage = 'No convictions, good job!';
    }
    return (
      <div className='profile'>
        <p>First Name: {this.props.firstName}</p>
        <p>Last Name: {this.props.lastName}</p>
        <p>Age: {this.props.age}</p>
        <p>{convictionMessage}</p>
        <p>Driving License: {this.props.drivingLicense ? 'True' : 'False'}</p>
        <p>Previous companies</p>
        <ol>
          {this.props.previousCompanies.map((company) => {
            return (
              <CompanyName
                key={company}
                company={company}
                highlight={company === this.props.currentCompany}
              />
            )
          })}
        </ol>
        <b>Mother</b>
        <p>Name: {this.props.mother.name}</p>
        <p>Occupation: {this.props.mother.occupation}</p>
        <button onClick={this.props.onClick}>Click me!</button>
      </div>
    )
  }
}

// App component
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      name: '',
      surname: '',
      age: '',
      drivingLicense: ''
    }
  }

  render() {
    return (
      <div>
        <h1>Your Online ID Card!</h1>
        <h2>Enter your details below for a shiny new ID card!</h2>
        <p>First Name: <input onChange={e => this.setState({ name: e.target.value })} /></p>
        <p>Surname: <input onChange={e => this.setState({ surname: e.target.value })} /></p>
        <p>Age: <input onChange={e => this.setState({ age: e.target.value })} /></p>
        <p>Driving License?<form>
          <input type="radio" name="drv" value={true} onChange={e => this.setState({ drivingLicense: e.target.value })} /> Yes
          <input type="radio" name="drv" value={false} onChange={e => this.setState({ drivingLicense: e.target.value })} /> No
        </form></p>
        <Name
          firstName={this.state.name}
          lastName={this.state.surname}
          age={this.state.age}
          convinctions={false}
          drivingLicense={this.state.drivingLicense}
          previousCompanies={['Cirrus', 'Beatroot', 'LADbible', 'BRIGHTHR']}
          mother={{ name: 'Maria Towli', occupation: 'Teacher' }}
          currentCompany="BRIGHTHR"
          onClick={() => {
            alert('DISSGUYYYY');
          }}
        />
      </div>
    );
  }
}

export default App;
