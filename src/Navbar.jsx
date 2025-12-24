import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "./assets/logo.png"; // path to your logo

export default function Navbar() {
  return (
    <>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          HOME
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
          PROJECTS
        </NavLink>
      </nav>

      {/* Banner under navbar */}
      <div className="nav-banner">
        <img src={logo} alt="Logo" className="nav-logo" />
      </div>
    </>
  );
}
