import React from 'react'

import CardBoard from '../components/CardBoard'

import { Link } from 'react-router-dom'


export default class Dashboard extends React.Component{

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

							{this.props.choiceCardGenerator()}
							{this.boards()}

							
						</div>

					</div>

				</div>
			
			</div>

		)
	}
}




