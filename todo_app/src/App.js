import React from "react";
import "./App.css";

import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

function App() {
	return (
		<div className='page-wrapper'>
			<header>
				<h1>To Do App</h1>
			</header>
			<TaskList />
			<TaskInput />
			<footer>
				<div>
					<a href='//github.com/laurielim/REACT21K_REACT_JS_TODO_APP'>
						Github Repo
					</a>
				</div>
				<div>
					2021 © <a href='//laurielim.github.io/'>Laurie Lim Sam</a>
				</div>
			</footer>
		</div>
	);
}

export default App;
