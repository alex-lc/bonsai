import axios from "axios";

export const fetchTrees = async () => {
  const trees = await axios.get("http://localhost:8080/api/trees");
  return trees;
};
