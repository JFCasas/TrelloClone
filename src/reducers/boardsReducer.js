const initialState = {
  items: [],
  error: null
};


export default function boardsReducer(state = initialState, action ){

	switch (action.type){
		
		case 'LOAD_BOARDS':

			return {
        		...state,

        		error: null,

        		items: action.boards
      		};

		case 'ADD_BOARD':

			/*return [action.board].concat(state)*/
			//return state.concat([action.board])

			/*return {
        		...state,
        		items: state.items.concat([action.board])
      		};*/

      		let newArray = state.items.slice();
      		let index = newArray.length
    		newArray.splice(index, 0, action.board);
    		
    		return {
        		...state,

        		error: null,
        		
        		items: newArray
      		};



		case 'ADD_BOARD_FAILED':

			//console.log(action.error)

			//return state

			return {
        		
        		...state,
        		
        		error: action.error,
        	};

		
		case 'DELETE_BOARD':

			//console.log(state)
			//console.log(action.board)
			
			return {
        		...state,
        		error: null,
        		items: state.items.filter( (document) => {return document._id !== action.board._id})
      		};


		default: 

			return state
	}

}


