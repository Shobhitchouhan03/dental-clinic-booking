import React from "react";
import { SmileWave } from "./Icons";
import "./PageHero.css";

function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
      <SmileWave className="divider-wave" />
    </section>
  );
}

export default PageHero;
