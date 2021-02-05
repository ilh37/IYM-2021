import React, { Component } from "react";
import NavBar from "../HomeComponents/NavBar/NavBar";
import PledgeTracker from "../HomeComponents/PledgeTracker/PledgeTracker";
import PageHeader from "../HomeComponents/Header";

import "../css/Styles.css";
import MapSection from "../HomeComponents/Map/MapBoxSection";
import HeringSocial from "../HomeComponents/Social/HeringSocial";
import Footer from "../HomeComponents/Footer";
import AthleteInfo from "../HomeComponents/AthleteInfo";

import { Parallax } from "react-parallax";
import background from "../images/background.png";

import hering from "../images/AtheletePages/hering.png";
import HeringBio from "../HomeComponents/Bio/HeringBio";

class Hering extends Component {
  render() {
    return (
      <Parallax bgImage={background} strength={1000} blur={3}>
        <NavBar />
        <PageHeader text="Jackie Hering" />
        <AthleteInfo name="Jackie Hering" img={hering} bio={HeringBio} />
        <MapSection />
        <PledgeTracker />
        <HeringSocial />
        <Footer />
      </Parallax>
    );
  }
}
export default Hering;
