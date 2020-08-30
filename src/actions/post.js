import { GET_POSTS, POST_ERROR } from ".types/types";
import axios from "axios";
import { setAlert } from "./alert";

//get posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("/posts");

    dispatch({ type: GET_POSTS, payload: data });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
