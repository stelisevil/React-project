import React from 'react';
import './style.css';

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
        <button onClick={this.props.changeDrivingLicense}>Click Me</button>
        <button onClick={this.props.moveToNextCompany}>Go to next company</button>
      </div>
    )
  }
}

// Main component
class Main extends React.Component {

  constructor() {
    super();
    this.state = {
      name: '',
      surname: '',
      age: '',
      currentCompany: 0,
      drivingLicense: true
    }
  }

  render() {
    const companies = ['Cirrus', 'Beatroot', 'LADbible', 'BRIGHTHR'];
    return (

      <div>
        <h1>Your Online ID Card!</h1>
        <h2>Enter your details below for a shiny new ID card!</h2>
        <p>First Name: <input onChange={e => this.setState({ name: e.target.value })} /></p>
        <p>Surname: <input onChange={e => this.setState({ surname: e.target.value })} /></p>
        <p>Age: <input onChange={e => this.setState({ age: e.target.value })} /></p>
        <p>Driving License?</p>

        True <input type='radio' checked={this.state.drivingLicense} name='driving' onChange={() => {this.setState({ drivingLicense: true })}} />
        False <input type='radio' checked={!this.state.drivingLicense} name='driving' onChange={() => {this.setState({ drivingLicense: false })}} />

        <Name
          firstName={this.state.name}
          lastName={this.state.surname}
          age={this.state.age}
          convinctions={false}
          drivingLicense={this.state.drivingLicense}
          previousCompanies={companies}
          mother={{ name: 'Maria Towli', occupation: 'Teacher' }}
          currentCompany={companies[this.state.currentCompany]}
          changeDrivingLicense={() => {
            this.setState({ drivingLicense: !this.state.drivingLicense})
          }}
          moveToNextCompany={() => {
            let nextCompany = this.state.currentCompany + 1;
            if (nextCompany === companies.length) {
              nextCompany = 0;
            }
            this.setState({ currentCompany: nextCompany })
          }}
        />

      </div>
    );
  }
}

export default Main;
