import React from 'react'

import {Card, CardText} from 'material-ui/Card';


export default class PartialCardGenerator extends React.Component{

	render(){

		return(

			<Card className = "card" onClick={this.props.changeCardGenerator}>
							  
			  <CardText >

			   	<p className="cardtext">Create a new Board</p>
			  
			  </CardText>

			</Card>


		)

	}
}