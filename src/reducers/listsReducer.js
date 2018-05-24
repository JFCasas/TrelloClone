export default function listsReducer(state = [] , action ){

	switch (action.type){
		
		case 'LOAD_LISTS':

			return action.lists

		case 'ADD_LIST':

			/*return [action.board].concat(state)*/
			return state.concat([action.list])

		case 'DELETE_LIST':

			//console.log(state)
			//console.log(action.list)
			return state.filter( (document) => {return document._id !== action.list._id})
			
			
		default: 

			return state
	}

}