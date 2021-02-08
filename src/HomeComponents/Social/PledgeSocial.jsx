import React, { Component } from "react";
import "../../css/Styles.css";

class PledgeSocial extends Component {
  render() {
    return (
      <div className="row Social-Button-Box">
        <div className="col-sm-12">
          <a
            class="fab fa-twitter-square Social-Button"
            href="https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Flocalhost%3A3000%2FPledge&ref_src=twsrc%5Etfw&text=Help%20us%20to%20a%20million%20minutes%20of%20exercise%20or%20mindfulness!%20I%E2%80%99m%20doing%2020%20minutes.%20%23itsyourmove2021%20(%40%20three%20friends).%20Learn%20more%20at%20www.itsyourmove2021.org&tw_p=tweetbutton&via=itsyourmove2021"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
          <a
            className="fab fa-facebook-square Social-Button"
            href="https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&u=http%3A%2F%2Fwww.itsyourmove2021.org%2F&display=popup&ref=plugin&src=share_button"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
          <a
            className="fab fa-instagram-square Social-Button"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
        </div>
      </div>
    );
  }
}

export default PledgeSocial;
