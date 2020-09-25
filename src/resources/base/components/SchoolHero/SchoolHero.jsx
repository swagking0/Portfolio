import React from "react";
import "../../styles/components/schoolhero.css";

import OrganisationCardData from "../../tempData/OrganisationCardData";

import OrganisationCard from "../OrganisationCard/OrganisationCard";

function SchoolHero() {
  return (
    <section className="herosection__schoolhero">
      <div className="schoolhero__container">
        <div className="schoolhero__leftwrapper">
          <h1>
            <span className="globalshared__highlighter">institutions</span>{" "}
            where i engineered myself{" "}
            <span role="img" aria-labelledby="schoolhero__leftwrapper">
              🎓
            </span>
          </h1>
        </div>
        <div className="schoolhero__rightwrapper">
          {OrganisationCardData.map((data) =>
            data.schoolherodata.map((schooldata) => (
              <OrganisationCard
                key={schooldata.id}
                organisationlogo={schooldata.institutionlogo}
                heroroletitle="Degree"
                herorole={schooldata.institutiondegree}
                organisationlink={schooldata.institutionlink}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default SchoolHero;
