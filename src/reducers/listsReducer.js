const initialState = {
  items: [],
  error: null
};


export default function listsReducer(state = initialState , action ){

	switch (action.type){
		
		case 'LOAD_LISTS':

			return {
        		...state,

        		error: null,

        		items: action.lists
      		};

		case 'ADD_LIST':

			/*return [action.board].concat(state)*/
			//return state.concat([action.list])

			let newArray = state.items.slice();
      		let index = newArray.length
    		newArray.splice(index, 0, action.list);
    		
    		return {
        		...state,

        		error: null,
        		
        		items: newArray
      		};

      	case 'ADD_LIST_FAILED':

			//console.log(action.error)

			//return state

			return {
        		
        		...state,
        		
        		error: action.error,
        	};

		case 'DELETE_LIST':

			//console.log(state)
			//console.log(action.list)
			return {

				...state,
        		error: null,
        		items: state.items.filter( (document) => {return document._id !== action.list._id})
			};
			
		default: 

			return state
	}

}