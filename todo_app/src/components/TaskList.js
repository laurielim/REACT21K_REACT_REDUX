import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../actions/actions";

class TaskList extends Component {
	render() {
		return (
			<ul>
				{this.props.taskList.map((task) => (
					<li key={task.id}>
						<input
							type='checkbox'
							name={"task" + task.id}
							id={"task" + task.id}
							onChange={() => this.props.onTaskUpdate(task.id)}
							checked={task.isDone}
						/>
						<label htmlFor={"task" + task.id}>{task.name}</label>
						<button onClick={() => this.props.onTaskDelete(task.id)}>
							Delete
						</button>
					</li>
				))}
			</ul>
		);
	}
}

const mapStatetoProps = (state) => {
	return {
		taskList: state.tasks,
	};
};

const mapDispateToProps = (dispatch) => {
	return {
		onTaskDelete: (payload) =>
			dispatch({ type: actionTypes.DELETE_TASK, payload }),
		onTaskUpdate: (payload) =>
			dispatch({ type: actionTypes.UPDATE_TASK, payload }),
	};
};

export default connect(mapStatetoProps, mapDispateToProps)(TaskList);
