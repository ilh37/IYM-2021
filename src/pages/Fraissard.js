import React, { Component } from "react";
import NavBar from "../HomeComponents/NavBar/NavBar";
import PledgeTracker from "../HomeComponents/PledgeTracker/PledgeTracker";
import PageHeader from "../HomeComponents/Header";

import "../css/Styles.css";
import MapSection from "../HomeComponents/Map/MapBoxSection";
import FraissardSocial from "../HomeComponents/Social/FraissardSocial";
import Footer from "../HomeComponents/Footer";
import AthleteInfo from "../HomeComponents/AthleteInfo";

import { Parallax } from "react-parallax";
import background from "../images/background.png";

import fraissard from "../images/AtheletePages/fraissard.png";
import FraissardBio from "../HomeComponents/Bio/FraissardBio";

class Fraissard extends Component {
  render() {
    return (
      <Parallax bgImage={background} strength={1000} blur={3}>
        <NavBar />
        <PageHeader text="Sandrine Fraissard" />
        <AthleteInfo
          name="Sandrine Fraissard"
          img={fraissard}
          bio={FraissardBio}
        />
        <MapSection />
        <PledgeTracker />
        <FraissardSocial />
        <Footer />
      </Parallax>
    );
  }
}
export default Fraissard;
