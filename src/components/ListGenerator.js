import React from 'react'

import {Card} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

export default class ListGenerator extends React.Component{

	constructor(props){

		super(props)

		this.state = {

       		nameList: ""
       		
       	}
	}
	

	createNewList(){

		

		const nameList = this.state.nameList

		console.log(nameList)
		
		/*if(nameList){

			this.props.createList(nameList)
		
		}else{

			alert("Debes de proporcionar un nombre")
		} */

		
	}

	onKeyPress1 = (e) => {
        
        if(e.key === 'Enter'){
            
            this.setState({nameList: e.target.value})
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
					
				/>

				<input type="text"  value={this.state.nameList}

					onKeyPress={ (e) => this.onKeyPress1(e) }

				/>
			
			</Card>

		)
	}
}