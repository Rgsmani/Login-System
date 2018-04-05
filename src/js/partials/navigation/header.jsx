import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <h1>User Registration and Login</h1>
      <ul className="nav navbar-nav">
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/signup">Sign Up</NavLink></li>
      </ul>
    </div>
  </nav>
);

export default Header;