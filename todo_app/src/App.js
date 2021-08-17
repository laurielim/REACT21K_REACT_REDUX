import React from "react";
import "./App.css";

import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

function App() {
	return (
		<div className='App'>
			<h1>To Do App</h1>
			<TaskList />
			<TaskInput />
		</div>
	);
}

export default App;
