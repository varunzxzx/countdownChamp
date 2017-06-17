import React, { Component } from 'react';
import Clock from './Clock.jsx';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      deadline: 'December 15, 2017',
      newDeadline: ''
    }
  }

  updateDate() {
    this.setState({deadline: this.state.newDeadline});
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">
          <h1>Countdown to {this.state.deadline}</h1>
        </div>
        <Clock deadline={this.state.deadline} />
        <div className="form">
          <input type="text" onChange={event => this.setState({newDeadline: event.target.value})} />
          <button onClick={() => this.updateDate()}>Submit</button>
        </div>
      </div>
    )
  }
}

export default App;
