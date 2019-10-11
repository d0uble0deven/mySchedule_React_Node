import React from "react";
import { Link } from "react-router-dom";
import "./NavBar";
import Title from "../Title/Title";

const NavBar = props => {
  let nav = props.user ? (
    // ternary is an issue
    <div>
      <Title />
      <span className="NavBar-welcome">Welcome, {props.user.name}</span>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span>Check out your upcoming schedule</span>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="/add" className="NavBar-link">
        <span>ADD</span>
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="/" className="NavBar-link" onClick={props.logout}>
        LOG OUT
      </Link>
      <hr />
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
