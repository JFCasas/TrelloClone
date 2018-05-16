import React from 'react'

import { connect } from 'react-redux'

import MyAppBar from './MyAppBar'

import * as actions from '../../actions/userActions'


class MyAppBarContainer extends React.Component{

	
	constructor(props){

		super(props)

		this.logout = this.logout.bind(this)
	}


	logout(){

	  this.props.dispatch(actions.logout())

	  //this.props.dispatch(push('/'))
	}

	render(){

		return(

			<MyAppBar goHome = {this.props.goHome}
					  user = {this.props.user}
					  logout = {this.logout}

			>
				
			</MyAppBar>
		)
	}
}


function mapStateToProps(state,ownProps){

	return {

		user: state.user
	}
}

export default connect(mapStateToProps)(MyAppBarContainer)
