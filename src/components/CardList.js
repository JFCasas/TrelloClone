import React from 'react'

import {Card, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

import CardTask from '../components/CardTask.js'

export default class CardList extends React.Component{

	
	onKeyPress1 = (e) => {

		let nameTaskField = this.nameTaskField.getValue()

		//console.log(nameTaskField)
        
        if(e.key === 'Enter'){

        	this.props.createNewTask(nameTaskField)
            
        }
    }

    tasks(){

    	

    	//console.log(this.props.tasks)

    	//console.log(this.props.list)

    	let tasksByList = this.props.tasks.filter((element)=>{

    		return element._list === this.props.list._id
    	})

    	//console.log(tasksByList)

    	return tasksByList.map((task,index)=>{

    		return(

    			<CardTask task = {task} key= {index} 
    					  eliminateTask = {this.props.eliminateTask}
    			>
    				
				</CardTask>
				
			)
    	})
    }

	render(){

		return(

			<Card className="list">

			  <div className="aux-card">

			  	  <div className="x">
				    
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