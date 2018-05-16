import React from 'react'

import {Card, CardText} from 'material-ui/Card';



export default class CardBoard extends React.Component{

	render(){

		return(

			<Card className="card">

			  <div className="aux-card">

			  	  <span className="x" 
			  	  		onClick={this.props.eliminateBoard(this.props.board.slug)}
			  	  >x
			  	  </span>			  
			  
				  <CardText >

				    
				    <p className="cardtext">{this.props.board.name}</p>
				  
				  
				  </CardText>

				  
				  	

			  </div>
			  
			
			</Card>


		)
	}
}