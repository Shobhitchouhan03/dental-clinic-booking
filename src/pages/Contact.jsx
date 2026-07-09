import React from "react";
import clinic from "../data/clinicData.json";
import PageHero from "../components/PageHero";
import FAQ from "../components/FAQ";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, WhatsAppIcon } from "../components/Icons";
import "./Contact.css";

function Contact() {
  const waMessage = encodeURIComponent(`Hi ${clinic.clinicName}, I have a question about an appointment.`);

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We'd love to hear from you"
        text="Reach out by phone, WhatsApp, or visit us directly — whichever is easiest."
      />

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="card contact-info__item">
              <div className="contact-info__icon"><PhoneIcon width={22} height={22} /></div>
              <div>
                <h3>Call Us</h3>
                <a href={`tel:${clinic.phone}`}>{clinic.phoneDisplay}</a>
              </div>
            </div>

            <div className="card contact-info__item">
              <div className="contact-info__icon"><WhatsAppIcon width={22} height={22} /></div>
              <div>
                <h3>WhatsApp</h3>
                <a href={`https://wa.me/${clinic.whatsapp}?text=${waMessage}`} target="_blank" rel="noreferrer">
                  Chat with us
                </a>
              </div>
            </div>

            <div className="card contact-info__item">
              <div className="contact-info__icon"><MailIcon width={22} height={22} /></div>
              <div>
                <h3>Email</h3>
                <a href={`mailto:${clinic.email}`}>{clinic.email}</a>
              </div>
            </div>

            <div className="card contact-info__item">
              <div className="contact-info__icon"><MapPinIcon width={22} height={22} /></div>
              <div>
                <h3>Address</h3>
                <p>{clinic.address.line1}<br />{clinic.address.line2}<br />{clinic.address.city}</p>
              </div>
            </div>

            <div className="card contact-info__item">
              <div className="contact-info__icon"><ClockIcon width={22} height={22} /></div>
              <div>
                <h3>Hours</h3>
                {clinic.hours.map((h) => (
                  <p key={h.day} className="contact-hours-row"><span>{h.day}</span><strong>{h.time}</strong></p>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-map card">
            <iframe
              title="Clinic location map"
              src={clinic.address.mapEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Common Questions</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <FAQ />
        </div>
      </section>
    </>
  );
}

export default Contact;
