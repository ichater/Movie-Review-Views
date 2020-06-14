import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function UserPage() {
  const [user, setUser] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:5000/users/${id}`,
    })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return <div>{user.username}</div>;
}
