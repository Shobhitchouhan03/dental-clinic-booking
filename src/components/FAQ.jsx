import React, { useState } from "react";
import { ChevronDownIcon } from "./Icons";
import "./FAQ.css";

const faqs = [
  {
    q: "Do you offer painless treatment?",
    a: "Yes — we use modern numbing techniques and a gentle, step-by-step approach for procedures like root canals and fillings, and we explain each step before we begin.",
  },
  {
    q: "Is the clinic clean and hygienic?",
    a: "Sterilisation and hygiene are a top priority. Instruments are sanitised between every patient and the clinic is cleaned throughout the day.",
  },
  {
    q: "How do I book an appointment?",
    a: "Use the Book Appointment page to pick a treatment, preferred date and time, and submit the form — we'll confirm your slot by phone or WhatsApp shortly after.",
  },
  {
    q: "Do you treat dental emergencies?",
    a: "Yes, we accommodate emergency and tooth-pain cases as quickly as possible. Call or WhatsApp us directly for urgent issues.",
  },
  {
    q: "What are your clinic hours?",
    a: "We're open daily from the afternoon into the evening — see the exact hours on our Contact page, or call ahead to confirm same-day availability.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq">
      {faqs.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q} className={`faq__item ${isOpen ? "faq__item--open" : ""}`}>
            <button
              className="faq__question"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span>{item.q}</span>
              <ChevronDownIcon className="faq__chevron" />
            </button>
            <div className="faq__answer">
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FAQ;
