import React from 'react'

import FlatButton from 'material-ui/FlatButton';

import {Link} from 'react-router-dom'

export default class LoginButton extends React.Component{

	render(){

		return(

			<Link to="/login">

				<FlatButton  label="Login" 
							style ={{"backgroundColor" : "#000", "color" : "#F5F5F5" }} />
				

			</Link>


			
		)
	}
}