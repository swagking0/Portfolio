import React, { Component } from "react";
import "../../styles/components/landinghero.css";
import RoboticsImg from "../../asserts/images/hero-images/resource-heroimg1.jpg";
import ElectronicsImg from "../../asserts/images/hero-images/resource-heroimg2.jpg";
import FullStackImg from "../../asserts/images/hero-images/resource-heroimg3.jpg";
import AIImg from "../../asserts/images/hero-images/resource-heroimg4.jpg";

import ScrollDown from "../ScrollDown/ScrollDown";

class LandingHero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      herointerest: ["AI", "Full Stack", "Robotics", "Electronics"],
      herointerestbackground: [
        AIImg,
        FullStackImg,
        RoboticsImg,
        ElectronicsImg,
      ],
      herointerestValue: "",
      herointerestbackgroundValue: "",
    };
  }
  componentDidMount() {
    var index = 0;
    this.updateherointerestValue = setInterval(() => {
      this.setState({ herointerestValue: this.state.herointerest[index] });
      this.setState({
        herointerestbackgroundValue: this.state.herointerestbackground[index],
      });
      index = (index + 1) % this.state.herointerest.length;
    }, 1500);
  }
  componentWillUnmount() {
    clearInterval(this.updateherointerestValue);
  }
  render() {
    return (
      <div
        className="landinghero__container"
        style={{
          "--backgroundinterestImage": `url(${this.state.herointerestbackgroundValue})`,
        }}
      >
        <div className="landinghero__wrapper">
          <h1 className="landinghero__primarytitle">Hello</h1>
          <h2 className="landinghero__subtitle">I'm Sunkara. Mohith Bhargav</h2>
          <h1 className="landinghero__primarytitle-0">A Developer in</h1>
          <span className="landinghero__interest">
            {this.state.herointerestValue}
          </span>
          <ScrollDown />
        </div>
      </div>
    );
  }
}

export default LandingHero;
