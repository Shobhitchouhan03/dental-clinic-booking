import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MenuIcon, CloseIcon, ToothIcon } from "./Icons";
import clinic from "../data/clinicData.json";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/dentists", label: "Dentists" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => setOpen(false), [location]);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__logo" aria-label={`${clinic.clinicName} home`}>
          <span className="navbar__logo-icon"><ToothIcon width={22} height={22} /></span>
          <span>
            {clinic.logoText} <em>{clinic.logoAccent}</em>
          </span>
        </NavLink>

        <nav className="navbar__links navbar__links--desktop" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => `navbar__link ${isActive ? "navbar__link--active" : ""}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/appointment" className="btn btn--accent navbar__cta">
          Book Appointment
        </NavLink>

        <button
          className="navbar__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div className={`navbar__mobile ${open ? "navbar__mobile--open" : ""}`}>
        <nav className="navbar__links navbar__links--mobile" aria-label="Mobile">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => `navbar__link ${isActive ? "navbar__link--active" : ""}`}
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/appointment" className="btn btn--accent btn--block">
            Book Appointment
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
