import axios from "axios";
import { AuthUtils } from "../utils/authUtils";
import { phaseMap } from "../../utils/phaseMap";
import { DataUtils } from "../utils/dataUtils";

const api = {
  url: process.env.REACT_APP_API,
};

/**
 * Fetch all trees
 * @returns all trees
 * NOTE: Will probably remove this later.
 */
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

/**
 * Fetch trees created by specific user ID
 * @param id
 * @returns
 */
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

/**
 * Plant a new tree
 * @param e
 * @returns
 */
const plant = async (e: any) => {
  e.preventDefault();
  const isAuthenticated = AuthUtils.isAuthenticated();
  if (isAuthenticated) {
    const token = AuthUtils.getToken();
    if (token) {
      const config = AuthUtils.buildRequestConfig(token);
      const treeData = new FormData(e.target);
      const res = await axios.post(`${api.url}/trees`, treeData, config);
      return res;
    }
  }
};

/**
 * Delete tree by tree ID
 * @param id
 * @returns
 */
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

/**
 * Calculate tree growth phase / stage
 */
const calculatePhase = (lastPlanted: string) => {
  const daysSincePlanted = DataUtils.calculateNumDays(lastPlanted);
  return phaseMap[daysSincePlanted];
};

const TreeService = {
  fetchTrees,
  fetchUserTrees,
  plant,
  deleteTree,
  calculatePhase,
};

export default TreeService;
