import React, { Component } from "react";
import "../../css/Styles.css";

class HeringSocial extends Component {
  render() {
    return (
      <div className="row Social-Button-Box">
        <div className="col-sm-12">
          <h2 className="Social-Button-Header">
            Find Jackie on these platforms
          </h2>
        </div>
        <div className="col-sm-12">
          <a
            class="fas fa-globe-americas Social-Button"
            href="https://www.jackiehering.com/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
          <a
            className="fab fa-instagram-square Social-Button"
            href="https://www.instagram.com/jackiemhering/"
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

export default HeringSocial;
