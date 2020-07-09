import axios from "axios";

export const getUserFunc = (id) => {
  return axios({
    method: "GET",
    url: `http://localhost:5000/users/${id}`,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};
