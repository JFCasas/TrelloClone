import React from 'react'

import {Card, CardText} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import ActionDelete from 'material-ui/svg-icons/action/delete';



export default class CardBoard extends React.Component{

	render(){

		return(

			<Card className="card">

			  <div className="aux-card">

			  	  <div className="x">
				    
					<IconButton tooltip="Delete" tooltipPosition = "bottom-left"
								
								onClick={()=>{this.props.eliminateBoard(this.props.board.slug)}}
					>
				      <ActionDelete  />
				    </IconButton>

				  </div>

			  	  
				  <CardText >

				    
				    <p className="cardtext">{this.props.board.name}</p>
				  
				  
				  </CardText>

				  
			  </div>
			  
			
			</Card>


		)
	}
}