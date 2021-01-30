import React, { Component } from "react";

import "../css/Styles.css";

import MapBoxmain from "../HomeComponents/Mapboxmain";
import CuratorFeed from "../Components/SocialComponents/CuratorFeed";

const FEED = "https://cdn.curator.io/published/9f9e3fe1-73a0-40c2-a822-81500b89790d.js";

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
          <CuratorFeed feedID={FEED} />
        </div>
      </div>
    );
  }
}

export default LiveEvent;
