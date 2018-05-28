import React from 'react'

import CardBoard from '../components/CardBoard'




export default class Dashboard extends React.Component{

	boards(){

    	return this.props.boards.map((board,index)=>{

    		return(

    			

    			<CardBoard board = {board} key= {index} 
    					   eliminateBoard = {this.props.eliminateBoard}
    			>
    				
				</CardBoard>
				
				

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




