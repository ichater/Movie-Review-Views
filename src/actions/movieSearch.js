import { FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR } from "./types";
import axios from "axios";

export const fetchMovies = (titleSearch) => async (dispatch) => {
  try {
    const res = await axios({
      headers: null,
      method: "GET",
      url: `http://www.omdbapi.com/?apikey=47416750&s=${titleSearch}`,
    });
    dispatch({
      type: FETCH_MOVIES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    //dispatch action that shows alert
    dispatch({
      type: FETCH_MOVIES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
