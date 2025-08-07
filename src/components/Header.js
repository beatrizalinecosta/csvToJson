import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">Conversor</Link>
        <div className="navbar-nav">
          <Link className={`nav-link ${location.pathname === "/csv-to-json" ? "active" : ""}`} to="/csv-to-json">
            CSV → JSON
          </Link>
          <Link className={`nav-link ${location.pathname === "/json-to-csv" ? "active" : ""}`} to="/json-to-csv">
            JSON → CSV
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
