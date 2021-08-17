import * as actionTypes from "../actions/actions";

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_TASK:
			return;
		case actionTypes.DELETE_TASK:
			return;
		case actionTypes.UPDATE_TASK:
			return;
		default:
			return state;
	}
};

const initialState = [];

export default reducer;
