function getDashboards(){

  return fetch("http://127.0.0.1:3001/dashboards")

  	.then((response)=>{

	  return response.json()
    
    })

    .catch((error)=>{

      console.log(error)
    })
}

export {getDashboards}