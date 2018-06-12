import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OriginalDataDisplay from './components/OriginalDataDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <OriginalDataDisplay />
      </div>
    );
  }
}

export default App;
