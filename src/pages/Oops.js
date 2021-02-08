import React, { Component } from "react";
import NavBar from "../HomeComponents/NavBar/NavBar";
import PageHeader from "../HomeComponents/Header";

import { Parallax } from "react-parallax";
import background from "../images/background.png";

import "../css/Styles.css";
import Footer from "../HomeComponents/Footer";

class Rwanda extends Component {
  render() {
    return (
      <Parallax bgImage={background} strength={1000} blur={3}>
        <NavBar />
        <PageHeader text="OOPS" />
        <div
          style={{
            textAlign: "center",
            height: "80vh",
          }}
        >
          <h3>
            <br />
            Looks like this athlete's page isn't ready yet.
            <br />
            <br />
            :(
            <br />
            <br />
            Come Back Soon!
          </h3>
        </div>

        <Footer />
      </Parallax>
    );
  }
}
export default Rwanda;
