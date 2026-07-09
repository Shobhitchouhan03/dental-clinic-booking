import React from "react";
import { Link } from "react-router-dom";
import services from "../data/services.json";
import { ServiceCard } from "../components/Cards";
import PageHero from "../components/PageHero";
import "./Services.css";

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Complete dental care, under one roof"
        text="From routine cleaning to root canals and emergency tooth pain, here's how we can help."
      />

      <section className="section">
        <div className="container">
          <div className="services-page-grid">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>

          <div className="services-page__cta card">
            <div>
              <h2>Not sure which treatment you need?</h2>
              <p>Book a consultation and we'll recommend the right next step for you.</p>
            </div>
            <Link to="/appointment" className="btn btn--accent btn--lg">Book Appointment</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
