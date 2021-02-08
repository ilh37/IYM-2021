import React, { Component } from "react";
import NavBar from "../HomeComponents/NavBar/NavBar";
import PledgeTracker from "../HomeComponents/PledgeTracker/PledgeTracker";
import PageHeader from "../HomeComponents/Header";

import "../css/Styles.css";
import MapSection from "../HomeComponents/Map/MapBoxSection";
import SamarthSocial from "../HomeComponents/Social/SamarthSocial";
import Footer from "../HomeComponents/Footer";
import AthleteInfo from "../HomeComponents/AthleteInfo";

import { Parallax } from "react-parallax";
import background from "../images/background.png";

import samarth from "../images/AtheletePages/samarth.png";
import SamarthBio from "../HomeComponents/Bio/SamarthBio";
import AthleteLiveData from "../HomeComponents/AthleteLiveData";

class Samarth extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     error: null,
  //     isLoaded: false,
  //     items: [],
  //   };
  // }

  // componentDidMount() {
  //   fetch("https://c0hjtg8xa3.execute-api.us-west-2.amazonaws.com/dev/")
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         console.log(result);
  //         this.setState({
  //           isLoaded: true,
  //           items: result.features,
  //         });
  //       },
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error,
  //         });
  //       }
  //     );
  // }

  render() {
    // const { error, isLoaded, items } = this.state;
    // console.log(items);
    // if (error) {
    //   return <div className="errorMsg">ERROR</div>;
    // } else if (!isLoaded) {
    //   return <div className="loadingMsg">Loading...</div>;
    // } else {
    return (
      <Parallax bgImage={background} strength={1000} blur={3}>
        <NavBar />
        <PageHeader text="Dr. Amit Samarth" />
        <AthleteInfo name="Dr. Amit Samarth" img={samarth} bio={SamarthBio} />
        <MapSection
          token="pk.eyJ1IjoiaXRzeW91cm1vdmUiLCJhIjoiY2tqeGJqbzg5MDF3eDJ3bzh1MTk2bWhqYSJ9.w4UUfWxmTk630JJ0CgtfnA"
          style="mapbox://styles/itsyourmove/ckjxu50uf218917pc610sqa3n"
          latitude={21}
          longitude={79}
          zoom={4.2}
        />
        <AthleteLiveData />
        {/* <h2>Live Data</h2>
          <div className="liveData">
            {items.map((feature) => (
              <table
                align="center"
                className="liveDataTable"
                style={{ marginBottom: 25 }}
              >
                <tr>
                  <td className="liveDataCell">Heart rate:</td>
                  <td className="liveDataCell" key={feature.properties.hr}>
                    {feature.properties.hr} bpm
                  </td>
                </tr>
                <tr>
                  <td className="liveDataCell">Speed:</td>
                  <td className="liveDataCell" key={feature.properties.speed}>
                    {feature.properties.speed * 3.6} km/hr
                  </td>
                </tr>
                <tr>
                  <td className="liveDataCell">Cadence:</td>
                  <td className="liveDataCell" key={feature.properties.cadence}>
                    {feature.properties.cadence} rpm
                  </td>
                </tr>
                <tr>
                  <td className="liveDataCell">Power:</td>
                  <td className="liveDataCell" key={feature.properties.power}>
                    {feature.properties.power} watts
                  </td>
                </tr>
                <tr>
                  <td className="liveDataCell">Altitude:</td>
                  <td
                    className="liveDataCell"
                    key={feature.properties.altitude}
                  >
                    {feature.properties.altitude} meters
                  </td>
                </tr>
                <tr>
                  <td className="liveDataCell">Temperature:</td>
                  <td className="liveDataCell" key={feature.properties.temp}>
                    {feature.properties.temp}&#186;C
                  </td>
                </tr>
                <tr>
                  <td className="liveDataCell">
                    MO<sub>2</sub>:
                  </td>
                  <td className="liveDataCell" key={feature.properties.o2sat}>
                    {feature.properties.o2sat}%
                  </td>
                </tr>
              </table>
            ))}
          </div> */}
        <PledgeTracker />
        <SamarthSocial />
        <Footer />
      </Parallax>
    );
  }
}
//}
export default Samarth;
