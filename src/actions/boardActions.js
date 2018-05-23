import * as requests from '../requests/dashboards'


export function getBoardSuccess(board){

	return {type: 'GET_BOARD' , board}
}

export function getDasboard(slug){

	return (dispatch,getState) =>{

		let user = getState().user

		if (!user) return null

		
		requests.getBoard(slug,user.jwt).then((result)=>{

			//console.log(result)
			
			if(result !== null){

				dispatch(getBoardSuccess(result))

			}
			
		})
	}
}

