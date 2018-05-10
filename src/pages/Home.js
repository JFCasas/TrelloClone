import React from 'react'

import {Card, CardText, CardActions} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import FullCardGenerator from '../components/FullCardGenerator'
import PartialCardGenerator from '../components/PartialCardGenerator'

export default class Home extends React.Component{

	constructor(props){

		super(props)

		this.state = {

			fullCardGenerator : false
		}

		this.choiceCardGenerator = this.choiceCardGenerator.bind(this)

		this.changeCardGenerator = this.changeCardGenerator.bind(this)
		this.changeCardGenerator2 = this.changeCardGenerator2.bind(this)
	}

	choiceCardGenerator(){

		if (this.state.fullCardGenerator ) {

			return <FullCardGenerator changeCardGenerator2={this.changeCardGenerator2}></FullCardGenerator>
		}
		return <PartialCardGenerator changeCardGenerator={this.changeCardGenerator}></PartialCardGenerator>
	}

	changeCardGenerator(){

		this.setState({

        	fullCardGenerator: true
      
      	})

    }

	changeCardGenerator2(){

		this.setState({

        	fullCardGenerator: false
      
      	})

    }

	render(){

		return(

			<div className="container" >

				<div className="row ">

					<div className="col-xs-12 col-sm-12 col-md-12">

						<div className="inicio">

							<h3>Inicio</h3>
								

						</div>

					</div>

				</div>

				<div className="row" style={{"marginTop":"5em"}}>

					<div className="col-xs-12 col-sm-12 col-md-12">

						<div className="dashboard">

							{this.choiceCardGenerator()}

							<Card className = "card">
							  
							  <CardText >

							    
							    <p className="cardtext">New Board</p>
							  
							  </CardText>
							
							</Card>


						</div>

					</div>

				</div>
			
			</div>


		)
	}
}