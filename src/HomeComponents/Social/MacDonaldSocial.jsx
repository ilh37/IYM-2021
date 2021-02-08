import React, { Component } from "react";
import "../../css/Styles.css";

class MacDonaldSocial extends Component {
  render() {
    return (
      <div className="row Social-Button-Box">
        <div className="col-sm-12">
          <h2 className="Social-Button-Header">
            Find James on these platforms
          </h2>
        </div>
        <div className="col-sm-12">
          <a
            class="fas fa-globe-europe Social-Button"
            href="https://www.projectkansas.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
          <a
            class="fab fa-twitter-square Social-Button"
            href="https://twitter.com/jammacdo"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
          <a
            className="fab fa-instagram-square Social-Button"
            href="https://www.instagram.com/jammacdo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
        </div>
      </div>
    );
  }
}

export default MacDonaldSocial;
