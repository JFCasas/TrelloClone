export default function boardsReducer(state = [] , action ){

	switch (action.type){
		
		case 'LOAD_BOARDS':

			return action.boards

		case 'ADD_BOARD':

			/*return [action.board].concat(state)*/
			return state.concat([action.board])

		default: 

			return state
	}

}