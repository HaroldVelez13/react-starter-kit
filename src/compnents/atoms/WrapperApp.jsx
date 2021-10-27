import React from "react";
import { NavLink } from "react-router-dom";

function WrapperApp(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
          React Starter Kit
          </NavLink>
          <div className="ms-auto">
            <NavLink
              className="mx-2 link-light text-decoration-none"
              activeClassName="text-decoration-underline fs-5 "
              exact
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="mx-2 link-light text-decoration-none"
              activeClassName="text-decoration-underline fs-5 "
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className="mx-2 link-light text-decoration-none"
              activeClassName="text-decoration-underline fs-5 "
              to="/users"
            >
              Users
            </NavLink>
          </div>
        </div>
      </nav>
      <main className="container-xxl">
        <div className="py-5">
          <div className="mt-4">{props.children ?? null}</div>
        </div>
        
      </main>
    </div>
  );
}

export default WrapperApp;
