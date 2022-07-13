import React from "react";
import squirrel from "./resources/squirrel.jpg"

/* 
  feel free to add/remove any HTML you would like. Just remember that all content
  must be returned nested inside a single element (in this case, the .app-content div)
*/

const Home = () => {
  return (
    <div className="app-content">
      <h1>Welcome to this feature-rich test application</h1>
      <h2>We're glad you're here</h2>
      <img src={squirrel} alt="a cute little squirrel peering at you from the tall grass"></img>
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="https://www.google.com/">Google</a></li>
    <li><a class="dropdown-item" href="https://studio.appcues.com/">Studio in Production</a></li>
    <li><a class="dropdown-item" href="https://studio-staging.appcues.com/">Studio in Staging</a></li>
  </ul>
    </div>
  );
};

export default Home;
