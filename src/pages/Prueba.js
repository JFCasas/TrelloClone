import React from 'react'

import TextField from 'material-ui/TextField';

import RaisedButton from 'material-ui/RaisedButton';

export default class Prueba extends React.Component {

  constructor(props){

    super(props)

    this.state = {

      searchText: ''
    }

    this.reset = this.reset.bind(this)
  }
  

  reset() {
    
    this.inputEntry.value = ""
  
  }

  

    
  onKeyPress1 = (e) => {
    
    if(e.key === 'Enter'){

      this.setState({

        searchText: e.target.value
      
      })

      //this.reset()
        
    }
  }



  render(){

    

    return(

      <div style={{"marginTop":"5em","marginLeft":"5em"}}>

        <input 

          type="text"

          className = "inputt"
          
          onKeyPress={ (e) => this.onKeyPress1(e) }

          ref= {el => this.inputEntry = el}

          
        />

        <p>{this.state.searchText}</p>

        <RaisedButton

          label="Reset Input" secondary={true}

          onClick = {this.reset}

        ></RaisedButton>
        

      </div>


      


    )
  }
  
  
}


