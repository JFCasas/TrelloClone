export default function boardsReducer(state = [] , action ){

	switch (action.type){
		
		case 'LOAD_BOARDS':

			return action.boards

		case 'ADD_BOARD':

			/*return [action.board].concat(state)*/
			return state.concat([action.board])

		case 'DELETE_BOARD':

			console.log(state)
			console.log(action.board)
			return state.filter( (document) => {return document._id !== action.board._id})

		default: 

			return state
	}

}