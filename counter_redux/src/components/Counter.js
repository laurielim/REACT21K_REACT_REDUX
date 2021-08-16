import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
	render() {
		return (
			<div>
				<h1>Counter: {this.props.ctr}</h1>
				<div>
					<button onClick={this.props.onIncCounter}>Add</button>
					<button onClick={this.props.onDecCounter}>Remove</button>
					<button onClick={this.props.onResetCounter}>Reset</button>
				</div>
			</div>
		);
	}
}

const mapStatetoProps = (state) => {
	return {
		ctr: state.counter,
	};
};

const mapDispateToProps = (dispatch) => {
	return {
		onIncCounter: () => dispatch({ type: "INCREMENT" }),
		onDecCounter: () => dispatch({ type: "DECREASE" }),
		onResetCounter: () => dispatch({ type: "RESET" }),
	};
};

export default connect(mapStatetoProps, mapDispateToProps)(Counter);
