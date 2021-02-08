import React, { Component } from "react";

import "../../css/Styles.css";

import amitVid from "../../videos/vid1.mp4";

class PledgeVideo extends Component {
  render() {
    return (
      <div className="Video-Header">
        <video
          src={amitVid}
          autoplay="autoPlay"
          loop="loop"
          playsinline="playsinLine"
          muted="muted"
        ></video>
        <div className="row Video-Header-Content">
          <h2 className="col-sm-12 Video-Header-Content-Text">
            The best moment to do something for your well-being is always right
            now. Pledge some activity to keep yourself safe and healthy.
          </h2>

          <div className="col-sm-12">
            <a
              class="fab fa-twitter-square Pledge-Button"
              href="https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Flocalhost%3A3000%2FPledge&ref_src=twsrc%5Etfw&text=Help%20us%20to%20a%20million%20minutes%20of%20exercise%20or%20mindfulness!%20I%E2%80%99m%20doing%2020%20minutes.%20%23itsyourmove2021%20(%40%20three%20friends).%20Learn%20more%20at%20www.itsyourmove2021.org&tw_p=tweetbutton&via=itsyourmove2021"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
            </a>
            <a
              className="fab fa-facebook-square Pledge-Button"
              href="https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&u=http%3A%2F%2Fwww.itsyourmove2021.org%2F&display=popup&ref=plugin&src=share_button"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
            </a>
            <a
              className="fab fa-instagram-square Pledge-Button"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default PledgeVideo;
