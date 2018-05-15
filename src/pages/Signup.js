import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {orange500,grey900 } from 'material-ui/styles/colors';


import {

  Link
  

} from 'react-router-dom';

import { signUp } from '../requests/auth'



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

export default class Signup extends React.Component {

	constructor(props){

    super(props)

    this.createAccount = this.createAccount.bind(this)
  }

  createAccount(){

    const credentials = {

      email : this.refs.emailField.getValue(),
      password : this.refs.passwordField.getValue()
    
    }


    signUp(credentials).then((response)=>{

      //console.log(response)
    
    }).catch((error)=>{

      console.log(error)
    })

  }


  render(){

		return (

			<div className = "formulario" >

				

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

		          <RaisedButton label="Signup" secondary={true} 
		            style = {{"width" : "10vw", "marginTop" : "5em"}}
                onClick = {this.createAccount}
		            
		          />

		          <Link to="/login" style={{"textDecoration": "none", "marginLeft" : "2em", "color" : grey900}}>I already have an account</Link>
		      
		        </div>
		      
		    </div>
		)
	}

}