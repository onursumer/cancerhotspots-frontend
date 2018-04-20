import * as React from 'react';
import './App.css';
import CancerHotspots from "./component/CancerHotspots";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CancerHotspots />
      </div>
    );
  }
}

export default App;
