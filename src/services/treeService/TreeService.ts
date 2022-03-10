import axios from "axios";
import { AuthUtils } from "../utils/authUtils";

const api = {
  url: process.env.REACT_APP_API,
};

const fetchTrees = async () => {
  const isAuthenticated = AuthUtils.isAuthenticated();
  if (isAuthenticated) {
    const token = AuthUtils.getToken();
    if (token) {
      const config = AuthUtils.buildRequestConfig(token);
      const trees = await axios.get(`${api.url}/trees`, config);
      return trees;
    }
  } else {
    console.log("Failure.");
  }
};

const fetchUserTrees = async (id: number) => {
  const isAuthenticated = AuthUtils.isAuthenticated();
  if (isAuthenticated) {
    const token = AuthUtils.getToken();
    if (token) {
      const config = AuthUtils.buildRequestConfig(token);
      const trees = await axios.get(`${api.url}/trees/user/${id}`, config);
      return trees;
    }
  } else {
    console.log("Failure.");
  }
};

const plant = async (e: any) => {
  e.preventDefault();
  const isAuthenticated = AuthUtils.isAuthenticated();
  if (isAuthenticated) {
    const token = AuthUtils.getToken();
    if (token) {
      const config = AuthUtils.buildRequestConfig(token);
      const treeData = new FormData(e.target);
      treeData.append("lastPlanted", Date.now().toString());
      const res = await axios.post(`${api.url}/trees`, treeData, config);
      return res;
    }
  }
};

const deleteTree = async (id: number) => {
  const isAuthenticated = AuthUtils.isAuthenticated();
  if (isAuthenticated) {
    const token = AuthUtils.getToken();
    if (token) {
      const config = AuthUtils.buildRequestConfig(token);
      const isDeleted = await axios.delete(`${api.url}/trees/${id}`, config);
      return isDeleted ? true : false;
    }
  }
};

const TreeService = {
  fetchTrees,
  fetchUserTrees,
  plant,
  deleteTree,
};

export default TreeService;
