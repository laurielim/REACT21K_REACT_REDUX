import * as actionTypes from "../actions/actions";

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_TASK:
			return {
				...state,
				notes: state.notes.concat({
					id: action.id,
					text: action.text,
					completed: action.completed,
				}),
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

const initialState = {
	notes: [{ id: 0, text: "Groceries", completed: false }],
};

export default reducer;
