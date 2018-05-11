import React from 'react';

import AppBar from 'material-ui/AppBar';

export default class MyAppBar extends React.Component {

  render(){

    return (

      <AppBar
          
          title="TrelloClone"

          style ={{"backgroundColor" : "#000" }}

          showMenuIconButton = {false}

          titleStyle ={{"color" : "#F5F5F5"}}
          
      />

    )
  }

}