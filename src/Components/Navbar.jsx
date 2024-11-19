import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row place-content-evenly">
      <NavLink to="/">
        Home
      </NavLink>
      
      <NavLink to="/pastes">
        Pastes
      </NavLink>
      <NavLink to="/paste/:id">
        View Paste
      </NavLink>
    </div>
  );
};

export default Navbar;
