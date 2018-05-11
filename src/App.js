import React, { Component } from 'react';

import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import MyAppBar from './components/MyAppBar'

class App extends Component {
  render() {
    return (

      <MuiThemeProvider>

      	<div>

      		<MyAppBar></MyAppBar>
        	{this.props.children}
      		

      	</div>
      
      	

      </MuiThemeProvider>
    );
  }
}

export default App;
