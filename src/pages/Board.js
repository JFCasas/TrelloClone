import React from 'react'

import {Card, CardText} from 'material-ui/Card';

import ListGenerator from '../components/ListGenerator'

import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'

import {getBoard} from '../requests/dashboards.js'

class Board extends React.Component{

	constructor(props){

		super(props)
		const slug = props.match.params.slug
		this.state = {

       		board: {}
       	}

       	this.loadBoard(slug)
	
	}

	loadBoard(slug){

		getBoard(slug).then((jsonR)=>{

			console.log(jsonR)

			this.setState({

        		board : jsonR
      
      		})
		})

	}

	render(){

		return(

			<div className="container" >

				

				<div className="row" style={{"marginTop":"5em"}}>

					<div className="col-xs-12 col-sm-12 col-md-12">

						<Card className="board">

							<CardText >

				    			<p className="cardtext">{this.state.board.name}</p>
				  
				  			</CardText>

						</Card>

					</div>

				</div>

				<div className="row" style={{"marginTop":"5em"}}>

					<div className="col-xs-12 col-sm-12 col-md-12">

						<div className="dashboard">

							<ListGenerator></ListGenerator>

							


						</div>

					</div>

				</div>
			
			</div>

		)
	}

}

function mapStateToProps(state,ownProps){

	return {

		user: state.user
	}
}

export default connect(mapStateToProps)(withRouter(Board))