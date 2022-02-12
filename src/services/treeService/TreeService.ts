import axios from "axios";
import Tree from "../../types/Tree";

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

const TreeService = {
  fetchTrees,
  plant,
};

export default TreeService;
