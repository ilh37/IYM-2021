import React from "react";

const PledgeTrackerBar = (props) => {
  const { pledges } = props;

  const containerStyles = {
    height: 30,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    marginBottom: 15,
    boxShadow: "0px 4px 10px #00000026, 0px 4px 4px rgba(0, 0, 0, 0.05)",
  };

  const fillerStyles = {
    height: "100%",
    width: `${pledges}%`,
    background: "linear-gradient(135deg, #da0001, 50%, #f17e7e)",
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "semibold",
    letterSpacing: 2,
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${pledges}%`}</span>
      </div>
    </div>
  );
};

export default PledgeTrackerBar;
