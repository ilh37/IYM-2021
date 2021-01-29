import React, { Component } from "react";

import "../css/Styles.css";

import MapBoxmain from "../HomeComponents/Mapboxmain";
import CuratorFeed from "../Components/SocialComponents/CuratorFeed";

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
        <div className="col Live-Event-Feed-Box">
          <CuratorFeed feedID="https://cdn.curator.io/published/d730b9b0-d3dd-4b32-a7f1-454eea2c4799.js" />
        </div>
      </div>
    );
  }
}

export default LiveEvent;
