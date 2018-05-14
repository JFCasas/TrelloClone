import React from 'react'

import {Card, CardText} from 'material-ui/Card';



export default class CardBoard extends React.Component{

	render(){

		return(

			<Card className = "card">
							  
			  <CardText >

			    
			    <p className="cardtext">{this.props.board.name}</p>
			  
			  
			  </CardText>
			
			</Card>


		)
	}
}