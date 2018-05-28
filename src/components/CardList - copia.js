

import {Card, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

import {createTask,getTasks,deleteTask} from '../requests/tasks.js'

import CardTask from './CardTask.js'

import { push } from 'react-router-redux'

export default class CardList extends React.Component{

	constructor(props){

		super(props)
		
		

       	this.loadTasks()

       	
		
		this.eliminateTask = this.eliminateTask.bind(this)
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


	

    

	render(){

		return(

			<Card className="list">

			  <div className="aux-card">

			  	  

				  

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