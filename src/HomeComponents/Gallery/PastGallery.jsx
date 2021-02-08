import React, { Component } from "react";
import GalleryCard from "./GalleryCard";
import "../../css/Styles.css";

import haase from "../../images/athletes/haase.png";

class PastGallery extends Component {
  render() {
    return (
      <div className="Event-Gallery">
        <h2>Past Events</h2>
        <div className="row">
          <div className="col Event-Gallery-Card-Container">
            <GalleryCard
              name="Dave Haase"
              event="Race Across America"
              img={haase}
              link="http://raam.davehaase.com/"
            ></GalleryCard>
          </div>
        </div>
      </div>
    );
  }
}

export default PastGallery;
