import React from "react";
import "../../styles/components/abouthero.css";
import HeroCV from "../../asserts/files/CV-Sunkara.pdf";

import DownloadBtn from "../DownloadBtn/DownloadBtn";

function AboutHero() {
  var heroskills_scripting = [
    "C",
    "C++",
    "Python",
    "Bash",
    "Embedded C",
    "JavaScript",
    "HTML & CSS",
    "Java",
  ];
  var heroskills_Databases = ["MySQL", "Mongodb"];
  var heroskills_FrameworksSoftwares = [
    "ReactJs",
    "Flutter",
    "NodeJs",
    "Qt & PyQt",
    "Docker",
    "Git",
    "GitLab",
  ];
  return (
    <section className="herosection__abouthero">
      <div className="abouthero__container">
        <div className="abouthero__sectitlewrapper">
          <h1 className="abouthero__sectitle">
            more <span className="abouthero__highlighter">about me</span>
          </h1>
        </div>
        <div className="abouthero__moreaboutherowrapper">
          <div className="abouthero__heroimgwrapper">
            <div className="abouthero__heroimg"></div>
          </div>
          <div className="abouthero__aboutherowrapper">
            <p className="abouthero__abouthero">
              <q>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </q>
            </p>
          </div>
        </div>
        <div className="abouthero__skillswrapper">
          <div className="abouthero__skilltitlewrapper">
            <h1 className="abouthero__skilltitle">
              my <span className="abouthero__highlighter">skills</span>{" "}
              inventory
            </h1>
          </div>
          <div className="abouthero__skillwrapper">
            <ul>
              <h4 className="heroskills__firstli">scripting languages</h4>
              {heroskills_scripting.map((scriptskill, index) => (
                <li key={index}>{scriptskill}</li>
              ))}
            </ul>
            <ul>
              <h4 className="heroskills__firstli">Databases</h4>
              {heroskills_Databases.map((databaseskill, index) => (
                <li key={index}>{databaseskill}</li>
              ))}
            </ul>
            <ul>
              <h4 className="heroskills__firstli">Frameworks & Softwares</h4>
              {heroskills_FrameworksSoftwares.map(
                (frameworksoftwareskill, index) => (
                  <li key={index}>{frameworksoftwareskill}</li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="abouthero__herocvwrapper">
          <DownloadBtn documentlink={HeroCV} documentname="CV-Sunkara" />
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
