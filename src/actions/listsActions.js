import * as requests from '../requests/lists'

export function loadLists(lists){

	return { type: 'LOAD_LISTS', lists:lists}
}

export function loadAll(slug){

	return (dispatch,getState) =>{

		let user = getState().user

		if (!user) return null

		requests.getlists(user.jwt,slug).then((result)=>{

			/*console.log(result.length)

			if(result.length != 0){

				dispatch(loadLists(result))

			}*/

			dispatch(loadLists(result))
		})
	}
}

export function addListSuccess(list){

	return {type: 'ADD_LIST' , list}
}

export function addListFailed(error){

	return {type: 'ADD_LIST_FAILED' , error}
}


export function addList(data){

	return (dispatch,getState) =>{

		let user = getState().user

		if (!user) return null

		requests.createList(data,user.jwt).then((result)=>{

			//console.log(result)

			//dispatch(addListSuccess(result))

			if(result.success){

				dispatch(addListSuccess(result.doc))
			
			}else{

				//dispatch(addBoardFailed())

				//console.log(result.message)

				dispatch(addListFailed(result.message))
			}
		
		
		}).catch((error)=>{

			console.log(error)
		})


	}
}

export function deleteListSuccess(list){

	return {type: 'DELETE_LIST' , list}
}

export function deleteList(slug){

	return (dispatch,getState) =>{

		let user = getState().user

		if (!user) return null

		requests.deleteList(slug,user.jwt).then((result)=>{

			dispatch(deleteListSuccess(result))


		})
	}
}