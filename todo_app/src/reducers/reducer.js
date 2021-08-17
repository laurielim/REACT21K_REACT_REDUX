import * as actionTypes from "../actions/actions";

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.INPUT_TASK:
			return { ...state, taskInput: action.payload };

		case actionTypes.ADD_TASK:
			return {
				...state,
				taskInput: "",
				tasks: [
					...state.tasks,
					{ id: new Date(), name: state.taskInput, isDone: false },
				],
			};

		case actionTypes.DELETE_TASK:
			return {
				...state,
				tasks: state.tasks.filter((task) => task.id !== action.payload),
			};

		case actionTypes.UPDATE_TASK:
			return {
				...state,
				tasks: state.tasks.map((task) => {
					if (task.id === action.payload) {
						const updatedTask = { ...task };
						updatedTask.isDone = updatedTask.isDone ? false : true;
						return updatedTask;
					} else {
						return task;
					}
				}),
			};

		default:
			return state;
	}
};

const initialState = {
	taskInput: "",
	tasks: [
		{ id: 1, name: "Laundry", isDone: false },
		{ id: 2, name: "Groceries", isDone: true },
		{ id: 3, name: "Dishes", isDone: false },
	],
};

export default reducer;
