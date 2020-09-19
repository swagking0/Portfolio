import React, { Component } from "react";
import "../../styles/components/typer.css";

class Typer extends Component {
  state = {
    text: "",
    isDeleting: false,
    loopNum: 0,
    typingSpeed: 150,
  };

  componentDidMount() {
    this.handleType();
  }

  handleType = () => {
    const { dataText } = this.props;
    const { isDeleting, loopNum, text, typingSpeed } = this.state;
    const i = loopNum % dataText.length;
    const fullText = dataText[i];

    this.setState({
      text: isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? 30 : 150,
    });

    if (!isDeleting && text === fullText) {
      setTimeout(() => this.setState({ isDeleting: true }), 500);
    } else if (isDeleting && text === "") {
      this.setState({
        isDeleting: false,
        loopNum: loopNum + 1,
      });
    }

    setTimeout(this.handleType, typingSpeed);
  };
  render() {
    return (
      <h1 className="typer__typetext">
        <span>{this.state.text}</span>
        <span className="typer__cursor"></span>
      </h1>
    );
  }
}

export default Typer;
