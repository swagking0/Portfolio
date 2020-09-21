import React, { Component } from "react";
import "../../styles/components/organisationcard.css";

class OrganisationCard extends Component {
  render() {
    const { organisationlogo, herorole, organisationlink } = this.props;
    return (
      <div className="organisationcard__container">
        <div className="organisationcard__wrapper">
          <div className="organisationcard__imgbox">
            <img src={organisationlogo} alt="heroorglogo"></img>
          </div>
          <div className="organisationcard__content">
            <h1>Role</h1>
            <h3>{herorole}</h3>
            <a
              href={organisationlink}
              target="_blank"
              rel="noopener noreferrer"
            >
              learn more about the organisation
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default OrganisationCard;
