import React, { Component } from "react";

import "../css/Styles.css";

import NavBar from "../HomeComponents/NavBar/NavBar";
import PledgeVideo from "../HomeComponents/Pledge/PledgeVideo";
import PledgeInfo from "../HomeComponents/Pledge/PledgeInfo";
import LearnMore from "../HomeComponents/Pledge/LearnMore";
import Footer from "../HomeComponents/Footer";

import background from "../images/background.png";
import { Parallax } from "react-parallax";

class Pledge extends Component {
  render() {
    return (
      <Parallax bgImage={background} strength={1000} blur={3}>
        <NavBar />
        <PledgeVideo />
        <PledgeInfo />
        <LearnMore />
        <Footer />
      </Parallax>
    );
  }
}

export default Pledge;
