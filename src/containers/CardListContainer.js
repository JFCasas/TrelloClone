import React from 'react'

import CardList from '../components/CardList'

import { connect } from 'react-redux'

import * as actions from '../actions/tasksActions'

class CardListContainer extends React.Component{

	constructor(props){

		super(props)

		this.createNewTask = this.createNewTask.bind(this)
		this.eliminateTask = this.eliminateTask.bind(this)
		this.onDragStart = this.onDragStart.bind(this)
		this.onDragOver = this.onDragOver.bind(this)
		this.onDrop = this.onDrop.bind(this)
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

	onDragStart(e,slug){

		e.dataTransfer.setData("slug",slug)

	}

	onDragOver(e){

		e.preventDefault()

	}

	onDrop(e){

		//const idList = this.props.list._id

		const data = {

      		_list : this.props.list._id
      		
    	}

		const slugTask = e.dataTransfer.getData("slug")

		//console.log(idList)

		//console.log(slugTask)

		this.props.dispatch(actions.changeTaskList(data,slugTask))

	}

	render(){

		return(

			<CardList

				list = {this.props.list}
				eliminateList = {this.props.eliminateList}
				createNewTask = {this.createNewTask}
				tasks = {this.props.tasks}
				eliminateTask = {this.eliminateTask}
				onDragStart = {this.onDragStart}
				onDragOver = {this.onDragOver}
				onDrop = {this.onDrop}

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