import { fetchMovies } from "./movieSearch";
import axios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR } from "./types";

// "axios" is the path that is being mocked
jest.mock("axios");

describe("movieSearch actions", () => {
  const mockStore = configureMockStore([thunk]);
  const store = mockStore({});

  afterEach(() => {
    store.clearActions();
  });
  describe("fetchMovies", () => {
    it("Dispatches the expected actions", () => {
      axios.mockResolvedValue({ data: "Bruno Diaz" });
      return store.dispatch(fetchMovies("Christian Foord")).then(() => {
        expect(axios).toHaveBeenCalledWith({
          headers: null,
          method: "GET",
          url: `http://www.omdbapi.com/?apikey=47416750&s=Christian Foord`,
        });
        expect(store.getActions()).toEqual([
          { payload: "Bruno Diaz", type: FETCH_MOVIES_SUCCESS },
        ]);
      });
    });
    describe("When the request fails", () => {
      it("dispatches the expected actions", () => {
        axios.mockRejectedValue({
          response: { status: "Dusty", statusText: "Maggie" },
        });
        return store.dispatch(fetchMovies("Christian Foord")).then(() => {
          expect(store.getActions()).toEqual([
            {
              payload: { msg: "Maggie", status: "Dusty" },
              type: FETCH_MOVIES_ERROR,
            },
          ]);
        });
      });
    });
  });
});
