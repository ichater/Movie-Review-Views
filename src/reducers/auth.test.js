import auth, { initialState } from "./auth";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  DELETE_ACCOUNT,
} from "../actions/types";

describe("Testing the Auth Reducer", () => {
  describe("auth reducer with REGISTER_SUCCESS", () => {
    it("Bruno Registers successfully with a username email and password", () => {
      const action = {
        type: REGISTER_SUCCESS,
        payload: { username: "Bruno", email: "Diaz", password: "truth123" },
      };
      const result = auth(initialState, action);
      expect(result).toEqual({
        email: "Diaz",
        isAuthenticated: true,
        loading: false,
        password: "truth123",
        token: null,
        user: null,
        username: "Bruno",
      });
    });
  });
  describe("action type LOGIN_SUCCESS", () => {
    it("Log in successfully with appropriate email and password", () => {
      const action = {
        type: LOGIN_SUCCESS,
        payload: { email: "Diaz@bork.com", password: "truth123" },
      };
      const result = auth(initialState, action);
      expect(result).toEqual({
        email: "Diaz@bork.com",
        isAuthenticated: true,
        loading: false,
        password: "truth123",
        token: null,
        user: null,
      });
    });
  });
  describe("action type LOGIN_FAIL", () => {
    it("Payload is not returned if LOGIN_FAIL is the action", () => {
      const action = {
        type: LOGIN_FAIL,
        payload: { email: "Diaz@bork.com", password: "truth123" },
      };
      const result = auth(initialState, action);
      expect(result).toEqual({
        isAuthenticated: false,
        loading: false,
        token: null,
        user: null,
      });
    });
  });
  describe("action type LOGOUT", () => {
    it("Payload is not returned if LOGOUT is the action", () => {
      const action = {
        type: LOGOUT,
        payload: { email: "Diaz@bork.com", password: "truth123" },
      };
      const result = auth(initialState, action);
      expect(result).toEqual({
        isAuthenticated: false,
        loading: false,
        token: null,
        user: null,
      });
    });
  });
});
