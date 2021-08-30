import axios from "axios";

const baseUrl = "http://localhost:3001/notes/";

const getAll = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};

const deleteNote = async (id) => {
  const res = await axios.delete(baseUrl+id)
  return res.status;
}

export default { getAll, deleteNote };
