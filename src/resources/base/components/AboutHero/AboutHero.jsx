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
            more <span className="globalshared__highlighter">about me</span>
          </h1>
        </div>
        <div className="abouthero__moreaboutherowrapper">
          <div className="abouthero__heroimgwrapper">
            <div className="abouthero__heroimg"></div>
          </div>
          <div className="abouthero__aboutherowrapper">
            <p className="abouthero__abouthero">
              <q>
                I am a self-taught{" "}
                <span className="globalshared__highlighter">
                  software developer
                </span>{" "}
                and an{" "}
                <span className="globalshared__highlighter">
                  interdisciplinary engineer
                </span>{" "}
                in the fields of instrumentation, electronics and artificial
                intelligence with a thought process to explore new skills sets
                and knowledge bases. With that saying, I love to solve
                real-world problems irrespective of the discipline. If I fail, I
                will never back off. Instead, I will follow my simple success
                cycle{" "}
                <span className="globalshared__highlighter">
                  <q>push the boundaries</q>
                </span>
                ,{" "}
                <span className="globalshared__highlighter">
                  <q>work hard</q>
                </span>{" "}
                and{" "}
                <span className="globalshared__highlighter">
                  <q>learn</q>
                </span>
                . Moreover, I believe that failure helps you to make a better
                version of yourself. Apart from being an engineer, I love to
                play virtual games and explore my passion for being a gamer.
              </q>
            </p>
          </div>
        </div>
        <div className="abouthero__skillswrapper">
          <div className="abouthero__skilltitlewrapper">
            <h1 className="abouthero__skilltitle">
              my <span className="globalshared__highlighter">skills</span>{" "}
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
