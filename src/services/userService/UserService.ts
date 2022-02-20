import axios from "axios";

const api = {
  url: process.env.REACT_APP_API,
};

async function findUserById(id: number) {
  await axios
    .get(`${api.url}/user/${id}`)
    .then((res) => {
      if (res.data) {
        return res.data;
      }
    })
    .catch((e) => {
      return e;
    });
}

const UserService = {
  findUserById,
};

export default UserService;
