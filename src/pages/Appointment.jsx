import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import clinic from "../data/clinicData.json";
import services from "../data/services.json";
import dentists from "../data/dentists.json";
import PageHero from "../components/PageHero";
import ConfirmationModal from "../components/ConfirmationModal";
import { CalendarIcon, ClockIcon, PhoneIcon } from "../components/Icons";
import "./Appointment.css";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  age: "",
  gender: "",
  date: "",
  time: "",
  treatment: "",
  dentist: "",
  message: "",
};

function Appointment() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [touched, setTouched] = useState(false);
  const [submitted, setSubmitted] = useState({ name: "", date: "", time: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const isValid =
    form.name.trim() &&
    form.phone.trim().length >= 8 &&
    form.email.trim().includes("@") &&
    form.date &&
    form.time &&
    form.treatment;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched(true);
    if (!isValid) return;

    setStatus("loading");
    setErrorMsg("");

    const templateParams = {
      to_email: clinic.email,
      clinic_name: clinic.clinicName,
      patient_name: form.name,
      patient_phone: form.phone,
      patient_email: form.email,
      patient_age: form.age || "Not provided",
      patient_gender: form.gender || "Not specified",
      appointment_date: form.date,
      appointment_time: form.time,
      treatment_type: form.treatment,
      preferred_dentist: form.dentist || "No preference",
      message: form.message || "—",
    };

    try {
      // Reads config from src/data/clinicData.json -> emailjs { serviceId, templateId, publicKey }
      // Replace those placeholders with your real EmailJS credentials from emailjs.com
      await emailjs.send(
        clinic.emailjs.serviceId,
        clinic.emailjs.templateId,
        templateParams,
        clinic.emailjs.publicKey
      );
      setStatus("success");
      setSubmitted({ name: form.name, date: form.date, time: form.time });
      setModalOpen(true);
      setForm(initialForm);
      setTouched(false);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        "We couldn't send your request automatically. Please call or WhatsApp us directly, or try again."
      );
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Book Appointment"
        title="Let's find you a time that works"
        text="Fill in your details below and our team will confirm your slot by phone or WhatsApp."
      />

      <section className="section">
        <div className="container appointment-grid">
          <form className="appointment-form card" onSubmit={handleSubmit} noValidate>
            <h2>Patient Details</h2>

            <div className="form-row">
              <label>
                Patient Name<span>*</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  required
                />
              </label>
            </div>

            <div className="form-row form-row--split">
              <label>
                Mobile Number<span>*</span>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  required
                />
              </label>
              <label>
                Email Address<span>*</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>

            <div className="form-row form-row--split">
              <label>
                Age
                <input
                  type="number"
                  name="age"
                  min="0"
                  max="120"
                  value={form.age}
                  onChange={handleChange}
                  placeholder="Age"
                />
              </label>
              <label>
                Gender
                <select name="gender" value={form.gender} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </label>
            </div>

            <div className="form-row form-row--split">
              <label>
                Appointment Date<span>*</span>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Preferred Time<span>*</span>
                <select name="time" value={form.time} onChange={handleChange} required>
                  <option value="">Select a time</option>
                  <option>4:00 PM</option>
                  <option>4:30 PM</option>
                  <option>5:00 PM</option>
                  <option>5:30 PM</option>
                  <option>6:00 PM</option>
                  <option>6:30 PM</option>
                  <option>7:00 PM</option>
                  <option>7:30 PM</option>
                  <option>8:00 PM</option>
                </select>
              </label>
            </div>

            <div className="form-row form-row--split">
              <label>
                Treatment Type<span>*</span>
                <select name="treatment" value={form.treatment} onChange={handleChange} required>
                  <option value="">Select treatment</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.name}>{s.name}</option>
                  ))}
                </select>
              </label>
              <label>
                Preferred Dentist
                <select name="dentist" value={form.dentist} onChange={handleChange}>
                  <option value="">No preference</option>
                  {dentists.map((d) => (
                    <option key={d.id} value={d.name}>{d.name}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="form-row">
              <label>
                Message / Notes
                <textarea
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your concern (optional)"
                />
              </label>
            </div>

            {touched && !isValid && (
              <p className="form-alert form-alert--error">
                Please fill in all required fields marked with *.
              </p>
            )}
            {status === "error" && <p className="form-alert form-alert--error">{errorMsg}</p>}

            <button type="submit" className="btn btn--accent btn--lg btn--block" disabled={status === "loading"}>
              {status === "loading" ? "Sending your request…" : "Confirm Appointment"}
            </button>

            <p className="form-note">
              Prefer to talk it through? Call us at{" "}
              <a href={`tel:${clinic.phone}`}>{clinic.phoneDisplay}</a>.
            </p>
          </form>

          <aside className="appointment-summary">
            <div className="card appointment-summary__card">
              <h3>Your Appointment</h3>
              <div className="summary-row">
                <CalendarIcon width={18} height={18} />
                <span>{form.date || "Choose a date"}</span>
              </div>
              <div className="summary-row">
                <ClockIcon width={18} height={18} />
                <span>{form.time || "Choose a time"}</span>
              </div>
              <div className="summary-row">
                <PhoneIcon width={18} height={18} />
                <span>{form.treatment || "Choose a treatment"}</span>
              </div>
              <p className="appointment-summary__note">
                We'll confirm this request by phone or WhatsApp within a few hours.
              </p>
            </div>

            <div className="card appointment-summary__card">
              <h3>Clinic Hours</h3>
              {clinic.hours.map((h) => (
                <p key={h.day} className="summary-hours-row">
                  <span>{h.day}</span>
                  <strong>{h.time}</strong>
                </p>
              ))}
              <p className="appointment-summary__note">{clinic.hoursNote}</p>
            </div>
          </aside>
        </div>
      </section>

      <ConfirmationModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        patientName={submitted.name}
        date={submitted.date}
        time={submitted.time}
      />
    </>
  );
}

export default Appointment;
