function createList(data,jwt){

	
	return fetch("http://127.0.0.1:3001/lists", {

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

function getlists(jwt){

  return fetch("http://127.0.0.1:3001/lists", {

		method: 'GET',
		
		headers:{
			'Content-Type': 'application/json',
			'Authorization' : 'Bearer ' + jwt,
			'Accept': 'application/json'
		}

  	}).then((response)=>{

	  return response.json()
    
    })

    .catch((error)=>{

      console.log(error)
    })
}

export {createList,getlists}