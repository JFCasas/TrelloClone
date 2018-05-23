export default function boardReducer(state = {} , action ){

	switch (action.type){
		
		case 'GET_BOARD':

			

			return Object.assign({},state,{

      			name: action.board.name,
        		_id: action.board._id,
        		_user: action.board._user,
        		slug: action.board.slug

      		})

		default: 

			return state
	}

}