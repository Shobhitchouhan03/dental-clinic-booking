import React from "react";
import { Link } from "react-router-dom";
import clinic from "../data/clinicData.json";
import services from "../data/services.json";
import testimonials from "../data/testimonials.json";
import { ServiceCard, TestimonialCard } from "../components/Cards";
import {
  ToothIcon,
  ShieldToothIcon,
  SparkleToothIcon,
  SmileWave,
  CalendarIcon,
} from "../components/Icons";
import "./Home.css";

function Home() {
  const featured = services.filter((s) => s.featured).slice(0, 4);

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <span className="eyebrow">
              <ToothIcon width={14} height={14} /> {clinic.womenOwned ? "Women-owned clinic" : "Dental Clinic"} · Nangloi, New Delhi
            </span>
            <h1>
              Gentle dental care that puts your <em>smile</em> first.
            </h1>
            <p className="hero__lead">{clinic.shortDescription}</p>
            <div className="hero__actions">
              <Link to="/appointment" className="btn btn--accent btn--lg">
                <CalendarIcon width={18} height={18} /> Book Appointment
              </Link>
              <Link to="/services" className="btn btn--ghost btn--lg">View Services</Link>
            </div>
            <div className="hero__rating">
              <span className="stars">{"★".repeat(Math.round(clinic.rating))}</span>
              <strong>{clinic.rating}/5</strong>
              <span>from {clinic.reviewCount} Google reviews</span>
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="hero__blob">
              <ToothIcon width={140} height={140} />
            </div>
            <div className="hero__badge hero__badge--top">
              <SparkleToothIcon width={20} height={20} />
              <span>Painless Treatments</span>
            </div>
            <div className="hero__badge hero__badge--bottom">
              <ShieldToothIcon width={20} height={20} />
              <span>Clean &amp; Hygienic</span>
            </div>
          </div>
        </div>
        <SmileWave className="divider-wave" />
      </section>

      {/* ---------- Stats strip ---------- */}
      <section className="stats-strip">
        <div className="container stats-strip__grid">
          {clinic.stats.map((s) => (
            <div key={s.label} className="stats-strip__item">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Clinic introduction ---------- */}
      <section className="section">
        <div className="container intro__grid">
          <div className="intro__visual" aria-hidden="true">
            <div className="intro__card intro__card--1">
              <ToothIcon width={34} height={34} />
              <span>Modern Equipment</span>
            </div>
            <div className="intro__card intro__card--2">
              <SparkleToothIcon width={34} height={34} />
              <span>Sterile Instruments</span>
            </div>
          </div>
          <div>
            <span className="eyebrow">About the clinic</span>
            <h2>A calm, welcoming clinic built around your comfort</h2>
            <p>
              At {clinic.clinicName}, every visit starts with a conversation. We take the time
              to explain your treatment in plain language, use gentle techniques to minimise
              discomfort, and keep the clinic spotless from the waiting area to the chair.
            </p>
            <p>
              Whether you're here for a routine cleaning or a more involved procedure like a
              root canal, our goal is the same: a healthier smile, without the anxiety.
            </p>
            <Link to="/about" className="btn btn--primary">More About Us</Link>
          </div>
        </div>
      </section>

      {/* ---------- Why choose us ---------- */}
      <section className="section section--muted">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why choose us</span>
            <h2>Care that patients keep coming back for</h2>
          </div>
          <div className="why-grid">
            {[
              { icon: SparkleToothIcon, title: "Painless Approach", text: "Modern numbing and gentle technique for a comfortable visit." },
              { icon: ShieldToothIcon, title: "Hygiene First", text: "Strict sterilisation standards for every instrument, every patient." },
              { icon: ToothIcon, title: "Clear Explanations", text: "You'll know exactly what's happening and why, at every step." },
              { icon: CalendarIcon, title: "Easy Booking", text: "Book online in minutes and get confirmation by phone or WhatsApp." },
            ].map((item) => (
              <div className="why-card card" key={item.title}>
                <div className="why-card__icon"><item.icon width={28} height={28} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Featured services ---------- */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Treatments</span>
            <h2>Featured Services</h2>
            <p>A few of the treatments patients book with us most.</p>
          </div>
          <div className="services-grid">
            {featured.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
          <div className="services-cta">
            <Link to="/services" className="btn btn--ghost">See All Services</Link>
          </div>
        </div>
      </section>

      {/* ---------- Testimonials ---------- */}
      <section className="section section--muted">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Patient stories</span>
            <h2>What our patients say</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="cta">
        <div className="container cta__inner">
          <h2>Ready for a healthier, brighter smile?</h2>
          <p>Book your appointment today — it only takes a minute.</p>
          <Link to="/appointment" className="btn btn--accent btn--lg">Book Appointment</Link>
        </div>
      </section>
    </>
  );
}

export default Home;
