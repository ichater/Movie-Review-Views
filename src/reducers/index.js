import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import movies from "./movieSearch";

export default combineReducers({ alert, auth, profile, movies });
