import React from "react";
import Sunflower from "../assets/img/sunflower.jpg";

function Profile() {
  return (
    <div>
      <h2>User's Profile</h2>
      <img src={Sunflower} alt="Profile"></img>
      <h3>Kellie A. Corrigan</h3>
    </div>
  );
}

export default Profile;