import React from 'react'

import Board from '../pages/Board'

import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'

import * as actionsBoard from '../actions/boardActions'

import * as actions from '../actions/listsActions'

class BoardContainer extends React.Component{

	constructor(props){

		super(props)
		const slug = props.match.params.slug

		this.loadBoard(slug)

		this.loadlists(slug)

		this.createList = this.createList.bind(this)
		this.eliminateList = this.eliminateList.bind(this)

	
	}

	

	loadBoard(slug){

		this.props.dispatch(actionsBoard.getDasboard(slug))

	}

	createList(nameList){


    	const data = {

      		name : nameList,
      		_dashboard : this.props.board._id
      		
    	}

    	const slug = this.props.match.params.slug

    	this.props.dispatch(actions.addList(data))
	}

	loadlists(slug){

    	this.props.dispatch(actions.loadAll(slug))
	   
    }

    eliminateList(slug){

    	//console.log(slug)

		/*deleteList(slug,this.props.user.jwt).then((response)=>{

			//console.log(response)

			this.loadlists(this.props.match.params.slug)
		})*/

		this.props.dispatch(actions.deleteList(slug))

		
	}

    


	render(){

		return(

			<Board 

				board = {this.props.board}
				createList = {this.createList}
				lists = {this.props.lists}
				user = {this.props.user}
				eliminateList = {this.eliminateList}
				dispatch = {this.props.dispatch}
				slugboard = {this.props.match.params.slug}

			></Board>

		)
	}


}



function mapStateToProps(state,ownProps){

	return {

		user: state.user,
		board: state.board,
		lists: state.lists
	}
}

export default connect(mapStateToProps)(withRouter(BoardContainer))