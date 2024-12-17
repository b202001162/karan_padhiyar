import React from "react";
import PropTypes from "prop-types";

const Switch = ({ isOn, handleToggle, onColor, offColor, onText, offText }) => {
  return (
    <div
      className="switch-container"
      onClick={handleToggle}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "default",
        width: "60px",
        height: "30px",
        borderRadius: "50px",
        border: "2px solid #2D4F75",
        backgroundColor: isOn ? onColor : offColor,
        position: "relative",
        transition: "background-color 0.3s",
      }}
    >
      <div
        className="switch-inside-text"
        style={{
          color: isOn ? "#2D4F75" : "#2D4F75",
          position: "absolute",
          top: "50%",
          left: isOn ? "18px" : "42px",
          fontSize: "12px",
          fontWeight: "bold",
          transition: "all 0.3s",
          textAlign: "center",
          transform: "translate(-50%, -50%)",
        }}
      >
        {isOn ? onText : offText}
      </div>
      <div
        className="switch-handle"
        style={{
          width: "26px",
          height: "26px",
          borderRadius: "50%",
          backgroundColor: "#2D4F75",
          position: "absolute",
          top: "2px",
          left: isOn ? "32px" : "2px",
          transition: "all 0.3s",
        }}
      ></div>
    </div>
  );
};

Switch.propTypes = {
  isOn: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  onColor: PropTypes.string,
  offColor: PropTypes.string,
  onText: PropTypes.string,
  offText: PropTypes.string,
};

Switch.defaultProps = {
  onColor: "#4caf50", // green when ON
  offColor: "#ccc", // grey when OFF
};

export default Switch;
