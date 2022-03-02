const isAuthenticated = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return true;
  } else {
    return false;
  }
};

const getToken = () => {
  return localStorage.getItem("token");
};

export const AuthUtils = {
  isAuthenticated,
  getToken,
};
