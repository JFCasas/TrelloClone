export default function tasksReducer(state = [] , action ){

	switch (action.type){
		
		case 'LOAD_TASKS':

			return action.tasks

		case 'ADD_TASK':

			/*return [action.board].concat(state)*/
			return state.concat([action.task])

		case 'DELETE_TASK':

			//console.log(state)
			//console.log(action.task)
			return state.filter( (document) => {return document._id !== action.task._id})
			
			
		default: 

			return state
	}

}