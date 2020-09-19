import React, { Component } from "react";
import "../../styles/components/landinghero.css";

import Typer from "../Typer/Typer";
import ScrollDown from "../ScrollDown/ScrollDown";

class LandingHero extends Component {
  render() {
    return (
      <div className="landinghero__container">
        <div className="landinghero__wrapper">
          <div className="landinghero__primarytitlewrapper">
            <h1 className="landinghero__primarytitle">
              hello{" "}
              <span
                role="img"
                aria-labelledby="landinghero__primarytitle"
                className="landinghero__wave"
              >
                &#128075;
              </span>
            </h1>
          </div>
          <div className="landinghero__heronamewrapper">
            <h2 className="landinghero__heroname">
              i'm <span className="landinghero__heronamelogo">sunkara.</span>{" "}
              mohith bhargav
            </h2>
          </div>
          <div className="landinghero__secondarytitlewrapper">
            <h1 className="landinghero__secondarytitle">
              a{" "}
              <span className="landinghero__secondarytitleprof">engineer</span>{" "}
              in
            </h1>
          </div>
          <div className="landinghero__herotyperwrapper">
            <Typer
              dataText={[
                "artificial intelligence.",
                "full stack development.",
                "robotics.",
                "electronics.",
              ]}
            />
          </div>
        </div>
        <ScrollDown />
      </div>
    );
  }
}

export default LandingHero;
