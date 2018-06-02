const initialState = {
  items: [],
  errorTask: null
};



export default function tasksReducer(state = initialState , action ){

	switch (action.type){
		
		case 'LOAD_TASKS':

			return {
        		...state,

        		errorTask: null,

        		items: action.tasks
      		};

		case 'ADD_TASK':

			/*return [action.board].concat(state)*/
			//return state.concat([action.task])

			let newArray = state.items.slice();
      		let index = newArray.length
    		newArray.splice(index, 0, action.task);
    		
    		return {
        		...state,

        		errorTask: null,
        		
        		items: newArray
      		};

      	case 'ADD_TASK_FAILED':

			//console.log(action.error)

			//return state

			return {
        		
        		...state,
        		
        		errorTask: action.error,
        	};



		case 'DELETE_TASK':

			//console.log(state)
			//console.log(action.task)
			//return state.filter( (document) => {return document._id !== action.task._id})

			return {
        		...state,
        		errorTask: null,
        		items: state.items.filter( (document) => {return document._id !== action.task._id})
      		};
		


		case 'CHANGE_TASK_LIST':

			//console.log(state)
			//console.log(action.task)

			/*return state.items.map( (document) => {
		        
		        if(document._id !== action.task._id) {
		            // This isn't the item we care about - keep it as-is
		            return document;
		        }
		        // Otherwise, this is the one we want - return an updated value
		        return {
		            ...document,
		            ...action.task
		        };    
		    });*/

		    return {

		    	...state,
		    	errorTask: null,
		    	items : state.items.map((document)=>{

		    		if(document._id !== action.task._id) {
			            // This isn't the item we care about - keep it as-is
			            return document;
			        }
			        // Otherwise, this is the one we want - return an updated value
			        return {
			            ...document,
			            ...action.task
			        };


		    	})
		    }
					
			
			
		default: 

			return state
	}

}