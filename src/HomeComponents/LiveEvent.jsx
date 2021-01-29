import React, { Component } from "react";

import "../css/Styles.css";

import MapBoxmain from "../HomeComponents/Mapboxmain";

class LiveEvent extends Component {
  render() {
    return (
      <div className="row Live-Event">
        <div className="col Live-Event-Map-Box">
          {/* COMMENT OUT FOR SANDRINE, USE GARMIN MAP */}
          <MapBoxmain />

          {/* USE FOR SANDRINE'S DURATION */}
          {/* <div className="Garmin-Map">
            <iframe
              src="https://share.garmin.com/share/lespoulettesfrites"
              frameborder="0"
              marginwidth="0"
              marginheight="0"
              width="100%"
              height="760"
            ></iframe>
          </div> */}
        </div>
        <div className="col Live-Event-Feed-Box">Live Feed</div>
      </div>
    );
  }
}

export default LiveEvent;
