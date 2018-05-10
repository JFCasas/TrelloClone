import React from 'react'



import FullCardGenerator from '../components/FullCardGenerator'
import PartialCardGenerator from '../components/PartialCardGenerator'
import CardBoard from '../components/CardBoard'

export default class Home extends React.Component{

	constructor(props){

		super(props)

		this.state = {

			fullCardGenerator : false,
			boards : []
		}

		this.choiceCardGenerator = this.choiceCardGenerator.bind(this)

		this.showCreateNewBoard = this.showCreateNewBoard.bind(this)
		this.cancelCreateNewBoard = this.cancelCreateNewBoard.bind(this)
		this.createNewBoard = this.createNewBoard.bind(this)
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

    	this.setState({

        	boards: this.state.boards.concat(nameBoard)
      
      	})
    }


    boards(){

    	return this.state.boards.map(board=>{

    		return(

    			<CardBoard board = {board} ></CardBoard>
    		)
    	})
    }

	render(){

		return(

			<div className="container" >

				<div className="row ">

					<div className="col-xs-12 col-sm-12 col-md-12">

						<div className="inicio">

							<h3>Inicio</h3>
								

						</div>

					</div>

				</div>

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


/*boards es un arreglo que tiene en su interior los nombres de los diferentes boards

Estos los vamos a ñadir desde el botón create de FullCardGenerator*/