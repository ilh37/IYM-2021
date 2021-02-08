import React, { Component } from "react";

import "../../css/Styles.css";

class GalleryCard extends Component {
  render() {
    return (
      <div className="Event-Gallery-Card">
        <img
          className="Event-Gallery-Card-Image"
          src={this.props.img}
          alt={this.props.name}
        ></img>
        <div className="Event-Gallery-Card-Info">
          <span className="Event-Gallery-Card-Name">
            <a className="Event-Link" href={this.props.link}>
              {this.props.name}
            </a>
          </span>
          <span className="Event-Gallery-Card-Bio">{this.props.event}</span>
        </div>
      </div>
    );
  }
}

export default GalleryCard;
