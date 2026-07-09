import React, { useEffect } from "react";
import { CheckCircleIcon, CloseIcon } from "./Icons";
import "./ConfirmationModal.css";

function ConfirmationModal({ open, onClose, patientName, date, time }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-card__close" onClick={onClose} aria-label="Close">
          <CloseIcon width={18} height={18} />
        </button>
        <div className="modal-card__icon"><CheckCircleIcon width={40} height={40} /></div>
        <h3>Appointment Request Sent!</h3>
        <p>
          Thank you{patientName ? `, ${patientName}` : ""}. We've received your request
          {date ? ` for ${date}` : ""}{time ? ` at ${time}` : ""}. Our team will call or
          WhatsApp you shortly to confirm your slot.
        </p>
        <button className="btn btn--primary btn--block" onClick={onClose}>Done</button>
      </div>
    </div>
  );
}

export default ConfirmationModal;
