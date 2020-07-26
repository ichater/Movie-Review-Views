import React, { useEffect, useState } from "react";

export default function UserMovieList({ getUser, id }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const setUserFunction = async () => {
      const user = await getUser("movielist", id);
      setUser(user);
      console.log(user);
    };
    setUserFunction();
  }, []);

  const content = user.username ? (
    <div className="user-page-wrapper">
      <div>Is Registering User</div>
      <div></div>
    </div>
  ) : (
    <p data-testid="No-List-Visible">Not registering user yet </p>
  );
  return content;
}
