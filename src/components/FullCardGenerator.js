import React from 'react'

import {Card, CardText, CardActions} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

export default class FullCardGenerator extends React.Component{

	constructor(props){

		super(props)
		this.createNewBoard = this.createNewBoard.bind(this)
	}

	createNewBoard(){

		const nameBoard = this.refs.nameBoardField.getValue()
		this.props.createNewBoard(nameBoard)
	}

	render(){

		return(

			<Card className = "cardgenerator" >
							  
			  <CardText >

			   	<p className="cardtext">Create a new Board</p>
			  
			  </CardText>

			  

			  <TextField 
				hintText="What shall we call the board"
				ref = 'nameBoardField'
			  />

			  <CardActions >
			      <FlatButton label="Cancel" secondary={true} 
			      			  onClick={this.props.cancelCreateNewBoard}

			      />
			      <FlatButton label="Create" primary={true} 
			      			  onClick={this.createNewBoard}
			      />
			  </CardActions>
			  

			</Card>


		)

	}
}


