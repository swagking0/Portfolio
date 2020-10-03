import React from "react";

import "../../styles/components/projecthero.css";

import Filtertable from "../Filtertable/Filtertable";

function ProjectHero() {
  const ITEMS = [
    {
      category: "artificial intelligence",
      name: "Relation Classification via Convolutional Deep Neural Networks",
      urlLink:
        "https://github.com/bsivanantham/Relation-Classification-via-Convolutional-Deep-Neural-Network.git",
    },
    {
      category: "artificial intelligence",
      name: "Using Spiking Neural Networks as a Sudoku Solver",
      urlLink: "https://www.overleaf.com/read/mjxmxfnzrxkg",
    },
    {
      category: "full stack development",
      name: "Gsheet Editor",
      urlLink: "https://github.com/swagking0/GsheetEditor.git",
    },
    {
      category: "full stack development",
      name: "Personal Portfolio Website",
      urlLink: "https://github.com/swagking0/Portfolio.git",
    },
    {
      category: "robotics",
      name:
        "Manipulation of Objects with Robotic Arms in Simulated Environments",
      urlLink:
        "https://docs.google.com/presentation/d/1DJOi8bxPy777jUk_-i1i4rU0JHQvDbzcluHmPH5OYOw/edit?usp=sharing",
    },
    {
      category: "robotics",
      name:
        "A User Study on Modelling Embodiment in Social Robotic Companions: Using Tamagotchi & NAO",
      urlLink:
        "http://www.ijitee.org/wp-content/uploads/papers/v9i4/D1393029420.pdf",
    },
    {
      category: "electronics",
      name:
        "Integration of a Microphone in the AMIRO Platform, Data Analysis and Utilization of This Information in Applications",
      urlLink: "https://www.overleaf.com/read/tfkmhfdpnpzt",
    },
    {
      category: "electronics",
      name: "Unmanned Bottle Sanitization Using Rectilinear Mechanism",
      urlLink:
        "http://www.ipindia.nic.in/writereaddata/Portal/IPOJournal/1_2642_1/Part-1.pdf",
    },
    {
      category: "virtual reality",
      name: "Interaction In Virtual Reality",
      urlLink: "https://www.overleaf.com/read/kscgmswyvvwj",
    },
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
