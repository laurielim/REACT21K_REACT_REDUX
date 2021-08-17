import * as actionTypes from "../actions/actions";

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.INCREMENT:
			return { ...state, counter: state.counter + 1 };
		case actionTypes.DECREMENT:
			return { ...state, counter: state.counter - 1 };
		case actionTypes.ADD_FIVE:
			return { ...state, counter: state.counter + 5 };
		case actionTypes.REMOVE_FIVE:
			return { ...state, counter: state.counter - 5 };
		case actionTypes.RESET:
			return { ...state, counter: 0 };
		case actionTypes.STORE:
			return {
				counter: 0,
				results: [
					...state.results,
					{ id: state.results.length + 1, value: state.counter },
				],
			};
		default:
			return state;
	}
};

const initialState = {
	counter: 0,
	results: [
		{
			id: 1,
			value: 10,
		},
		{
			id: 2,
			value: 100,
		},
		{
			id: 3,
			value: 1000,
		},
	],
};

export default reducer;
