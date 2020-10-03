import React, { Component } from "react";
import "../../styles/pages/home.css";

import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

import LandingHero from "../../components/LandingHero/LandingHero";
import AboutHero from "../../components/AboutHero/AboutHero";
import WorkHero from "../../components/WorkHero/WorkHero";
import SchoolHero from "../../components/SchoolHero/SchoolHero";
import ProjectHero from "../../components/ProjectHero/ProjectHero";

class Home extends Component {
  state = {
    isscrolltotop_visible: false,
  };

  componentDidMount() {
    let scrolltoTopComponent = this;
    document.addEventListener("scroll", (e) => {
      scrolltoTopComponent.togglescrolltoTopVisibility();
    });
  }

  togglescrolltoTopVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        isscrolltotop_visible: true,
      });
    } else {
      this.setState({
        isscrolltotop_visible: false,
      });
    }
  }

  scrolltoTop_fnc = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  render() {
    const ITEMS = [
      { category: "entertainment", name: "Football" },
      { category: "entertainment", name: "Baseball" },
      { category: "entertainment", name: "Basketball" },
      { category: "fashion", name: "iPod Touch" },
      { category: "design", name: "iPhone 5" },
      { category: "design", name: "Nexus 7" },
      { category: "leisure", name: "Holiday" },
    ];

    // get unique categories
    const ITEM_CATEGORIES = ITEMS.map((item) => item.category)
      .sort()
      .filter((item, i, arr) => arr[i] !== arr[i - 1]);
    //unique = a.filter((x, i, a) => a.indexOf(x) == i)
    ITEM_CATEGORIES.push("all");
    return (
      <div className="home__container">
        <LandingHero />
        <AboutHero />
        <WorkHero />
        <SchoolHero />
        <ProjectHero items={ITEMS} />
        <ScrollToTop
          isVisible={this.state.isscrolltotop_visible}
          movetoTop={this.scrolltoTop_fnc}
        />
      </div>
    );
  }
}

export default Home;
