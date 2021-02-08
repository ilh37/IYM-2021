import React, { Component } from "react";

import "../css/Styles.css";

class Header extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}

export default Header;
