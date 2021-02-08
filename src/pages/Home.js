import React, { Component } from "react";
import "../css/Styles.css";

import NavBar from "../HomeComponents/NavBar/NavBar";
import PageHeader from "../HomeComponents/Header";
import LiveEvent from "../HomeComponents/LiveEvent";
import AthleteGallery from "../HomeComponents/Gallery/AthleteGallery";
import Partners from "../HomeComponents/Partner/Partners";
import Footer from "../HomeComponents/Footer";

import { Parallax } from "react-parallax";
import background from "../images/background.png";

class Home extends Component {
  render() {
    return (
      <Parallax bgImage={background} strength={1000} blur={3}>
        <NavBar />
        <PageHeader text="Welcome" />
        <LiveEvent />
        <AthleteGallery />
        <Partners />
        <Footer />
      </Parallax>
    );
  }
}

export default Home;
