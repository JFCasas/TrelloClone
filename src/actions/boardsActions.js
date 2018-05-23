import * as requests from '../requests/dashboards'

import { push } from 'react-router-redux'

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


export function addDasboard(data){

	return (dispatch,getState) =>{

		let user = getState().user

		if (!user) return null

		requests.createDashboard(data,user.jwt).then((result)=>{

			//console.log(result)

			dispatch(addBoardSuccess(result))
		})
	}
}



/*export function addBoardSuccess(board){

	return {type: 'ADD_BOARD' , board}
}*/


export function deleteDasboard(slug){

	return (dispatch,getState) =>{

		let user = getState().user

		if (!user) return null

		requests.deleteDashboard(slug,user.jwt).then((result)=>{

			//console.log(result)

			//dispatch(loadAll())
			dispatch(push('/'))
		})
	}
}














