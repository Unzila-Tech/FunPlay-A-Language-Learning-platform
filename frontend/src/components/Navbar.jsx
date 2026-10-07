import React from "react";

function Navbar() {
  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <img src="images/logo.png" alt="Logo" />
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/login">Login</a>

        <a href="/register" className="register-btn">
          Register
        </a>
      </div>

    </nav>
  );
}

export default Navbar;