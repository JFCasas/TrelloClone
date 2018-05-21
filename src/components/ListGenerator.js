import React from 'react'

import {Card} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

export default class ListGenerator extends React.Component{

	createNewList(){

		const nameList = this.refs.nameListField.getValue()
		
		if(nameList){

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
					ref = 'nameListField'
					onKeyPress={ (e) => this.onKeyPress1(e) }

				
				/>
			</Card>

		)
	}
}