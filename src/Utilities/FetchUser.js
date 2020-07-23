import axios from "axios";

export const getUserFunc = (route, id) => {
  return axios({
    method: "GET",
    url: `http://localhost:5000/${route}/${id}`,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};
