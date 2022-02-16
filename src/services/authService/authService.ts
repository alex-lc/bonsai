import axios from "axios";

const api = {
  url: process.env.REACT_APP_API,
};

const register = async (e: any) => {
  e.preventDefault();
  const userData = new FormData(e.target);
  const newUser = Object.fromEntries(userData);

  if (
    userData.get("username") !== null ||
    userData.get("password") !== null ||
    userData.get("email") !== null
  ) {
    return axios.post(`${api.url}/auth/signup`, newUser);
  }
};

const login = async (e: any) => {
  e.preventDefault();
  const userData = new FormData(e.target);
  const userToLogin = Object.fromEntries(userData);

  if (userData.get("username") !== null || userData.get("password") !== null) {
    return axios.post(`${api.url}/auth/signin`, userToLogin);
  }
};

const AuthService = {
  register,
  login,
};

export default AuthService;
