import React, { Component } from 'react';

import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import MyAppBar from './components/MyAppBar'

import { withRouter } from 'react-router-dom'

class App extends Component {
  
  constructor(props){

    super(props)

    this.goHome = this.goHome.bind(this)

    console.log(props)
  }
  

  goHome(){

    this.props.history.push('/')
  }


  render() {
    return (

      <MuiThemeProvider>

      	<div>

      		<MyAppBar goHome= {this.goHome}></MyAppBar>
        	{this.props.children}
      		

      	</div>
      
      	

      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);
