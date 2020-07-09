import React, { useEffect, useState } from "react";

export default function UserPage({ getUser, id }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const setUserFunction = async () => {
      const user = await getUser(id);
      setUser(user);
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
    </div>
  ) : (
    <p>loading </p>
  );

  return content;
}
