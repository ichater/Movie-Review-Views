import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
  return (
    <div>
      <Link to="/edit-profile">
        <i className="fas fa-user-circle"></i>Edit Profile
      </Link>
      <Link to="/add-movie-quote">
        <i className="fas fa-graduation-cap"></i>Add Movie Quote
      </Link>
    </div>
  );
};

export default DashboardActions;
