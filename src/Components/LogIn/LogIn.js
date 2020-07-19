import React from "react";
import { Link } from "react-router-dom";

export default function LogIn() {
  return (
    <div>
      {" "}
      <form action="/register" method="POST">
        <div>
          <label for="userName">User Name: </label>
          <input type="text" id="userName" name="userName"></input>
        </div>
        <div>
          <label for="password">Password: </label>
          <input type="text" id="password" name="password"></input>
        </div>
        <button type="submit">Register</button>
      </form>
      <Link to="/register"> Register </Link>
    </div>
  );
}
