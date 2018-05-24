import React from 'react'

import { connect } from 'react-redux'

import Dashboard from '../pages/Dashboard.js'


import * as actions from '../actions/boardsActions'

class DashboardContainer extends React.Component{

	constructor(props){

		super(props)


		this.loadboards()
		
		this.createNewBoard = this.createNewBoard.bind(this)
		this.eliminateBoard = this.eliminateBoard.bind(this)
		
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





	render(){

		return(

			<Dashboard

				createNewBoard = {this.createNewBoard}

				boards = {this.props.boards}

				eliminateBoard = {this.eliminateBoard}


			></Dashboard>


		)
	}
}

function mapStateToProps(state,ownProps){

	return {

		user: state.user,
		boards: state.boards
	}

}

export default connect(mapStateToProps)(DashboardContainer)