import React from 'react'

import {Card, CardText, CardActions} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

export default class FullCardGenerator extends React.Component{

	render(){

		return(

			<Card className = "cardgenerator" >
							  
			  <CardText >

			   	<p className="cardtext">Create a new Board</p>
			  
			  </CardText>

			  

			  <TextField 
				hintText="What shall we call the board"
			  />

			  <CardActions >
			      <FlatButton label="Cancel" secondary={true} onClick={this.props.changeCardGenerator2}  />
			      <FlatButton label="Create" primary={true}/>
			  </CardActions>
			  

			</Card>


		)

	}
}