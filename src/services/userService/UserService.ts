async function logout() {
  localStorage.clear();
}

const UserService = {
  logout,
};

export default UserService;
