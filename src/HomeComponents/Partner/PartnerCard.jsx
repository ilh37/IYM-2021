import React, { Component } from "react";
import "../../css/Styles.css";

class PartnerCard extends Component {
  render() {
    return (
      <div className="Partners-Box">
        <img
          className="Partners-Logo"
          src={this.props.img}
          alt={this.props.name}
        ></img>
        <div className="Partners-Text">{this.props.text}</div>
      </div>
    );
  }
}

export default PartnerCard;
