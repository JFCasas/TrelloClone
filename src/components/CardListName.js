import React from 'react'

import {Card, CardText} from 'material-ui/Card';

export default class CardListName extends React.Component{

	render(){

		return(

			<Card className="board">

				<CardText >

					<p className="cardtext">{this.props.listName}</p>

	    			
	  			</CardText>

			</Card>


		)
	}
}