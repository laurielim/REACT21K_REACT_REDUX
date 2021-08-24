import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../store/actions/actions";

const NewNoteContainer = () => {
	const notes = useSelector((state) => state.notes);
	const dispatch = useDispatch();
	let i = notes.length;

	const addTask = (text) => ({
		type: actionTypes.ADD_TASK,
		id: i++,
		text: text,
		completed: false,
	});

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				dispatch(addTask(e.target.note.value));
				e.target.note.value = "";
			}}
		>
			<input type='text' name='note' id='note' />
			<input type='submit' value='Add note' />
		</form>
	);
};

export default NewNoteContainer;
