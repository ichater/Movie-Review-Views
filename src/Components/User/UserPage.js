import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default function UserPage({ getUser, id }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const setUserFunction = async () => {
      const user = await getUser("users", id);
      setUser(user);
      console.log(user);
    };

    setUserFunction();
  }, []);

  const content = user.username ? (
    <div className="user-page-wrapper">
      <div>Username: {user.username}</div>
      <div>Email: {user.email}</div>
      {user.description ? (
        <div data-testid="user-description">
          Description: {user.description}
        </div>
      ) : (
        <div> No Bio avalible </div>
      )}
      <div>
        <Router>
          <Link to={`/movielist/${user._id}`}>
            <span key={user.id}> {user.username} MovieList </span>
          </Link>
        </Router>
      </div>
    </div>
  ) : (
    <p data-testid="loading">loading </p>
  );

  return content;
}
