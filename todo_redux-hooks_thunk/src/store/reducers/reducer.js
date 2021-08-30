import * as actionTypes from "../actions/actions";
import notesServices from "../../services/notes";

const initialState = {
	notes: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.INIT_NOTES:
			return { ...state, notes: action.data };

		case actionTypes.ADD_TASK:
			return {
				...state,
				notes: [...state.notes, action.data],
			};
		case actionTypes.TOGGLE_TASK:
			return {
				...state,
				notes: state.notes.map((note) =>
					note.id === action.id ? { ...note, completed: !note.completed } : note
				),
			};

		default:
			return state;
	}
};

export const initializeNotes = () => {
	return async (dispatch) => {
		const notes = await notesServices.getAll();
		dispatch({
			type: actionTypes.INIT_NOTES,
			data: notes,
		});
	};
};

export const createNote = (text) => {
	return async (dispatch) => {
		const note = await notesServices.createNew(text);
		dispatch({
			type: actionTypes.ADD_TASK,
			data: note,
		});
	};
};

export const updateNote = (id) => {
	return async (dispatch) => {
		const note = await notesServices.updateNote(id);
		dispatch({
			type: actionTypes.TOGGLE_TASK,
			data: note,
		});
	};
};

export default reducer;
