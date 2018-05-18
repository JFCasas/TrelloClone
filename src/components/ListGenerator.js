import React from 'react'

import {Card} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

export default class ListGenerator extends React.Component{

	render(){

		return(

			<Card style={{"padding":"2em"}}>
				
				<TextField 
				hintText="add a List"
				ref = 'nameListField'
				/>
			
			</Card>

		)
	}
}