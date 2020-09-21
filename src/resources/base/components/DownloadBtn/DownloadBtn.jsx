import React, { Component } from "react";
import { HiDocumentDownload } from "react-icons/hi";
import "../../styles/components/downloadbtn.css";

class DownloadBtn extends Component {
  render() {
    const { documentlink, documentname } = this.props;

    return (
      <div className="downloadbtn__container">
        <div className="downloadbtn__wrapper">
          <a href={documentlink} download={documentname}>
            <div className="downloadbtn__frontfacewrapper">
              <h1 className="downloadbtn__fronttitle">download my cv</h1>
              <i className="downloadbtn__fronticon">
                <HiDocumentDownload />
              </i>
            </div>
            <div className="downloadbtn__backfacewrapper">
              <h1 className="downloadbtn__backtitle">
                <span className="downloadbtn__highlighter">file size:</span> 106
                KB
              </h1>
              <h1 className="downloadbtn__backtitle">
                <span className="downloadbtn__highlighter">
                  file extension:
                </span>{" "}
                pdf
              </h1>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default DownloadBtn;
