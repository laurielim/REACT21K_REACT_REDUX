import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
	render() {
		return (
			<div>
				<h1>Counter: {this.props.ctr}</h1>
				<div>
					<button>Add</button>
					<button>Remove</button>
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

export default connect(mapStatetoProps)(Counter);
