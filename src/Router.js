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

import { connect } from 'react-redux'

import { ConnectedRouter } from 'react-router-redux'

//const userLoggedIn = false;

class Router extends React.Component {

  home(){

    if (this.props.user.jwt) return Dashboard
    return Home
  }

  render(){

    return (

      <ConnectedRouter history={this.props.history}>

        <App>

          <Route exact path="/" component={this.home()}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>

        </App>
        
      </ConnectedRouter>

    )
  
  }

}

function mapStateToProps(state,ownProps){

  return {

    user: state.user
  }
}

export default connect(mapStateToProps)(Router)

