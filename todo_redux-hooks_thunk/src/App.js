import React from "react";
import "./App.css";

import NewNoteContainer from "./containers/NewNoteContainer";
import NotesContainer from "./containers/NotesContainer";

const App = () => {
	return (
		<div className='App'>
			<NewNoteContainer />
			<NotesContainer />
		</div>
	);
};

export default App;
