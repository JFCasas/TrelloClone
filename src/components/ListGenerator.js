import React from 'react'

import {Card} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

export default class ListGenerator extends React.Component{


	

	createNewList(){

		const nameList = this.inputEntry.value

		//console.log(nameList)

		//console.log(this.inputEntry)
		
		if(nameList !== ""){

			this.props.createList(nameList)
			this.inputEntry.value = ""
			
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
				
				<input 

          			type="text"

          			className = "inputt"
          
          			onKeyPress={ (e) => this.onKeyPress1(e) }

          			ref= {el => this.inputEntry = el}

          			placeholder = "add a List"

         		/>

				
			
			</Card>

		)
	}
}