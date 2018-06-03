import React from 'react'

import {Card, CardText} from 'material-ui/Card';

export default class CardTask extends React.Component{

	
	
	constructor(props){

		super(props)
		
		const data = {
      		slug: this.props.task.slug,
      		list: this.props.task._list 
    	};

    	this.state = {

			data : data
			
		}

    }


	render(){

		return(

			<Card className="task" 

				  draggable

				  onDragStart={(e)=>this.props.onDragStart(e,JSON.stringify(this.state.data))}

				  onDragOver={(e)=>this.props.onDragOver(e)}  
				  
				  onDrop={(e)=>this.props.onDropTask(e,this.props.task.slug,this.props.task._list)}
			>

			  <div className="aux-card-task">

			  	  <div className="x">
				    
					{/*<IconButton tooltip="Delete" tooltipPosition = "bottom-left"
								
								onClick={()=>{this.props.eliminateBoard(this.props.board.slug)}}
					>
				      <ActionDelete  />
				    </IconButton>*/}

				    <span className="x"
						
						onClick={()=>{this.props.eliminateTask(this.props.task.slug)}}								
						
					>x
				      
				    </span>

				  </div>

			  	  <CardText >

				    
				    <p className="cardtext2">{this.props.task.name}</p>
				  
				  
				  </CardText>

			  </div>
			  
			
			</Card>

		)
	}
}