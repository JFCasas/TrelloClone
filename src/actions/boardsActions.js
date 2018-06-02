import * as requests from '../requests/dashboards'

export function loadBoards(boards){

	return { type: 'LOAD_BOARDS', boards:boards}
}

export function loadAll(){

	return (dispatch,getState) =>{

		let user = getState().user

		if (!user) return null

		requests.getDashboards(user.jwt).then((result)=>{

			//console.log(result)

			dispatch(loadBoards(result))
		})
	}
}

export function addBoardSuccess(board){

	return {type: 'ADD_BOARD' , board}
}

export function addBoardFailed(error){

	return {type: 'ADD_BOARD_FAILED' , error}
}


export function addDasboard(data){

	return (dispatch,getState) =>{

		let user = getState().user

		if (!user) return null

		requests.createDashboard(data,user.jwt).then((result)=>{

			if(result.success){

				dispatch(addBoardSuccess(result.doc))
			
			}else{

				//dispatch(addBoardFailed())

				//console.log(result.message)

				dispatch(addBoardFailed(result.message))
			}
		
		}).catch((error)=>{

			console.log(error)
		})
	}
}



export function deleteBoardSuccess(board){

	return {type: 'DELETE_BOARD' , board}
}


export function deleteDasboard(slug){

	return (dispatch,getState) =>{

		let user = getState().user

		if (!user) return null

		requests.deleteDashboard(slug,user.jwt).then((result)=>{

			dispatch(deleteBoardSuccess(result))

			//console.log(result)
		})
	}
}














