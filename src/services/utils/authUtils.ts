const isAuthenticated = () => {
  const token = localStorage.getItem("token");

  if (token !== null || token !== "") {
    return true;
  }

  return false;
};

const getToken = () => {
  return localStorage.getItem("token");
};

export const AuthUtils = {
  isAuthenticated,
  getToken,
};
