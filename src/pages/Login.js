import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {orange500,grey900 } from 'material-ui/styles/colors';


import {

  Link
  

} from 'react-router-dom';

import { login } from '../requests/auth'

const styles = {
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: grey900,
  },
  floatingLabelStyle: {
    color: grey900,
  },
  
};

export default class Login extends React.Component {

	
  constructor(props){

    super(props)

    this.requestAuth = this.requestAuth.bind(this)

  }

  requestAuth(){

    const credentials = {

      email : this.refs.emailField.getValue(),
      password : this.refs.passwordField.getValue()
    
    }

    login(credentials).then((response)=>{

      console.log(response)
    
    }).catch((error)=>{

      console.log(error)
    })

  }


  render(){

		return (

			<div className = "formulario" style ={{'backgroundImage' : "url("+process.env.PUBLIC_URL + '/images/pexels-photo-935871.jpeg'+")"}} >

				

		    <div >

					<TextField 
      				
      					floatingLabelText="Email"
      					type="email"
      					style = {{"width" : "30vw"}}
      					underlineStyle={styles.underlineStyle}
      					underlineFocusStyle={styles.underlineStyle}
      					floatingLabelStyle={styles.floatingLabelStyle}
                ref = 'emailField'
    				/>
							

				</div>

				<div >

					<TextField 
      				
      					floatingLabelText="Password"
      					type="password"
      					style = {{"width" : "30vw", "marginTop" : "5em"}}
      					underlineStyle={styles.underlineStyle}
      					underlineFocusStyle={styles.underlineStyle}
      					floatingLabelStyle={styles.floatingLabelStyle}
                ref = "passwordField"
    				/>
					

				</div>

				<div >

		          <RaisedButton label="Login" secondary={true} 
		            style = {{"width" : "10vw", "marginTop" : "5em"}}
		            onClick = {this.requestAuth}
		          />

		          <Link to="/signup" style={{"textDecoration": "none", "marginLeft" : "2em", "color" : grey900}}>I do not have an account</Link>
		      
		        </div>
		      
		    </div>
		)
	}

}



