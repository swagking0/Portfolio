import React, { Component } from "react";
import "../../styles/pages/contact.css";

import emailjs from "emailjs-com";

import { MdMyLocation, MdContactMail, MdCall } from "react-icons/md";

class Contact extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    sentMessage: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, message } = this.state;
    const templateParams = {
      from_firstName: firstName,
      from_lastName: lastName,
      from_email: email,
      from_message: message,
    };
    emailjs
      .send(
        "PortfolioMailService_23",
        "template_zbbi7bk",
        templateParams,
        "user_zwVlzJ4b22LJ3vW5saeuF"
      )
      .then((result) => {
        console.log(result.text);
        this.resetForm();
      })
      .catch((err) => {
        console.log(err.text);
      });
  };

  resetForm = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      sentMessage: true,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { firstName, lastName, email, message, sentMessage } = this.state;
    return (
      <div className="contact__container">
        <div className="contact__wrapper">
          <div className="contact__infocontainer">
            <h2>
              Contact Info{" "}
              <span role="img" aria-labelledby="contact__infocontainer">
                &#127759;
              </span>
            </h2>
            <div className="contact__contactinfo">
              <div className="contact__contactinfoboxwrapper">
                <div className="contact__contactinfoicon">
                  <MdMyLocation />
                </div>
                <div className="contact__contactinfotextbox">
                  <h3>Address</h3>
                  <p>
                    Roggenkamp 22, <br />
                    Bielefeld 33605,
                    <br /> Germany
                  </p>
                </div>
              </div>
              <div className="contact__contactinfoboxwrapper">
                <div className="contact__contactinfoicon">
                  <MdContactMail />
                </div>
                <div className="contact__contactinfotextbox">
                  <h3>Email</h3>
                  <p>bhargav.mohith101@gmail.com</p>
                </div>
              </div>
              <div className="contact__contactinfoboxwrapper">
                <div className="contact__contactinfoicon">
                  <MdCall />
                </div>
                <div className="contact__contactinfotextbox">
                  <h3>Phone</h3>
                  <p>+49-178-2127227</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact__formcontainer">
            <form onSubmit={this.handleSubmit}>
              {sentMessage ? (
                <h2>
                  message sent{" "}
                  <span role="img" aria-labelledby="contact__formcontainer">
                    &#128238;
                  </span>
                </h2>
              ) : (
                <h2>
                  send me your message{" "}
                  <span role="img" aria-labelledby="contact__formcontainer">
                    &#128232;
                  </span>
                </h2>
              )}
              {sentMessage ? (
                <div className="contact__formresponsemessage">
                  <p>
                    Thank you for your valuable message{" "}
                    <span
                      role="img"
                      aria-labelledby="contact__formresponsemessage"
                    >
                      &#128578;
                    </span>
                    ! <br />I appreciate that you've taken the time to write to
                    me. I will get back to you very soon.
                  </p>
                </div>
              ) : (
                <div>
                  <div className="forminputbox">
                    <input
                      type="text"
                      name="firstName"
                      required="required"
                      value={firstName}
                      onChange={this.handleChange}
                    />
                    <span>first name</span>
                  </div>
                  <div className="forminputbox">
                    <input
                      type="text"
                      name="lastName"
                      required="required"
                      value={lastName}
                      onChange={this.handleChange}
                    />
                    <span>last name</span>
                  </div>
                  <div className="forminputbox">
                    <input
                      type="text"
                      name="email"
                      required="required"
                      value={email}
                      onChange={this.handleChange}
                    />
                    <span>email</span>
                  </div>
                  <div className="forminputbox">
                    <textarea
                      required="required"
                      name="message"
                      value={message}
                      onChange={this.handleChange}
                    ></textarea>
                    <span>Write your message here</span>
                  </div>
                  <div className="forminputbox">
                    <input type="submit" value="Send"></input>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
