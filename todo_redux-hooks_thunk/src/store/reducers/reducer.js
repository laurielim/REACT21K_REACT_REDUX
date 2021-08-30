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

    case actionTypes.DELETE_TASK:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.id),
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

export const deleteNote = (id) => {
  return async (dispatch) => {
    const status = await notesServices.deleteNote(id);
    if (status === 200) dispatch({type: actionTypes.DELETE_TASK, id})
  }
}

export default reducer;
