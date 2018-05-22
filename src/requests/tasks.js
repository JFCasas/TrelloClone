function createTask(data,jwt){

	
	return fetch("http://127.0.0.1:3001/tasks", {

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

/*function getTasks(jwt){

  return fetch("http://127.0.0.1:3001/tasks", {

		method: 'GET',
		
		headers:{
			'Content-Type': 'application/json',
			'Authorization' : 'Bearer ' + jwt,
			'Accept': 'application/json'
		}

  	}).then((response)=>{

  		//console.log(response)

	  return response.json()
    
    })

    .catch((error)=>{

      console.log(error)
    })
}*/

function getTasks(jwt,slug){

  return fetch("http://127.0.0.1:3001/lists/" + slug + "/tasks", {

		method: 'GET',
		
		headers:{
			'Content-Type': 'application/json',
			'Authorization' : 'Bearer ' + jwt,
			'Accept': 'application/json'
		}

  	}).then((response)=>{

  		//console.log(response)

	  return response.json()
    
    })

    .catch((error)=>{

      console.log(error)
    })
}

export {createTask,getTasks}
