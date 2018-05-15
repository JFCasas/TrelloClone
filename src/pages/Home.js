import React from 'react'

import FlatButton from 'material-ui/FlatButton';

import {Link} from 'react-router-dom'

export default class Home extends React.Component{

	render(){

		return(

			<div className="container" >

				

				<div className="row" style={{"marginTop":"5em"}}>

					<div className="col-xs-12 col-sm-12 col-md-12">

						<div className="home">

							<h2>What you will learn from building a trello clone:</h2>

							<p>Routing</p>
							<p>Drag and drop</p>
							<p>Creating new objects (boards, lists, cards)</p>
							<p>Handling inputs and validation</p>
							<p>Client side path: How to use local storage, saving data to the local storage, reading data from the local storage.</p>
							<p>Server side path: How to use databases, saving data to the database, reading data from the database.</p>

							<Link to = "/signup" >

								<div style = {{"marginTop" : "2em"}}>
								
									<FlatButton label="Create an Account" secondary={true} />

								</div>
								

							</Link>

						</div>

					</div>

				</div>
			
			</div>

			

		)
	}
}