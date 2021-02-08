import React, { Component } from "react";
import "../../css/Styles.css";
import PartnerCard from "./PartnerCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import garmin from "../../images/partners/garmin.png";
import corelogo from "../../images/partners/core.png";
import healthio from "../../images/partners/healthio.jpeg";
import mapbox from "../../images/partners/mapbox.png";
import attitude from "../../images/partners/attitudesports.jpg";
import moxy from "../../images/partners/moxy.png";
import narrativescience from "../../images/partners/narrativescience.jpg";
import theweathercompany from "../../images/partners/theweathercompany.jpg";

class Partners extends Component {
  render() {
    return (
      <div className="Content-Section">
        <div className="Partners">
          <h2>Partners</h2>
          <Slider
            autoplay={true}
            autoplaySpeed={5000}
            dots={true}
            arrows={false}
            infinite={true}
            speed={1000}
            slidesToShow={1}
            slidesToScroll={1}
            useTransform={true}
            cssEase={"cubic-bezier(0.83, 0, 0.17, 1)"}
            centerMode={true}
          >
            <PartnerCard
              name="Garmin"
              img={garmin}
              text="For decades, Garmin has pioneered new GPS navigation and wireless devices and applications that are designed for people who live an active lifestyle."
            />
            <PartnerCard
              name="HealthIO"
              img={healthio}
              text="HealthIO leverages user generated health data to create personalized and actionable insights and enables members the opportunity for early intervention."
            />
            <PartnerCard
              name="CORE"
              img={corelogo}
              text="CORE is the first non-invasive device that continuously and accurately measures Core Body Temperature under real-life conditions. For athletes who are serious about their performance."
            />
            <PartnerCard
              name="Moxy"
              img={moxy}
              text="Moxy is a small, wearable sensor that utilizes infrared light to continuously monitor oxygen saturation (SmO₂) levels in the muscles of athletes while they exercise."
            />
            <PartnerCard
              name="Attitude Sports"
              img={attitude}
              text="The official outfitter of It's Your Move. From professional bike repair and fitting services to top cycling products at exceptional prices, Attitude Sports has you covered."
            />
            <PartnerCard
              name="The Weather Company"
              img={theweathercompany}
              text="To ensure optimization, athletes need more than weather data. Advanced analytics better predict how weather events will impact their journey."
            />
            <PartnerCard
              name="Mapbox"
              img={mapbox}
              text="Mapbox tools let developers build a new world powered by location data. Real-time updates. Total customization. Developers first."
            />
            <PartnerCard
              name="Narrative Science"
              img={narrativescience}
              text="Data should be understandable for everyone. Start data storytelling."
            />
          </Slider>
        </div>
      </div>
    );
  }
}

export default Partners;
