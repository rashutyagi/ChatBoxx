import React, { Component } from 'react';
import InputComponent from './Components/inputComponent';
import OutputComponent from './Components/outputcomponent';
class App extends Component {
  render() {
    return (
      <div>
        <h1>ChatBoxx</h1>
        <InputComponent />
        <OutputComponent />
      </div>
    );
  }
}

export default App;
