import React, { Component } from 'react';
import logo from './logo.svg';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <p>
          Type in the name of the film here:   
          <input id = "name" name="name" type="text"/> 
            <button type="submit" onclick="">Get film</button>
          </p>
         
        </header>
      </div>
    );
  }
}

export default App;
