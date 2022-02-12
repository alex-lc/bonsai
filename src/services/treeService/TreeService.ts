import axios from "axios";
import Tree from "../../types/Tree";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

const plant = async (e: any) => {
  e.preventDefault();
  const treeData = new FormData(e.target);
  treeData.append("lastPlanted", Date.now().toString());
  return axios.post("http://localhost:8080/api/trees", treeData);
};

const TreeService = {
  plant,
};

export default TreeService;
