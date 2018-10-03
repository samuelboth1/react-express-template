import React, { Component } from 'react';
import Customers from './components/customers/customers.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Customers />
      </div>
    );
  }
}

export default App;
