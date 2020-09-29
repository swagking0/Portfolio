import React, { Component } from "react";

import "../../styles/components/filtertable.css";
import FiltertableUI from "./SubComponents/FiltertableUI";

class Filtertable extends Component {
  state = {
    displayCategory: "all",
    items: this.props.items,
    itemCategories: this.props.itemCategories,
  };

  setCategory_fnc = (category) => {
    this.setState({
      displayCategory: category,
    });
  };
  render() {
    return (
      <div className="filtertable__container">
        <FiltertableUI setCategory={this.setCategory_fnc} state={this.state} />
      </div>
    );
  }
}

export default Filtertable;
