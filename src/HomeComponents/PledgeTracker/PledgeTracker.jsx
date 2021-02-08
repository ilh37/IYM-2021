import React, { Component } from "react";
import PledgeTrackerBar from "./PledgeTrackerComponent";

import "../../css/Styles.css";

const pledges = 0;

class PledgeTracker extends Component {
  render() {
    return (
      <div className="Pledge-Tracker">
        <h2>Pledges</h2>
        <PledgeTrackerBar pledges={pledges} />
        <span className="Pledge-Tracker-Description">
          {pledges} people have made the PLEDGE. Now it's your turn!
        </span>
      </div>
    );
  }
}

export default PledgeTracker;
