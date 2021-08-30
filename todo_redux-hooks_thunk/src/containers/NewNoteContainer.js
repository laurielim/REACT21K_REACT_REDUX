import React from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../store/reducers/reducer";

const NewNoteContainer = () => {
	// const notes = useSelector((state) => state.notes);
	const dispatch = useDispatch();

	const addTask = async (e) => {
		e.preventDefault();
		const text = e.target.note.value;
		dispatch(createNote(text));
		e.target.note.value = "";
	};

	return (
		<form onSubmit={addTask}>
			<input type='text' name='note' id='note' />
			<input type='submit' value='Add note' />
		</form>
	);
};

export default NewNoteContainer;
