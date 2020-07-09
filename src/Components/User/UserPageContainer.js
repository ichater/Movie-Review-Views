import React from "react";
import { getUserFunc } from "../../Utilities/FetchUser";
import UserPage from "./UserPage";
import { useParams } from "react-router-dom";

export default function UserPageContainer() {
  const { id } = useParams();
  return (
    <>
      <UserPage getUser={getUserFunc} id={id} />
    </>
  );
}
