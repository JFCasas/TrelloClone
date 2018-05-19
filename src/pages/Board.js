import React from 'react'



import ListGenerator from '../components/ListGenerator'

import CardListName from '../components/CardListName'

import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'

import {getBoard} from '../requests/dashboards.js'

import {createList} from '../requests/lists.js'

class Board extends React.Component{

	constructor(props){

		super(props)
		const slug = props.match.params.slug
		this.state = {

       		board: {}
       		
       	}

       	this.loadBoard(slug)

       	//console.log(this.state.board)

       	this.createList = this.createList.bind(this)
	
	}

	loadBoard(slug){

		getBoard(slug,this.props.user.jwt).then((jsonR)=>{

			//console.log(jsonR)

			if (jsonR) {

				this.setState({

        			board : jsonR
      
      			})
			}

		})

	}

	createList(nameList){


    	const data = {

      		name : nameList,
      		_dashboard : this.state.board._id
      		
    	}

    	//console.log(data)

		createList(data,this.props.user.jwt).then((response)=>{

	      	console.log(response)
			
			//this.loadLists()

			
	    }).catch((error)=>{

	      console.log(error)
	    })
	}

	

	render(){

		return(

			<div className="container" >

				

				<div className="row" style={{"marginTop":"5em"}}>

					<div className="col-xs-12 col-sm-12 col-md-12">

						

						<CardListName listName = {this.state.board.name}></CardListName>

					</div>

				</div>

				<div className="row" style={{"marginTop":"2em"}}>

					<div className="col-xs-12 col-sm-12 col-md-12">

						<div className="dashboard">

							<ListGenerator
								createList={this.createList}>
							>
							</ListGenerator>


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