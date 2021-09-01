import axios from "axios";

const baseUrl = "http://localhost:3001/notes/";

const getAll = async () => {
	const res = await axios.get(baseUrl);
	return res.data;
};

const createNew = async (text) => {
	const newNote = {
		text,
		completed: false,
	};
	const res = await axios.post(baseUrl, newNote);
	return res.data;
};

const deleteNote = async (id) => {
	const res = await axios.delete(baseUrl + id);
	return res.status;
};

const notesServices = { getAll, createNew, deleteNote };

export default notesServices;
