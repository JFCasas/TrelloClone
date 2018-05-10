import React, { Component } from 'react';

import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './pages/Home.js'

class App extends Component {
  render() {
    return (

      <MuiThemeProvider>
      
      	<Home></Home>

      </MuiThemeProvider>
    );
  }
}

export default App;
