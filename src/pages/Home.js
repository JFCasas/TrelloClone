import React from 'react'

import {Card, CardText} from 'material-ui/Card';




export default class Home extends React.Component{

	render(){

		return(

			<div class="container" >

				<div class="row ">

					<div class="col-xs-12 col-sm-12 col-md-12">

						<div class="inicio">

							<h3>Inicio</h3>
								

						</div>

					</div>

				</div>

				<div class="row" style={{"marginTop":"5em"}}>

					<div class="col-xs-12 col-sm-12 col-md-12">

						<div class="dashboard">

							<Card class = "cardgenerator">
							  
							  <CardText >

							   	<p class="cardtext">Create a new Board</p>
							  
							  </CardText>
							
							</Card>

							

							<Card class = "card">
							  
							  <CardText >

							    
							    <p class="cardtext">New Board</p>
							  
							  </CardText>
							
							</Card>


						</div>

					</div>

				</div>
			
			</div>


		)
	}
}