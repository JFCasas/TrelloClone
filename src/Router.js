import React from 'react'

import {

  BrowserRouter as ReactRouter,
  Route

} from 'react-router-dom';

import App from './App'

import Dashboard from './pages/Dashboard.js'
import Home from './pages/Home.js'
import Login from './pages/Login.js'
import Signup from './pages/Signup.js'

const userLoggedIn = true;

export default class Router extends React.Component {

  home(){

    if (userLoggedIn) return Dashboard
    return Home
  }

  render(){

    return (

      <ReactRouter>

        <App>

          <Route exact path="/" component={this.home()}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>

        </App>
        
      </ReactRouter>

    )
  
  }

}

