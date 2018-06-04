import React from 'react'

import {Card, CardText} from 'material-ui/Card';


import CardTask from '../components/CardTask.js'

export default class CardList extends React.Component{

	
	onKeyPress1 = (e) => {

		let nameTaskField = this.nameTaskField.value

		//console.log(nameTaskField)
        
        if(e.key === 'Enter'){

        	this.props.createNewTask(nameTaskField)
            this.nameTaskField.value = ""
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
    					  onDragStart = {this.props.onDragStart}
    			>
    				
				</CardTask>
				
			)
    	})
    }

	render(){

		return(

			<Card className="list"

				  onDragOver={(e)=>this.props.onDragOver(e)}  
				  onDrop={(e)=>{this.props.onDrop(e)}}

			>

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

				  	<input style={{"marginBottom":"2em"}}
						
						placeholder = "add a Task"
					
						onKeyPress={ (e) => this.onKeyPress1(e) }

						ref= {el => this.nameTaskField = el}

						className = "inputt-task"

					/>

					{this.tasks()}
				  	
				  </div>

				  
			   
			   </div>
			  
			
			</Card>

			

		)

	}
}