import React from "react";
import { getUserFunc } from "../../Utilities/FetchUser";
import { useParams } from "react-router-dom";
import UserMovieList from "./UserMovieList";

export default function UserMovieListContainer() {
  const { id } = useParams();
  return (
    <>
      <UserMovieList getUser={getUserFunc} id={id} />{" "}
    </>
  );
}
