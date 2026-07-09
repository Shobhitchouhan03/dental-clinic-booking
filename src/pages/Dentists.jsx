import React from "react";
import dentists from "../data/dentists.json";
import { DentistCard } from "../components/Cards";
import PageHero from "../components/PageHero";
import "./Dentists.css";

function Dentists() {
  return (
    <>
      <PageHero
        eyebrow="Meet the Team"
        title="Dentists who take the time to listen"
        text="Get to know the team behind your treatment plan."
      />
      <section className="section">
        <div className="container">
          <div className="dentists-grid">
            {dentists.map((d) => (
              <DentistCard key={d.id} dentist={d} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Dentists;
