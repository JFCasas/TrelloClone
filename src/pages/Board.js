import React from 'react'

import ListGenerator from '../components/ListGenerator'

import CardList from '../components/CardList'


export default class Board extends React.Component{

	lists(){

		return this.props.lists.map((list,index)=>{

    		return(

    			<CardList  list = {list} key= {index} 
    					   eliminateList = {this.props.eliminateList}
    					   user = {this.props.user}
    					   dispatch = {this.props.dispatch}
    					   slugboard = {this.props.slugboard}
    			>
    				
				</CardList>
				
			)
    	})   		
		    
	}

	render(){

		return(

			<div className="container" >

				<h2> {this.props.board.name} </h2>
			
				<div className="row" style={{"marginTop":"2em"}}>

					<div className="col-xs-12 col-sm-12 col-md-12">

						<ListGenerator
								createList={this.props.createList}>
						>
						</ListGenerator>

						{this.lists()}

						

					</div>

				 </div>





			</div>
		)
	}

}

