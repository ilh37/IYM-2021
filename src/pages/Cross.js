import React, { Component } from "react";
import NavBar from "../HomeComponents/NavBar/NavBar";
import PledgeTracker from "../HomeComponents/PledgeTracker/PledgeTracker";
import PageHeader from "../HomeComponents/Header";

import "../css/Styles.css";
import MapSection from "../HomeComponents/Map/MapBoxSection";
import CrossSocial from "../HomeComponents/Social/CrossSocial";
import Footer from "../HomeComponents/Footer";
import AthleteInfo from "../HomeComponents/AthleteInfo";

import { Parallax } from "react-parallax";
import background from "../images/background.png";

import cross from "../images/AtheletePages/cross.png";
import CrossBio from "../HomeComponents/Bio/CrossBio";

class Cross extends Component {
  render() {
    return (
      <Parallax bgImage={background} strength={1000} blur={3}>
        <NavBar />
        <PageHeader text="Julia Cross" />
        <AthleteInfo name="Julia Cross" img={cross} bio={CrossBio} />
        <MapSection
          token="pk.eyJ1IjoiaXRzeW91cm1vdmUiLCJhIjoiY2tqeGJqbzg5MDF3eDJ3bzh1MTk2bWhqYSJ9.w4UUfWxmTk630JJ0CgtfnA"
          style="mapbox://styles/itsyourmove/ckjxu50uf218917pc610sqa3n"
          latitude={21}
          longitude={79}
          zoom={4.2}
        />
        <PledgeTracker />
        <CrossSocial />
        <Footer />
      </Parallax>
    );
  }
}
export default Cross;
