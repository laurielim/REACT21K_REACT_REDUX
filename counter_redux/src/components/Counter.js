import React, { Component } from "react";

class Counter extends Component {
	render() {
		return (
			<div>
				<h1>Counter: 0</h1>
				<div>
					<button>Add</button>
					<button>Remove</button>
				</div>
			</div>
		);
	}
}

export default Counter;
