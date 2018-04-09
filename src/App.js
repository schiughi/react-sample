import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import logo from './logo.svg';
import './dist/index.css';
import './App.css';
import Search from './Search';
import UserList from './Search/UserList';
import User from './Search/User';

class App extends Component {
  render() {
    const stores = {
      userList: new UserList()
    };
    stores.userList.users.push(
      new User({ name: 'John Smith', age: 22, isOnline: false }),
      new User({ name: 'Thomas Monson', age: 55, isOnline: true })
    );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Provider {...stores}>
          <Search />
        </Provider>
      </div>
    );
  }
}

export default App;
