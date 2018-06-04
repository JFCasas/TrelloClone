import * as requests from '../requests/tasks'

export function loadTasks(tasks){

	return { type: 'LOAD_TASKS', tasks:tasks}
}

export function loadAll(slug){

	return (dispatch,getState) =>{

		let user = getState().user

		if (!user) return null

		requests.getTasks(user.jwt,slug).then((result)=>{

			//console.log(result)

			dispatch(loadTasks(result))
		})
	}
}

export function addTaskSuccess(task){

	return {type: 'ADD_TASK' , task}
}

export function addTaskFailed(error){

	return {type: 'ADD_TASK_FAILED' , error}
}


export function addTask(data){

	return (dispatch,getState) =>{

		let user = getState().user

		if (!user) return null

		requests.createTask(data,user.jwt).then((result)=>{

			//console.log(result)

			//dispatch(addTaskSuccess(result))

			if(result.success){

				dispatch(addTaskSuccess(result.doc))
			
			}else{

				//dispatch(addBoardFailed())

				//console.log(result.message)

				dispatch(addTaskFailed(result.message))
			}
		}).catch((error)=>{

			console.log(error)
		})
	}
}

export function deleteTaskSuccess(task){

	return {type: 'DELETE_TASK' , task}
}

export function deleteTask(slug){

	return (dispatch,getState) =>{

		let user = getState().user

		if (!user) return null

		requests.deleteTask(slug,user.jwt).then((result)=>{

			dispatch(deleteTaskSuccess(result))




		})
	}
}


export function changeTaskListSuccess(task){

	return {type: 'CHANGE_TASK_LIST' , task}
}


export function changeTaskList(data,slugTask){

	return (dispatch,getState) =>{

		let user = getState().user

		if (!user) return null

		requests.changeTaskList(data,slugTask,user.jwt).then((result)=>{

			//console.log(result)

			dispatch(changeTaskListSuccess(result))
		})
	}
}


