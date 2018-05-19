import React from 'react'

import {Card, CardText} from 'material-ui/Card';

export default class CardList extends React.Component{

	render(){

		return(

			<Card className="list">

			  <div className="aux-card">

			  	  <CardText >

				    
				    <p className="cardtext">{this.props.list.name}</p>
				  
				  
				  </CardText>

				  
			  </div>
			  
			
			</Card>

		)

		


	}
}