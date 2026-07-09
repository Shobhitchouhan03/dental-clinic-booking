import React from "react";
import { WhatsAppIcon } from "./Icons";
import clinic from "../data/clinicData.json";
import "./FloatingButtons.css";

function WhatsAppButton() {
  const message = encodeURIComponent(
    `Hi ${clinic.clinicName}, I'd like to know more about booking a dental appointment.`
  );
  const href = `https://wa.me/${clinic.whatsapp}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="float-btn float-btn--whatsapp float-btn--visible"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}

export default WhatsAppButton;
