import React from "react";
import { Link } from "react-router-dom";
import { iconMap, ToothIcon } from "./Icons";
import "./Cards.css";

export function ServiceCard({ service, compact }) {
  const Icon = iconMap[service.icon] || ToothIcon;
  return (
    <div className={`card service-card ${compact ? "service-card--compact" : ""}`}>
      <div className="service-card__icon"><Icon width={26} height={26} /></div>
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      {!compact && (
        <Link to="/appointment" className="service-card__link">
          Book this treatment →
        </Link>
      )}
    </div>
  );
}

export function DentistCard({ dentist }) {
  return (
    <div className="card dentist-card">
      <div className="dentist-card__photo">
        {dentist.photo ? (
          <img src={dentist.photo} alt={dentist.name} />
        ) : (
          <span>{dentist.initials}</span>
        )}
      </div>
      <h3>{dentist.name}</h3>
      <p className="dentist-card__role">{dentist.role}</p>
      <p className="stars" aria-label={`${dentist.rating} out of 5 stars`}>
        {"★".repeat(Math.round(dentist.rating))}
        {"☆".repeat(5 - Math.round(dentist.rating))}
      </p>
      <p className="dentist-card__spec">{dentist.specialization}</p>
      <p className="dentist-card__bio">{dentist.bio}</p>
      <div className="dentist-card__meta">
        <span><strong>Experience:</strong> {dentist.experience}</span>
        <span><strong>Hours:</strong> {dentist.workingHours}</span>
      </div>
      <Link to="/appointment" className="btn btn--ghost btn--block">
        Book with {dentist.name.replace("Dr. ", "Dr. ")}
      </Link>
    </div>
  );
}

export function TestimonialCard({ testimonial }) {
  return (
    <div className="card testimonial-card">
      <p className="stars">{"★".repeat(testimonial.rating)}</p>
      <p className="testimonial-card__text">“{testimonial.text}”</p>
      <div className="testimonial-card__footer">
        <span className="testimonial-card__avatar">{testimonial.name.charAt(0)}</span>
        <div>
          <strong>{testimonial.name}</strong>
          <p>{testimonial.meta}</p>
        </div>
      </div>
    </div>
  );
}
