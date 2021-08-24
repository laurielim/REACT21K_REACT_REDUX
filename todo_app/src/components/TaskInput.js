import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionTypes from "../actions/actions";

class TaskInput extends Component {
	render() {
		return (
			<form onSubmit={this.props.onTaskSubmit} className='task-container'>
				<input
					placeholder='Add new task'
					type='text'
					value={this.props.inputValue}
					onChange={this.props.onTaskInput}
				/>
				<button className='task-btn' type='submit'>
					Add
				</button>
			</form>
		);
	}
}

const mapStatetoProps = (state) => {
	return {
		inputValue: state.taskInput,
	};
};

const mapDispateToProps = (dispatch) => {
	return {
		onTaskInput: (e) =>
			dispatch({ type: actionTypes.INPUT_TASK, payload: e.target.value }),
		onTaskSubmit: (e) => {
			e.preventDefault();
			dispatch({ type: actionTypes.ADD_TASK });
		},
	};
};

export default connect(mapStatetoProps, mapDispateToProps)(TaskInput);
