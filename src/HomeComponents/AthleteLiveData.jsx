import React, { Component } from "react";
import "../css/Styles.css";

class AthleteLiveData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://c0hjtg8xa3.execute-api.us-west-2.amazonaws.com/dev/")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result.features,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    console.log(items);
    if (error) {
      return <div className="errorMsg">ERROR</div>;
    } else if (!isLoaded) {
      return <div className="loadingMsg">Loading...</div>;
    } else {
      return (
        <div className="">
          <h2>Live Data</h2>
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
          </div>
        </div>
      );
    }
  }
}

export default AthleteLiveData;
