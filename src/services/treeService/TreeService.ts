import axios from "axios";

const api = {
  url: process.env.REACT_APP_API,
};

const fetchTrees = async () => {
  const trees = await axios.get(`${api.url}/trees`);
  return trees;
};

const plant = async (e: any) => {
  e.preventDefault();
  const treeData = new FormData(e.target);
  treeData.append("lastPlanted", Date.now().toString());
  return axios.post(`${api.url}/trees`, treeData);
};

const deleteTree = async (id: number) => {
  const isDeleted = await axios.delete(`${api.url}/trees/${id}`);

  return isDeleted ? true : false;
};

const TreeService = {
  fetchTrees,
  plant,
  deleteTree,
};

export default TreeService;
