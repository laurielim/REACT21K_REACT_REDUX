import React from "react";
import { useSelector, useDispatch } from "react-redux";

import * as actionTypes from "../store/actions/actions";

const NotesContainer = () => {
	const notes = useSelector((state) => state.notes);
	const dispatch = useDispatch();

	const toggleTodo = (id) => ({
		type: actionTypes.TOGGLE_TASK,
		id: id,
	});
	return (
		<ul>
			{notes.map((note) => (
				<li
					onClick={() => dispatch(toggleTodo(note.id))}
					key={note.id}
					className={note.completed ? "strike todo" : "todo"}
				>
					{note.text}
				</li>
			))}
		</ul>
	);
};

export default NotesContainer;
