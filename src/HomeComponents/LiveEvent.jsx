import React, { Component } from "react";

import "../css/Styles.css";
import "../css/Feed.css";

import MapBox from "../HomeComponents/Map/MapBox";
import CuratorFeed from "../Components/SocialComponents/CuratorFeed";

const FEED = "https://cdn.curator.io/published/9f9e3fe1-73a0-40c2-a822-81500b89790d.js";

class LiveEvent extends Component {
  render() {
    return (
      <div className="Live-Event row">
        <div className="col Live-Event-Map-Box">
          {/* USE MAPBOX FOR ALL EVENTS AFTER RWANDA */}
          <MapBox
            token="pk.eyJ1IjoiaXRzeW91cm1vdmUiLCJhIjoiY2tqeGJqbzg5MDF3eDJ3bzh1MTk2bWhqYSJ9.w4UUfWxmTk630JJ0CgtfnA"
            style="mapbox://styles/itsyourmove/ckjxu50uf218917pc610sqa3n"
            latitude={21}
            longitude={79}
            zoom={4.2}
          />

          {/* V REMOVE GARMIN MAP WHEN RWANDA IS FINISHED V */}
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
          {/* ^ REMOVE GARMIN MAP WHEN RWANDA IS FINISHED ^ */}
        </div>
        <div className="col Live-Event-Feed-Box">
          <CuratorFeed feedID={FEED} />
        </div>
      </div>
    );
  }
}

export default LiveEvent;
