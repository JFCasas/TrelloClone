import React from 'react'

import FullCardGenerator from '../components/FullCardGenerator'
import PartialCardGenerator from '../components/PartialCardGenerator'
import CardBoard from '../components/CardBoard'

import {getDashboards,createDashboard,deleteDashboard} from '../requests/dashboards.js'

import { connect } from 'react-redux'

import { push } from 'react-router-redux'

import { Link } from 'react-router-dom'

class Dashboard extends React.Component{

	constructor(props){

		super(props)

		this.state = {

			fullCardGenerator : false,
			boards : []
		}

		this.loadboards()

		this.choiceCardGenerator = this.choiceCardGenerator.bind(this)

		this.showCreateNewBoard = this.showCreateNewBoard.bind(this)
		this.cancelCreateNewBoard = this.cancelCreateNewBoard.bind(this)
		this.createNewBoard = this.createNewBoard.bind(this)
		this.eliminateBoard = this.eliminateBoard.bind(this)
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

		/*this.setState({

    		boards: this.state.boards.concat(newBoard),
      		fullCardGenerator: false
      	})*/

      	
		createDashboard(data,this.props.user.jwt).then((response)=>{

	      
			this.loadboards()

			this.setState({

        		fullCardGenerator: false
      
      		})
	      

	    }).catch((error)=>{

	      console.log(error)
	    })
	}

	eliminateBoard(slug){

		

		deleteDashboard(slug,this.props.user.jwt).then((response)=>{

	      	this.loadboards()

			this.setState({

        		fullCardGenerator: false
      
      		})
	      

	    }).catch((error)=>{

	      console.log(error)
	    
	    })
	}


    boards(){

    	return this.state.boards.map((board,index)=>{

    		return(

    			<Link to = {"/dashboards/" + board.slug} style={{"textDecoration": "none"}}>

    					<CardBoard board = {board} key= {index} 
    					   eliminateBoard = {this.eliminateBoard}
    					>
    				
						</CardBoard>
				
				</Link>

    		)
    	})
    }

    loadboards(){

    	getDashboards().then((jsonR)=>{

	      console.log(jsonR);

	      this.setState({

	        boards : jsonR
	      
	      })

	    })
	   
    }

	render(){

		return(

			<div className="container" >

				

				<div className="row" style={{"marginTop":"5em"}}>

					<div className="col-xs-12 col-sm-12 col-md-12">

						<div className="dashboard">

							{this.choiceCardGenerator()}
							{this.boards()}

							


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

export default connect(mapStateToProps)(Dashboard)


