import React, { Component } from "react";
import "../../styles/pages/home.css";

/*import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";*/

import LandingHero from "../../components/LandingHero/LandingHero";
/*import AboutHero from "../../components/AboutHero/AboutHero";*/

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isscrolltotop_visible: false,
    };
  }

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
    const { isscrolltotop_visible } = this.state;
    return (
      <div className="home__container">
        <LandingHero />
        {/*<AboutHero />
        <ScrollToTop
          isVisible={isscrolltotop_visible}
          movetoTop={this.scrolltoTop_fnc}
        />*/}
      </div>
    );
  }
}

export default Home;
