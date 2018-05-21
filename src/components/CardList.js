import React from 'react'

import {Card, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

import {createTask} from '../requests/tasks.js'

export default class CardList extends React.Component{

	constructor(props){

		super(props)
		//console.log(props.user.jwt)
		this.createNewTask = this.createNewTask.bind(this)
	}
	

	createNewTask(){

		const data = {

      		name : this.refs.nameTaskField.getValue(),
      		_dashboard : this.props.list._dashboard,
      		_list : this.props.list._id
      		
    	}

    	console.log(data)

    	//const slug = this.props.match.params.slug

    	createTask(data,this.props.user.jwt).then((response)=>{

	      	console.log(response)

	      	//console.log(slug)
			
			//this.loadlists(slug)

			
	    }).catch((error)=>{

	      console.log(error)
	    })

	}


	onKeyPress1 = (e) => {
        
        if(e.key === 'Enter'){
            this.createNewTask()
            
        }
    }

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

				  <div className = "task-texfield">

				  	<TextField 
					hintText="add a Task"
					ref = 'nameTaskField'
					onKeyPress={ (e) => this.onKeyPress1(e) }

				
				  	/>
				  	

				  </div>

				  
			   
			   </div>
			  
			
			</Card>

		)

	}
}