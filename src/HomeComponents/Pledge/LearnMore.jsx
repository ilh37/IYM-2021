import React, { Component } from "react";

import "../../css/Styles.css";

import WHO from "../../images/Logos/who.png";
import CDC from "../../images/Logos/cdc.png";
import HM from "../../images/Logos/hm.png";

class LearnMore extends Component {
  render() {
    return (
      <div className="Learn-More">
        <div className="row">
          <div className="col-sm-4">
            <img className="Learn-More-Logo" src={WHO} alt="WHO" />
            <p className="Learn-More-Content">
              Learn more about&nbsp;
              <a
                href="https://www.who.int/news-room/campaigns/connecting-the-world-to-combat-coronavirus/healthyathome/healthyathome---physical-activity"
                target="_blank"
                rel="noopener noreferrer"
              >
                staying active and healthy at home
              </a>
              &nbsp;from the World Health Organization.
            </p>
          </div>
          <div className="col-sm-4">
            <img className="Learn-More-Logo" src={CDC} alt="CDC" />
            <p className="Learn-More-Content">
              Learn more about&nbsp;
              <a
                href="https://www.cdc.gov/physicalactivity/how-to-be-physically-active-while-social-distancing.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                how to be physically active while social distancing
              </a>
              &nbsp;from the Centers for Disease Control and Prevention.
            </p>
          </div>
          <div className="col-sm-4">
            <img className="Learn-More-Logo" src={HM} alt="HM" />
            <p className="Learn-More-Content">
              Learn&nbsp;
              <a
                href="https://centerhealthyminds.org/join-the-movement/10-well-being-tips-for-the-days-of-covid-19"
                target="_blank"
                rel="noopener noreferrer"
              >
                10 Well-Being Tips During the Days of COVID-19
              </a>
              &nbsp;from the Center for Healthy Minds.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default LearnMore;
