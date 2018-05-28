import React from 'react'

import {Card, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

import {createTask,getTasks,deleteTask} from '../requests/tasks.js'

import CardTask from './CardTask.js'

import { push } from 'react-router-redux'

export default class CardList extends React.Component{

	constructor(props){

		super(props)
		//console.log(props.user.jwt)
		//console.log(props.slugboard)
		this.state = {

       		tasks: []
       		
       	}

       	this.loadTasks()

       	
		this.createNewTask = this.createNewTask.bind(this)
		this.eliminateTask = this.eliminateTask.bind(this)
	}
	

	createNewTask(){

		const data = {

      		name : this.nameTaskField.getValue(),
      		_dashboard : this.props.list._dashboard,
      		_list : this.props.list._id
      		
    	}

    	//console.log(data)

    	//const slug = this.props.match.params.slug

    	createTask(data,this.props.user.jwt).then((response)=>{

	      	//console.log(response)

	      	//console.log(slug)
			
			this.loadTasks()

			this.props.dispatch(push('/'))
			let slugboard = this.props.slugboard

			this.props.dispatch(push('/dashboards/' + slugboard))

			
	    }).catch((error)=>{

	      console.log(error)
	    })

	}

	eliminateTask(slug){

		deleteTask(slug,this.props.user.jwt).then((response)=>{

			//console.log(response)

			this.loadTasks()
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
    					  eliminateTask = {this.eliminateTask}
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

				    
				    <p className="cardtext1">{this.props.list.name}</p>
				  
				  
				  </CardText>

				  

				  <div className = "task-texfield">

				  	<TextField style={{"marginBottom":"2em"}}
					hintText="add a Task"
					
					onKeyPress={ (e) => this.onKeyPress1(e) }

					ref= {el => this.nameTaskField = el}

					/>
				  	

				    {this.tasks()}


				  </div>

				  
			   
			   </div>
			  
			
			</Card>

		)

	}
}