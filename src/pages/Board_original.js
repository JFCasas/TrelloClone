import React from 'react'



import ListGenerator from '../components/ListGenerator'

import CardListName from '../components/CardListName'

import CardList from '../components/CardList'

import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'

import {getBoard} from '../requests/dashboards.js'

import {createList,getlists,deleteList} from '../requests/lists.js'

import { push } from 'react-router-redux'

import * as actionsBoard from '../actions/boardActions'

import * as actions from '../actions/listsActions'

class Board extends React.Component{

	constructor(props){

		super(props)
		const slug = props.match.params.slug
		this.state = {

       		//board: {},
       		lists: []
       		
       	}

       	this.loadBoard(slug)

       	this.loadlists(slug)

       	//console.log(this.state.board)

       	this.createList = this.createList.bind(this)
       	this.eliminateList = this.eliminateList.bind(this)

       	//console.log(props.board)
	
	}

	loadBoard(slug){

		/*getBoard(slug,this.props.user.jwt).then((jsonR)=>{

			//console.log(jsonR)

			if (jsonR) {

				this.setState({

        			board : jsonR
      
      			})
			}

		})*/

		this.props.dispatch(actionsBoard.getDasboard(slug))

	}

	createList(nameList){


    	const data = {

      		name : nameList,
      		_dashboard : this.props.board._id
      		
    	}

    	const slug = this.props.match.params.slug

    	//console.log(data)

		/*createList(data,this.props.user.jwt).then((response)=>{

	      	//console.log(response)

	      	//console.log(slug)
			
			//this.loadlists(slug)
			this.props.dispatch(push('/'))
			this.props.dispatch(push('/dashboards/' + slug))

			
	    }).catch((error)=>{

	      console.log(error)
	    })*/

	    this.props.dispatch(actions.addList(data))
	}

	eliminateList(slug){

		/*deleteList(slug,this.props.user.jwt).then((response)=>{

			//console.log(response)

			this.loadlists(this.props.match.params.slug)
		})*/

		this.props.dispatch(actions.deleteList(slug))

		
		
	}

	loadlists(slug){

    	/*getlists(this.props.user.jwt,slug).then((jsonR)=>{

	      //console.log(jsonR);

	      if (jsonR){

	      	this.setState({

	        	lists : jsonR
	      
	      	})


	      }

	      

	    })*/

	    this.props.dispatch(actions.loadAll(slug))
	   
    }

    lists(){



    	return this.props.lists.map((list,index)=>{

    		return(

    			<CardList  list = {list} key= {index} 
    					   eliminateList = {this.eliminateList}
    					   user = {this.props.user}
    					   dispatch = {this.props.dispatch}
    					   slugboard = {this.props.match.params.slug}
    			>
    				
				</CardList>
				
			)
    	})   		
		    
	}

	

	render(){

		return(

			<div className="container" >

				

				{/*<div className="row" style={{"marginTop":"5em"}}>

					<div className="col-xs-12 col-sm-12 col-md-12">

						

						<CardListName listName = {this.state.board.name}></CardListName>

					</div>

				</div>*/}

				<h2> {this.props.board.name} </h2>

				<div className="row" style={{"marginTop":"2em"}}>

					<div className="col-xs-12 col-sm-12 col-md-12">

						<ListGenerator
								createList={this.createList}>
							>
						</ListGenerator>

						<div className="dashboard">

							{this.lists()}


						</div>

					</div>

				</div>
			
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