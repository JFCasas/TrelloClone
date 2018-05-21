import React from 'react'

import {Card, CardText} from 'material-ui/Card';

export default class CardTask extends React.Component{

	render(){

		return(

			<Card className="task">

			  <div className="aux-card">

			  	  <div className="x">
				    
					{/*<IconButton tooltip="Delete" tooltipPosition = "bottom-left"
								
								onClick={()=>{this.props.eliminateBoard(this.props.board.slug)}}
					>
				      <ActionDelete  />
				    </IconButton>*/}

				    <span className="x"
								
						
					>x
				      
				    </span>

				  </div>

			  	  <CardText >

				    
				    <p className="cardtext">{this.props.task.name}</p>
				  
				  
				  </CardText>

			  </div>
			  
			
			</Card>

		)
	}
}