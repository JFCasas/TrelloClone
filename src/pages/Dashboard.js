import React from 'react'

import FullCardGenerator from '../components/FullCardGenerator'
import PartialCardGenerator from '../components/PartialCardGenerator'
import CardBoard from '../components/CardBoard'

import { Link } from 'react-router-dom'


export default class Dashboard extends React.Component{

	constructor(props){

		super(props)

		this.state = {

			fullCardGenerator : false,
			
		}

		

		this.choiceCardGenerator = this.choiceCardGenerator.bind(this)
		this.showCreateNewBoard = this.showCreateNewBoard.bind(this)
		this.cancelCreateNewBoard = this.cancelCreateNewBoard.bind(this)
		
	}

	choiceCardGenerator(){

		if (this.state.fullCardGenerator ) {

			return <FullCardGenerator 
						cancelCreateNewBoard={this.cancelCreateNewBoard}
						createNewBoard={this.props.createNewBoard}>
					
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

    boards(){

    	return this.props.boards.map((board,index)=>{

    		return(

    			<Link to = {"/dashboards/" + board.slug} style={{"textDecoration": "none"}}>

    					<CardBoard board = {board} key= {index} 
    					   eliminateBoard = {this.props.eliminateBoard}
    					>
    				
						</CardBoard>
				
				</Link>

    		)
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




