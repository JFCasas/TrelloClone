import React from 'react'



import FlatButton from 'material-ui/FlatButton';

export default class LogoutButton extends React.Component{

	render(){

		return(
			
			

      <FlatButton  label="Logout" 
                   style ={{"backgroundColor" : "#000", "color" : "#F5F5F5" }} 
                   onClick = {this.props.logout}
      />
		)
	}
}