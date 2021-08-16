const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "INCREMENT":
			return { ...state, counter: state.counter + 1 };
		case "DECREASE":
			return { ...state, counter: state.counter - 1 };
		case "RESET":
			return { ...initialState };
	}
	return state;
};

const initialState = {
	counter: 0,
};

export default reducer;
