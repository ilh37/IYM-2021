import React, { Component } from "react";

import "../css/Styles.css";

import Mapboxmain from "../HomeComponents/Map/Mapboxmain";

class LiveEvent extends Component {
  render() {
    return (
      <div className="Live-Event row">
        <div className="col Live-Event-Map-Box">
          <Mapboxmain />
        </div>
        <div className="col Live-Event-Feed-Box">Live Feed</div>
      </div>
    );
  }
}

export default LiveEvent;
