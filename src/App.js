import React, { Component } from 'react';
import logo from './logo.svg';
import './dist/index.css';
import './App.css';
import Search from './Search';

class App extends Component {
  render() {
    const data = [
      { id: 1, name: 'Thor Odinson', comment: 'Earth\'s Mightiest Heroes joined forces to take on threats...' },
      { id: 2, name: 'Bruce Banner', comment: 'The Strategic Homeland Intervention, Enforcement, and Logistics Division...' },
      { id: 3, name: 'Tony Stark', comment: 'Wow' },
      { id: 4, name: 'Steve Rogers', comment: '...' },
      { id: 5, name: 'Natasha Romanoff', comment: '' }
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Search data={data} />
      </div>
    );
  }
}

export default App;
