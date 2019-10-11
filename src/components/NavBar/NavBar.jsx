import React from "react";
import { Link } from "react-router-dom";
import "./NavBar";
import Title from "../Title/Title";

const NavBar = props => {
  let nav = props.user ? (
    // ternary is an issue
    <div>
      <Title />
      <span className="welcome">Yay! You're logged in, {props.user.name}!</span>
      <br />
      <br />
      {/* &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span>Click over here -></span> */}
      {/* &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; */}
      <Link to="/add" className="NavBar-link">
        <span>Add Event</span>
      </Link>
      <br />
      <br />
      {/* &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; */}
      <Link to="/" className="NavBar-link" onClick={props.logout}>
        Log Out
      </Link>
      <br />
      <br />
      <hr />
      <br />

      <br />
    </div>
  ) : (
    <div>
      <Link to="/login" className="NavBar-link">
        LOG IN
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/signup" className="NavBar-link">
        SIGN UP
      </Link>
    </div>
  );

  return <div className="NavBar">{nav}</div>;
};

export default NavBar;
