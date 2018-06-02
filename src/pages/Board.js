import React from 'react'

import ListGenerator from '../components/ListGenerator'

import CardListContainer from '../containers/CardListContainer'


export default class Board extends React.Component{

	lists(){

		return this.props.lists.map((list,index)=>{

    		return(

    			<CardListContainer  

    					   list = {list} key= {index} 
    					   eliminateList = {this.props.eliminateList}
    					   slugboard = {this.props.slugboard}
    			>
    				
				</CardListContainer>
				
			)
    	})   		
		    
	}

	render(){

		return(

			<div className="container" >

				<h2> {this.props.board.name} </h2>
			
				<div className="row" style={{"marginTop":"2em"}}>

					<div className="col-xs-12 col-sm-12 col-md-12">

						{this.props.displayError()}
						{this.props.displayErrorTask()}

						<ListGenerator
								
							createList={this.props.createList}>
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

