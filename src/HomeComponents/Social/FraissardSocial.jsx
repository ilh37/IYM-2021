import React, { Component } from "react";
import "../../css/Styles.css";

class FraissardSocial extends Component {
  render() {
    return (
      <div className="row Social-Button-Box">
        <div className="col-sm-12">
          <h2 className="Social-Button-Header">
            Find Sandrine on these platforms
          </h2>
        </div>
        <div className="col-sm-12">
          <a
            class="fas fa-globe-europe Social-Button"
            href="https://racearoundrwanda.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
          <a
            className="fab fa-instagram-square Social-Button"
            href="https://www.instagram.com/100drine_38/"
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

export default FraissardSocial;
