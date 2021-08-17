import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../actions/actions";

class Counter extends Component {
	render() {
		return (
			<div>
				<h1>Counter: {this.props.ctr}</h1>
				<div>
					<button onClick={this.props.onIncCounter}>Add</button>
					<button onClick={this.props.onDecCounter}>Remove</button>
					<button onClick={this.props.onIncFiveCounter}>Add five</button>
					<button onClick={this.props.onDecFiveCounter}>Remove five</button>
					<button onClick={this.props.onResetCounter}>Reset</button>
				</div>
				<button onClick={this.props.storeCounter}>Store the results</button>
				<div>
					<h2>Store results</h2>
					<ul>
						{this.props.storeResults.map((result) => (
							<li key={result.id}>{result.value}</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

const mapStatetoProps = (state) => {
	return {
		ctr: state.counter,
		storeResults: state.results,
	};
};

const mapDispateToProps = (dispatch) => {
	return {
		onIncCounter: () => dispatch({ type: actionTypes.INCREMENT }),
		onDecCounter: () => dispatch({ type: actionTypes.DECREMENT }),
		onIncFiveCounter: () => dispatch({ type: actionTypes.ADD_FIVE }),
		onDecFiveCounter: () => dispatch({ type: actionTypes.REMOVE_FIVE }),
		onResetCounter: () => dispatch({ type: actionTypes.RESET }),
		storeCounter: () => dispatch({ type: actionTypes.STORE }),
	};
};

export default connect(mapStatetoProps, mapDispateToProps)(Counter);
