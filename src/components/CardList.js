import React from 'react'

import {Card, CardText} from 'material-ui/Card';

export default class CardList extends React.Component{

	render(){

		return(

			<Card className="list">

			  <div className="aux-card">

			  	  <div className="x">
				    
					{/*<IconButton tooltip="Delete" tooltipPosition = "bottom-left"
								
								onClick={()=>{this.props.eliminateBoard(this.props.board.slug)}}
					>
				      <ActionDelete  />
				    </IconButton>*/}

				    <span className="x"
								
						onClick={()=>{this.props.eliminateList(this.props.list.slug)}}	
					>x
				      
				    </span>

				  </div>

			  	  <CardText >

				    
				    <p className="cardtext">{this.props.list.name}</p>
				  
				  
				  </CardText>

				  
			  </div>
			  
			
			</Card>

		)

		


	}
}