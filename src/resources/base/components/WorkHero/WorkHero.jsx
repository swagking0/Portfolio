import React from "react";
import "../../styles/components/workhero.css";

import OrganisationCardData from "../../tempData/OrganisationCardData";

import OrganisationCard from "../OrganisationCard/OrganisationCard";

function WorkHero() {
  return (
    <section className="herosection__workhero">
      <div className="workhero__container">
        <div className="workhero__leftwrapper">
          {OrganisationCardData.map((data) => (
            <OrganisationCard
              key={data.id}
              organisationlogo={data.organisationlogo}
              herorole={data.herorole}
              organisationlink={data.organisationlink}
            />
          ))}
        </div>
        <div className="workhero__rightwrapper">
          <h1>
            <span className="workhero__highlighter">organisations</span> i
            crafted code for
          </h1>
        </div>
      </div>
    </section>
  );
}

export default WorkHero;
