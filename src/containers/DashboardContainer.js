import React from 'react'

import { connect } from 'react-redux'

import Dashboard from '../pages/Dashboard.js'

import FullCardGenerator from '../components/FullCardGenerator'
import PartialCardGenerator from '../components/PartialCardGenerator'
import Error from '../components/Error'


import * as actions from '../actions/boardsActions'

class DashboardContainer extends React.Component{

	constructor(props){

		super(props)

		this.state = {

			fullCardGenerator : false,
			
		}

		this.loadboards()
		
		this.choiceCardGenerator = this.choiceCardGenerator.bind(this)
		this.showCreateNewBoard = this.showCreateNewBoard.bind(this)
		this.cancelCreateNewBoard = this.cancelCreateNewBoard.bind(this)
		
		this.createNewBoard = this.createNewBoard.bind(this)
		this.eliminateBoard = this.eliminateBoard.bind(this)
		this.displayError = this.displayError.bind(this)
		
	}

	choiceCardGenerator(){

		if (this.state.fullCardGenerator ) {

			return <FullCardGenerator 
						cancelCreateNewBoard={this.cancelCreateNewBoard}
						createNewBoard={this.createNewBoard}>
					
				   </FullCardGenerator>
		}
		return <PartialCardGenerator showCreateNewBoard={this.showCreateNewBoard}></PartialCardGenerator>
	}

	showCreateNewBoard(){

		this.setState({

        	fullCardGenerator: true
      
      	})

    }

	cancelCreateNewBoard(){

		this.setState({

        	fullCardGenerator: false
      
      	})

    }
	
	createNewBoard(nameBoard){


    	const data = {

      		name : nameBoard
      		
    	}

		this.props.dispatch(actions.addDasboard(data))

		this.setState({

        	fullCardGenerator: false
      
      	})

	    
	}

	loadboards(){

    	this.props.dispatch(actions.loadAll())
	   
    }

    eliminateBoard(slug){

		this.props.dispatch(actions.deleteDasboard(slug))
	}

	displayError(){

		if (this.props.error){

			//console.log(this.props.error)

			return(

				<Error 

					error= {this.props.error}

				> 

				</Error>

			) 
		}
	}


	render(){

		return(

			<Dashboard

				createNewBoard = {this.createNewBoard}

				boards = {this.props.boards}

				eliminateBoard = {this.eliminateBoard}

				choiceCardGenerator = {this.choiceCardGenerator}

				error = {this.props.error}

				displayError = {this.displayError}

			></Dashboard>


		)
	}
}

function mapStateToProps(state,ownProps){

	return {

		user: state.user,
		boards: state.boards.items,
		error: state.boards.error

	}

}

export default connect(mapStateToProps)(DashboardContainer)