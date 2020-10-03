import React, { Component } from "react";

import Routes from "./Routes";

import Loader from "./resources/base/components/Loader/Loader";
import NavBar from "./resources/base/components/NavBar/NavBar";
import SocialHeroBanner from "./resources/base/components/SocialHeroBanner/SocialHeroBanner";
import Footer from "./resources/base/components/Footer/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      myData: null,
      isStickynavbar: "navbar__container",
    };
  }

  componentDidMount() {
    this.getmyData().then(() => this.setState({ isLoading: false }));
    document.addEventListener("scroll", (e) => {
      this.togglestickynavbar();
    });
  }

  togglestickynavbar() {
    if (window.scrollY > 0) {
      this.setState({
        isStickynavbar: "navbar__container navbar__container--sticky",
      });
    } else {
      this.setState({
        isStickynavbar: "navbar__container",
      });
    }
  }

  getmyData() {
    return fetch("https://gitconnected.com/v1/portfolio/swagking0", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((myData) => {
        this.setState({
          myData: myData,
        });
      });
  }

  render() {
    const { isLoading, isStickynavbar } = this.state;
    if (isLoading) {
      return <Loader />;
    }
    return (
      <React.Fragment>
        <NavBar isSticky={isStickynavbar} />
        <Routes />
        <SocialHeroBanner />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
