import React from 'react'

import {Card, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

import {createTask,getTasks,deleteTask} from '../requests/tasks.js'



import CardList from '../components/CardList'

import { push } from 'react-router-redux'

import { connect } from 'react-redux'

import * as actions from '../actions/tasksActions'

class CardListContainer extends React.Component{

	constructor(props){

		super(props)

		this.createNewTask = this.createNewTask.bind(this)
		this.eliminateTask = this.eliminateTask.bind(this)
		
	}
	

	createNewTask(nameTask){

		const data = {

      		name : nameTask,
      		_dashboard : this.props.list._dashboard,
      		_list : this.props.list._id
      		
    	}

    	//console.log(data)

    	//const slug = this.props.match.params.slug

    	this.props.dispatch(actions.addTask(data))


	}

	eliminateTask(slug){

		this.props.dispatch(actions.deleteTask(slug))	

	}

	render(){

		return(

			<CardList

				list = {this.props.list}
				eliminateList = {this.props.eliminateList}
				createNewTask = {this.createNewTask}
				tasks = {this.props.tasks}
				eliminateTask = {this.eliminateTask}
			>
			</CardList>

		)

	}
}

function mapStateToProps(state,ownProps){

	return {

		user: state.user,
		tasks: state.tasks
		
	}
}

export default connect(mapStateToProps)(CardListContainer)