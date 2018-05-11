import React from 'react'

import {

  BrowserRouter as ReactRouter,
  Route

} from 'react-router-dom';

import App from './App'

import Home from './pages/Home.js'

import Login from './pages/Login.js'

export default class Router extends React.Component {

  render(){

    return (

      <ReactRouter>

        <App>

          <Route exact path="/" component={Home}></Route>
          <Route path="/login" component={Login}></Route>

        </App>
        
      </ReactRouter>

    )
  
  }

}

