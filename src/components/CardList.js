import React from 'react'

import {Card, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

import {createTask,getTasks} from '../requests/tasks.js'

import CardTask from './CardTask.js'

export default class CardList extends React.Component{

	constructor(props){

		super(props)
		//console.log(props.user.jwt)
		this.state = {

       		tasks: []
       		
       	}

       	this.loadTasks()

       	
		this.createNewTask = this.createNewTask.bind(this)
	}
	

	createNewTask(){

		const data = {

      		name : this.refs.nameTaskField.getValue(),
      		_dashboard : this.props.list._dashboard,
      		_list : this.props.list._id
      		
    	}

    	//console.log(data)

    	//const slug = this.props.match.params.slug

    	createTask(data,this.props.user.jwt).then((response)=>{

	      	//console.log(response)

	      	//console.log(slug)
			
			this.loadTasks()

			
	    }).catch((error)=>{

	      console.log(error)
	    })

	}

	loadTasks(){

    	getTasks(this.props.user.jwt,this.props.list.slug).then((jsonR)=>{

	      //console.log(jsonR);

	      this.setState({

	        tasks : jsonR
	      
	      })

	    })
	   
    }

    tasks(){

    	return this.state.tasks.map((task,index)=>{

    		return(

    			<CardTask task = {task} key= {index} 
    			>
    				
				</CardTask>
				
				

    		)
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

				  	<TextField style={{"marginBottom":"2em"}}
					hintText="add a Task"
					ref = 'nameTaskField'
					onKeyPress={ (e) => this.onKeyPress1(e) }

					/>
				  	

				    {this.tasks()}


				  </div>

				  
			   
			   </div>
			  
			
			</Card>

		)

	}
}