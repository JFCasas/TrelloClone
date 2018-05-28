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
		
		if(nameBoard){

			this.props.createNewBoard(nameBoard)
		
		}else{

			alert("Debes de proporcionar un nombre")
		} 

		
	}

	onKeyPress1 = (e) => {

		let nameBoard = this.refs.nameBoardField.getValue()

		//console.log(nameTaskField)
        
        if(e.key === 'Enter'){

        	this.props.createNewBoard(nameBoard)
            
        }

        
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

				onKeyPress={ (e) => this.onKeyPress1(e) }
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


