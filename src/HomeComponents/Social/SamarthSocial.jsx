import React, { Component } from "react";
import "../../css/Styles.css";

class SamarthSocial extends Component {
  render() {
    return (
      <div className="row Social-Button-Box">
        <div className="col-sm-12">
          <h2 className="Social-Button-Header">
            Find Dr. Amit on these platforms
          </h2>
        </div>
        <div className="col-sm-12">
          <a
            class="fas fa-globe-asia Social-Button"
            href="https://rideacrossindia.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
          <a
            className="fab fa-instagram-square Social-Button"
            href="https://www.instagram.com/teamamitsamarth/"
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

export default SamarthSocial;
