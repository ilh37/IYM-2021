import React, { Component } from "react";

import "../../css/Styles.css";

class ChallengeMapSection extends Component {
  render() {
    return (
      <div className="Live-Event row">
        <div className="col Live-Event-Map-Box">
          <div className="Garmin-Map">
            <iframe
              src="https://www.followmychallenge.com/live/rar21/#"
              frameborder="0"
              marginwidth="0"
              marginheight="0"
              width="100%"
              height="760"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default ChallengeMapSection;