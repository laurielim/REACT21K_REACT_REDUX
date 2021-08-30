import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";

import NewNoteContainer from "./containers/NewNoteContainer";
import NotesContainer from "./containers/NotesContainer";

import { initializeNotes } from "./store/reducers/reducer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeNotes());
  }, [dispatch]);

  return (
    <div className="App">
      <NewNoteContainer />
      <NotesContainer />
    </div>
  );
};

export default App;
