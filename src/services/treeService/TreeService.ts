import axios, { AxiosRequestHeaders } from "axios";
import { AuthUtils } from "../utils/authUtils";

const api = {
  url: process.env.REACT_APP_API,
};

const fetchTrees = async () => {
  const isAuthenticated = AuthUtils.isAuthenticated();
  if (isAuthenticated) {
    const token = AuthUtils.getToken();
    const config: { headers: AxiosRequestHeaders } = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    const trees = await axios.get(`${api.url}/trees`, config);
    return trees;
  } else {
    console.log("Failure.");
  }
};

const fetchUserTrees = async (id: number) => {
  const isAuthenticated = AuthUtils.isAuthenticated();
  if (isAuthenticated) {
    const token = AuthUtils.getToken();
    const config: { headers: AxiosRequestHeaders } = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    const trees = await axios.get(`${api.url}/trees/user/${id}`, config);
    console.log("We made it here.");
    console.log("trees: " + trees.data);
    return trees.data;
  } else {
    console.log("Failure.");
  }
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
  fetchUserTrees,
  plant,
  deleteTree,
};

export default TreeService;
