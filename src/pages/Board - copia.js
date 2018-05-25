import React from 'react'





import CardListName from '../components/CardListName'

import CardList from '../components/CardList'





import {getBoard} from '../requests/dashboards.js'

import {createList,getlists,deleteList} from '../requests/lists.js'

import { push } from 'react-router-redux'



class Board extends React.Component{

	constructor(props){

		super(props)
		const slug = props.match.params.slug
		this.state = {

       		//board: {},
       		lists: []
       		
       	}

    }

	render(){

		return(

			<div className="container" >

				

				{/*<div className="row" style={{"marginTop":"5em"}}>

					<div className="col-xs-12 col-sm-12 col-md-12">

						

						<CardListName listName = {this.state.board.name}></CardListName>

					</div>

				</div>*/}

				
			
			</div>

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

export default connect(mapStateToProps)(withRouter(Board))