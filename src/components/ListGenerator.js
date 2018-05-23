import React from 'react'

import {Card} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

export default class ListGenerator extends React.Component{

	constructor(props){

		super(props)

		
	}
	

	createNewList(){

		
		
		const nameList = this.inputEntry.getValue()

		//console.log(nameList)
		
		if(nameList !== ""){

			this.props.createList(nameList)
		
		}else{

			alert("Debes de proporcionar un nombre")
		} 


	}

	onKeyPress1 = (e) => {
        
        if(e.key === 'Enter'){
            
            
            this.createNewList()
            
        }
    }


	render(){

		return(

			<Card style={{"padding":"2em"}} className = "listgenerator" >
				  
			>
				
				<TextField

					hintText="add a List"
					
					onKeyPress={ (e) => this.onKeyPress1(e) }

					ref= {el => this.inputEntry = el}
					
				/>

				
			
			</Card>

		)
	}
}