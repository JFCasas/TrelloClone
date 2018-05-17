function getDashboards(){

  return fetch("http://127.0.0.1:3001/dashboards")

  	.then((response)=>{

	  return response.json()
    
    })

    .catch((error)=>{

      console.log(error)
    })
}

function createDashboard(data,jwt){

	
	return fetch("http://127.0.0.1:3001/dashboards", {

		method: 'POST',
		body: JSON.stringify(data),
		headers:{
			'Content-Type': 'application/json',
			'Authorization' : 'Bearer ' + jwt,
			'Accept': 'application/json'
		}
	
	}).then((response)=>{

		return response.json()
	
	}).catch((error)=>{

		console.log(error)
	})
}


function deleteDashboard(slug,jwt){

	
	return fetch("http://127.0.0.1:3001/dashboards/" + slug, {

		method: 'DELETE',
		
		headers:{
			'Content-Type': 'application/json',
			'Authorization' : 'Bearer ' + jwt,
			'Accept': 'application/json'
		}
	
	}).then((response)=>{

		return response.json()
	
	}).catch((error)=>{

		console.log(error)
	})
}

function getBoard(slug){

	
	return fetch("http://127.0.0.1:3001/dashboards/" + slug, {

		
	
	}).then((response)=>{

		return response.json()
	
	}).catch((error)=>{

		console.log(error)
	})
}



export {getDashboards,createDashboard,deleteDashboard,getBoard}