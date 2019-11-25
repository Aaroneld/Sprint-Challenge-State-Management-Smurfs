import React, { Component } from "react";
import "./App.css";
import DisplaySmurfs from './DisplaySmurfs';
import GetSmurfs from './GetSmurfs';
import ChangeSmurf from './ChangeSmurf';
import { Reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  .App {

      margin: 1% 5%;
      border: 2px solid black;

      h1 {

        font-weight: bold;
        font-size: 150%;
        margin: 2% 0;
      }

     

  }

`;

class App extends Component {
  render() {
    return (
     
      <div className="App">
        < Reset />
        < GlobalStyle />
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <GetSmurfs />
        <ChangeSmurf />
        <DisplaySmurfs />
      </div>
    );
  }
}

export default App;
