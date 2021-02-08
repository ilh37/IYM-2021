import React, { Component } from "react";
import "../../css/Styles.css";

class HaaseSocial extends Component {
  render() {
    return (
      <div className="row Social-Button-Box">
        <div className="col-sm-12">
          <h2 className="Social-Button-Header">Find Dave on these platforms</h2>
        </div>
        <div className="col-sm-12">
          <a
            class="fas fa-globe-americas Social-Button"
            href="https://www.davehaase.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
          <a
            class="fab fa-twitter-square Social-Button"
            href="https://twitter.com/davehaase"
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

export default HaaseSocial;
