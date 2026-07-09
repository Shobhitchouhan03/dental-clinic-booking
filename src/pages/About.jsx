import React from "react";
import { Link } from "react-router-dom";
import clinic from "../data/clinicData.json";
import { ShieldToothIcon, SparkleToothIcon, ToothIcon, SmileIcon } from "../components/Icons";
import PageHero from "../components/PageHero";
import "./About.css";

const values = [
  { icon: SparkleToothIcon, title: "Painless Technique", text: "We prioritise modern, gentle methods so treatment is as comfortable as possible." },
  { icon: ShieldToothIcon, title: "Hygiene & Safety", text: "Every instrument is sterilised and the clinic is kept spotless throughout the day." },
  { icon: ToothIcon, title: "Honest Guidance", text: "We explain your options clearly so you can make confident decisions about your care." },
  { icon: SmileIcon, title: "Patient Comfort", text: "A calm, women-owned clinic built to put anxious patients at ease." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={`The story behind ${clinic.clinicName}`}
        text={clinic.shortDescription}
      />

      <section className="section">
        <div className="container about__grid">
          <div className="about__visual" aria-hidden="true">
            <div className="about__blob"><ToothIcon width={110} height={110} /></div>
          </div>
          <div>
            <span className="eyebrow">Our mission</span>
            <h2>Dentistry that feels human, not clinical</h2>
            <p>
              {clinic.clinicName} was founded on a simple idea: dental visits shouldn't be
              stressful. From the moment you walk in, our focus is on clear communication,
              gentle handling, and a clean, calm environment.
            </p>
            <p>
              As a {clinic.womenOwned ? "women-owned" : "locally owned"} clinic in Nangloi, we've
              built our reputation one careful, painless treatment at a time — and our{" "}
              {clinic.rating}/5 rating from {clinic.reviewCount} reviews reflects that care.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we stand for</span>
            <h2>Our core values</h2>
          </div>
          <div className="values-grid">
            {values.map((v) => (
              <div className="card value-card" key={v.title}>
                <div className="value-card__icon"><v.icon width={26} height={26} /></div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about__cta card">
          <div>
            <h2>Come see the clinic for yourself</h2>
            <p>We're located on Najafgarh Road, Nangloi — a short visit could be the start of a healthier smile.</p>
          </div>
          <Link to="/appointment" className="btn btn--accent btn--lg">Book Appointment</Link>
        </div>
      </section>
    </>
  );
}

export default About;
