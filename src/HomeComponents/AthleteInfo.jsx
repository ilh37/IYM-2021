import React, { Component } from "react";

import "../css/Styles.css";

class AthleteInfo extends Component {
  render() {
    return (
      <div className="Athlete-Info row">
        <div className="col">
          <img
            className="Athlete-Info-Photo"
            src={this.props.img}
            alt={this.props.name}
          ></img>
        </div>
        <div className="col Athlete-Info-Bio-Box">
          <this.props.bio />
        </div>
      </div>
    );
  }
}

export default AthleteInfo;
