import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function UserList() {
  const [userDisplay, setUserDisplay] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:5000/users/",
    })
      .then((res) => {
        setUserDisplay(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div>
        {userDisplay.map((user) => {
          return (
            <>
              <Link to={`/users/${user._id}`}>
                <div key={user.id}> {user.username} </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}
