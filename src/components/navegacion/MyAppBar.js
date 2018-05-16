import React from 'react';

import AppBar from 'material-ui/AppBar';

import LoginButton from './LoginButton'

import LogoutButton from './LogoutButton'

export default class MyAppBar extends React.Component {

  /*setTitle(){

    if (this.props.user.jwt){

      return "TrelloClone " + this.getName()
    
    }else{

      return "TrelloClone"
    }
  }

  getName(){

    return this.props.user.email.split('@')[0]
  }*/



  render(){

    return (

      <AppBar
          
          title= "TrelloClone"

          style ={{"backgroundColor" : "#000", "cursor":"pointer" }}

          showMenuIconButton = {false}

          titleStyle ={{"color" : "#F5F5F5"}}

          onTitleClick={this.props.goHome}

          iconElementRight={this.props.user.jwt ? <LogoutButton logout = {this.props.logout} /> : <LoginButton/>}
          
      />

    )
  }

}