import React, { Component } from "react";

import "../../css/Styles.css";

import MapBox from "./MapBox";

class MapBoxSection extends Component {
  render() {
    return (
      <div className="Live-Event row">
        <div className="col Live-Event-Map-Box">
          <MapBox
            token={this.props.token}
            style={this.props.style}
            latitude={this.props.latitude}
            longitude={this.props.longitude}
            zoom={this.props.zoom}
          />
        </div>
      </div>
    );
  }
}

export default MapBoxSection;
