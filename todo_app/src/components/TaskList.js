import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../actions/actions";

class TaskList extends Component {
	render() {
		return (
			<ul>
				{this.props.taskList.map((task) => (
					<li key={task.id} className='task-container'>
						<input
							type='checkbox'
							name={"task" + task.id}
							id={"task" + task.id}
							onChange={() => this.props.onTaskUpdate(task.id)}
							checked={task.isDone}
						/>
						<label
							htmlFor={"task" + task.id}
							className={task.isDone ? "task task-done" : "task"}
						>
							{task.name}
						</label>
						<button
							className={"task-btn"}
							onClick={() => this.props.onTaskDelete(task.id)}
						>
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
