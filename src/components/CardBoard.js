import React from 'react'

import {Card, CardText} from 'material-ui/Card';
//import IconButton from 'material-ui/IconButton';
//import FontIcon from 'material-ui/FontIcon';
//import ActionDelete from 'material-ui/svg-icons/action/delete';

import { Link } from 'react-router-dom'

export default class CardBoard extends React.Component{

	render(){

		return(

			<Card className="card">

			  <div className="aux-card">

			  	  <div className="x">
				    
					{/*<IconButton tooltip="Delete" tooltipPosition = "bottom-left"
								
								onClick={()=>{this.props.eliminateBoard(this.props.board.slug)}}
					>
				      <ActionDelete  />
				    </IconButton>*/}

				    <span className="x"
								
						onClick={(e)=>{this.props.eliminateBoard(this.props.board.slug)}}
					>x
				      
				    </span>

				  </div>

			  	  <Link to = {"/dashboards/" + this.props.board.slug} style={{"textDecoration": "none"}}>
				  	
				  	<CardText >

				    
				    	<p className="cardtext">{this.props.board.name}</p>
				  
				  
				  	
				  	</CardText>
				  
				  </Link>
				  
			  </div>
			  
			
			</Card>


		)
	}
}