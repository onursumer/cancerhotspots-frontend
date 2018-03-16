import * as React from 'react';
import './App.css';
import Home from './component/Home';
const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Cancer Hotspots</h1>
        </header>
        <Home />
      </div>
    );
  }
}

export default App;
