import React, { Component } from "react";
import pledgeEg from "../../images/Logos/tweet.png";
import "../../css/Styles.css";
import PledgeSocial from "../Social/PledgeSocial";

class PledgeInfo extends Component {
  render() {
    return (
      <div className="Pledge-Info">
        <div className="Info">
          <h2 className="Info-Heading">Step 1</h2>
          <p className="Info-Content">
            Get Inspired by a favorite athlete, hit your social media.
          </p>
          <PledgeSocial />
        </div>
        <div className="Info">
          <h2 className="Info-Heading">Step 2</h2>
          <p className="Info-Content">
            Pledge an activity (walk, run, ride, meditate), your time and your
            task.
          </p>
          <img className="Info-Image" src={pledgeEg} alt="Example tweet" />
        </div>
        <div className="Info">
          <h2 className="Info-Heading">Step 3</h2>
          <p className="Info-Content">
            Pass it on by tagging three friends and get selected to
            scoreface-time with athletes.
          </p>
        </div>
      </div>
    );
  }
}

export default PledgeInfo;
