import React from "react";

import "../../styles/components/projecthero.css";

import Filtertable from "../Filtertable/Filtertable";

function ProjectHero() {
  const ITEMS = [
    {
      category: "artificial intelligence",
      name: "Relation Classification via Convolutional Deep Neural Networks",
    },
    {
      category: "artificial intelligence",
      name: "Using Spiking Neural Networks as a Sudoku Solver",
    },
    { category: "full stack development", name: "Gsheet Editor" },
    { category: "full stack development", name: "Personal Portfolio Website" },
    {
      category: "robotics",
      name:
        "Manipulation of Objects with Robotic Arms in Simulated Environments",
    },
    {
      category: "robotics",
      name:
        "A User Study on Modelling Embodiment in Social Robotic Companions: Using Tamagotchi & NAO",
    },
    {
      category: "electronics",
      name:
        "Integration of a Microphone in the AMIRO Platform, Data Analysis and Utilization of This Information in Applications",
    },
    {
      category: "electronics",
      name: "Unmanned Bottle Sanitization Using Rectilinear Mechanism",
    },
    { category: "virtual reality", name: "Interaction In Virtual Reality" },
  ];
  const uniqueItems = (x, i, array) => array.indexOf(x) === i;
  const ITEM_CATEGORIES = ITEMS.map((prod) => prod.category).filter(
    uniqueItems
  );
  ITEM_CATEGORIES.push("all");
  ITEM_CATEGORIES.sort();
  return (
    <section className="herosection__projecthero">
      <div className="projecthero__container">
        <div className="projecthero__wrapper">
          <div className="projecthero__sectitlewrapper">
            <h1>
              <span className="globalshared__highlighter">projects</span>{" "}
              crafted by me{" "}
              <span role="img" aria-labelledby="projecthero__sectitlewrapper">
                &#129299;
              </span>
            </h1>
          </div>
          <Filtertable items={ITEMS} itemCategories={ITEM_CATEGORIES} />
        </div>
      </div>
    </section>
  );
}

export default ProjectHero;
