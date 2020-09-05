import alert from "./alert";
import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

describe("Testing the Alert Reducer", () => {
  describe("Alert with SET_ALERT", () => {
    it("has a payload of hello world", () => {
      const action = { type: SET_ALERT, payload: "Hello World" };
      const result = alert([], action);
      expect(result).toEqual(["Hello World"]);
    });
    it("has a payload of Borkuf", () => {
      const action = { type: SET_ALERT, payload: "Borkuf" };
      const result = alert([], action);
      expect(result).toEqual(["Borkuf"]);
    });
  });
  describe("Alert with REMOVE_ALERT", () => {
    it("has a payload of hello world", () => {
      const result = alert([], REMOVE_ALERT);
      expect(result).toEqual([]);
    });
  });
});
