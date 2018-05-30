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

		case 'CHANGE_TASK_LIST':

			//console.log(state)
			//console.log(action.task)

			return state.map( (document) => {
		        
		        if(document._id !== action.task._id) {
		            // This isn't the item we care about - keep it as-is
		            return document;
		        }
		        // Otherwise, this is the one we want - return an updated value
		        return {
		            ...document,
		            ...action.task
		        };    
		    });
					
			
			
		default: 

			return state
	}

}