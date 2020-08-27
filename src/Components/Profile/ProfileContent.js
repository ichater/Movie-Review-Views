import React from "react";

export default function ProfileContent({
  profile: { description, likesAboutMovies, location },
}) {
  return (
    <div>
      <h4>About me</h4>
      <p>{description}</p>
      <h4>What I like about film</h4>
      <p>{likesAboutMovies}</p>
      <p>
        <strong>Location:</strong> {location}
      </p>
    </div>
  );
}
