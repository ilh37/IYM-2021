import React, { Component } from "react";
import NavBar from "../HomeComponents/NavBar/NavBar";
import PledgeTracker from "../HomeComponents/PledgeTracker/PledgeTracker";
import PageHeader from "../HomeComponents/Header";

import "../css/Styles.css";
import MapSection from "../HomeComponents/Map/MapBoxSection";
import MacDonaldSocial from "../HomeComponents/Social/MacDonaldSocial";
import Footer from "../HomeComponents/Footer";
import AthleteInfo from "../HomeComponents/AthleteInfo";

import { Parallax } from "react-parallax";
import background from "../images/background.png";

import macdonald from "../images/AtheletePages/macdonald.png";
import MacDonaldBio from "../HomeComponents/Bio/MacDonaldBio";

class MacDonald extends Component {
  render() {
    return (
      <Parallax bgImage={background} strength={1000} blur={3}>
        <NavBar />
        <PageHeader text="James MacDonald" />
        <AthleteInfo
          name="James MacDonald"
          img={macdonald}
          bio={MacDonaldBio}
        />
        <MapSection
          token="pk.eyJ1IjoiaXRzeW91cm1vdmUiLCJhIjoiY2tqeGJqbzg5MDF3eDJ3bzh1MTk2bWhqYSJ9.w4UUfWxmTk630JJ0CgtfnA"
          style="mapbox://styles/itsyourmove/ckjxu50uf218917pc610sqa3n"
          latitude={21}
          longitude={79}
          zoom={4.2}
        />
        <PledgeTracker />
        <MacDonaldSocial />
        <Footer />
      </Parallax>
    );
  }
}
export default MacDonald;
