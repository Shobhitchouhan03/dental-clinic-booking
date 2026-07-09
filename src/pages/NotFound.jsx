import React from "react";
import { Link } from "react-router-dom";
import { ToothIcon } from "../components/Icons";

function NotFound() {
  return (
    <section className="section" style={{ textAlign: "center" }}>
      <div className="container">
        <div style={{ color: "var(--color-primary)", marginBottom: 16 }}>
          <ToothIcon width={56} height={56} />
        </div>
        <h1>Page not found</h1>
        <p>The page you're looking for has gone missing — like a lost filling.</p>
        <Link to="/" className="btn btn--primary">Back to Home</Link>
      </div>
    </section>
  );
}

export default NotFound;
