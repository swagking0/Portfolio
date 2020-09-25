import React from "react";
import "../../styles/components/workhero.css";

import OrganisationCardData from "../../tempData/OrganisationCardData";

import OrganisationCard from "../OrganisationCard/OrganisationCard";

function WorkHero() {
  return (
    <section className="herosection__workhero">
      <div className="workhero__container">
        <div className="workhero__leftwrapper">
          {OrganisationCardData.map((data) =>
            data.workherodata.map((workdata) => (
              <OrganisationCard
                key={workdata.id}
                organisationlogo={workdata.organisationlogo}
                heroroletitle="Role"
                herorole={workdata.herorole}
                organisationlink={workdata.organisationlink}
              />
            ))
          )}
        </div>
        <div className="workhero__rightwrapper">
          <h1>
            <span className="globalshared__highlighter">organisations</span> i
            crafted code for{" "}
            <span role="img" aria-labelledby="workhero__rightwrapper">
              &#128188;
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default WorkHero;
