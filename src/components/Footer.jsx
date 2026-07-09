import React from "react";
import { Link } from "react-router-dom";
import clinic from "../data/clinicData.json";
import {
  ToothIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  InstagramIcon,
  FacebookIcon,
} from "./Icons";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="navbar__logo footer__logo">
            <span className="navbar__logo-icon"><ToothIcon width={20} height={20} /></span>
            <span>{clinic.logoText} <em>{clinic.logoAccent}</em></span>
          </div>
          <p>{clinic.shortDescription}</p>
          <div className="footer__social">
            {clinic.social.instagram && (
              <a href={clinic.social.instagram} aria-label="Instagram" target="_blank" rel="noreferrer"><InstagramIcon width={18} height={18} /></a>
            )}
            {clinic.social.facebook && (
              <a href={clinic.social.facebook} aria-label="Facebook" target="_blank" rel="noreferrer"><FacebookIcon width={18} height={18} /></a>
            )}
          </div>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <Link to="/about">About Clinic</Link>
          <Link to="/services">Services</Link>
          <Link to="/dentists">Our Dentists</Link>
          <Link to="/appointment">Book Appointment</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <a href={`tel:${clinic.phone}`}><PhoneIcon width={16} height={16} /> {clinic.phoneDisplay}</a>
          <a href={`mailto:${clinic.email}`}><MailIcon width={16} height={16} /> {clinic.email}</a>
          <a href={clinic.address.mapsUrl} target="_blank" rel="noreferrer">
            <MapPinIcon width={16} height={16} /> {clinic.address.line1}, {clinic.address.city}
          </a>
        </div>

        <div className="footer__col">
          <h4>Clinic Hours</h4>
          {clinic.hours.map((h) => (
            <p key={h.day} className="footer__hours-row"><span>{h.day}</span><span>{h.time}</span></p>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {year} {clinic.clinicName}. All rights reserved.</span>
          <span>Designed for a healthier smile.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
