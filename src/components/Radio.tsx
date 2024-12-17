import React, { useEffect, useState } from "react";
import { debounce } from "lodash";
import { FaPlay, FaPause } from "react-icons/fa6";
import "./RadioStyle.css";

const Radio = () => {
  const [radioType, setRadioType] = useState(true);
  const [isOn, setIsOn] = useState(false);
  const [frequency, setFrequency] = useState(91.1);
  const [frequencyFirstDigit, setFrequencyFirstDigit] = useState(9);
  const [frequencySecondDigit, setFrequencySecondDigit] = useState(1);
  const [frequencyThirdDigit, setFrequencyThirdDigit] = useState(1);
  const [volumeFirstDigit, setVolumeFirstDigit] = useState(0);
  const [volumeSecondDigit, setVolumeSecondDigit] = useState(4);
  const [volumeThirdDigit, setVolumeThirdDigit] = useState(0);

  const DotsInSpeaker = () => {
    const cols = 35;
    const rows = 35;
    const totalDots = cols * rows;

    const centerX = Math.floor(cols / 2); // Center column
    const centerY = Math.floor(rows / 2); // Center row
    const radius = 17; // Adjust as needed

    const isWithinCircle = (x, y, cx, cy, r) => {
      return Math.pow(x - cx, 2) + Math.pow(y - cy, 2) <= Math.pow(r, 2);
    };

    const dots = Array.from({ length: totalDots }, (_, i) => i);
    return (
      <>
        {dots.map((dotIndex) => {
          const row = Math.floor(dotIndex / cols);
          const col = dotIndex % cols;

          const isCircleDot = isWithinCircle(
            col,
            row,
            centerX,
            centerY,
            radius
          );
          const className = isCircleDot ? "dot" : "dot dot-base";

          return <div key={dotIndex} className={className}></div>;
        })}
      </>
    );
  };

  const handleFrequencyChange = debounce((e) => {
    const frequency = parseFloat(e.target.value);
    const firstDigit = Math.floor(frequency / 10);
    const secondDigit = Math.floor(frequency % 10);
    const thirdDigit = Math.floor((frequency * 10) % 10);
    setFrequencyFirstDigit(firstDigit);
    setFrequencySecondDigit(secondDigit);
    setFrequencyThirdDigit(thirdDigit);
  }, 50);

  const handleVolumeChange = debounce((e) => {
    const volume = parseInt(e.target.value);
    const firstDigit = Math.floor(volume / 100);
    const secondDigit = Math.floor((volume % 100) / 10);
    const thirdDigit = Math.floor(volume % 10);
    setVolumeFirstDigit(firstDigit);
    setVolumeSecondDigit(secondDigit);
    setVolumeThirdDigit(thirdDigit);
  }, 50);

  return (
    <div className="radio">
      <div className="speaker-container">
        <div className="speaker">
          <DotsInSpeaker />
        </div>
      </div>
      <div className="screen-n-controller-conainer">
        <div className="top-buttons-container">
          <div className="port usb">USB</div>
          <div className="port aux">AUX</div>
          <input
            type="checkbox"
            className="top-button-text power-button-text"
            id="start"
          />
          <label htmlFor="start" className="top-button-text power-button-text">
            Start
            <div className="power-button" id="power-button"></div>
            <span className="screen-digits-cont" id="frequency-faded-digits-id">
              <p className="faded-digits">8</p>
              <p className="faded-digits">8</p>
              <p className="faded-digits">8</p>
              <div className="digit-dot" id="digit-dot"></div>
            </span>
            <span className="screen-digits-cont" id="frequency-digits-id">
              <p>{frequencyFirstDigit}</p>
              <p>{frequencySecondDigit}</p>
              <p>{frequencyThirdDigit}</p>
            </span>
            <span
              className="screen-digits-cont screen-volume-digits-cont"
              id="frequency-faded-digits-id"
            >
              <p className="faded-digits">8</p>
              <p className="faded-digits">8</p>
              <p className="faded-digits">8</p>
            </span>
            <span
              className="screen-digits-cont screen-volume-digits-cont"
              id="frequency-digits-id"
            >
              <p>{volumeFirstDigit}</p>
              <p>{volumeSecondDigit}</p>
              <p>{volumeThirdDigit}</p>
            </span>
            <span
              className="screen-digits-cont screen-fm-am-digits-cont"
              id="fm-am-faded-digits-id"
              style={{
                zIndex: 200,
              }}
            ></span>
          </label>
        </div>
        <div className="screen">
          <div style={{
            position: "absolute",
            zIndex: 100,
            clipPath: "polygon(0 0, 100% 0%, 50% 100%, 0% 100%)",
            backgroundImage: "linear-gradient(75deg, #ffffff00, #ffffff00, #ffffff20)",
            width: "30%",
            height: "70%",
            left: "15%",
          }}>

          </div>
        </div>
        <div className="controller">
          <div className="frequency-controller">
            <input
              type="range"
              className="frequency-controller-tip"
              id="frequency-controller-tip"
              min="88"
              max="99"
              step="0.1"
              defaultValue="91.1"
              style={{
                zIndex: 200,
              }}
              //  on release
              onChange={handleFrequencyChange}
            />
            <div
              style={{
                width: "2px",
                height: "25px",
                position: "absolute",
                backgroundColor: "#00000070",
              }}
            />
            <div
              style={{
                width: "2px",
                height: "45px",
                position: "absolute",
                backgroundColor: "#00000070",
                left: "10%",
              }}
            />
            <div
              style={{
                width: "1.5px",
                height: "20px",
                position: "absolute",
                backgroundColor: "#00000050",
                left: "15%",
              }}
            />
            <div
              style={{
                width: "1.5px",
                height: "25px",
                position: "absolute",
                backgroundColor: "#00000050",
                left: "20%",
              }}
            />
            <div
              style={{
                width: "2px",
                height: "20px",
                position: "absolute",
                backgroundColor: "#00000050",
                left: "25%",
              }}
            />
            <div
              style={{
                width: "2px",
                height: "35px",
                position: "absolute",
                backgroundColor: "#00000070",
                left: "30%",
              }}
            />
            <div
              style={{
                width: "1.5px",
                height: "15px",
                position: "absolute",
                backgroundColor: "#00000050",
                left: "35%",
              }}
            />
            <div
              style={{
                width: "2px",
                height: "25px",
                position: "absolute",
                backgroundColor: "#00000050",
                left: "40%",
              }}
            />
            <div
              style={{
                width: "1.5px",
                height: "15px",
                position: "absolute",
                backgroundColor: "#00000050",
                left: "45%",
              }}
            />
            <div
              style={{
                width: "1.5px",
                height: "15px",
                position: "absolute",
                backgroundColor: "#00000050",
                left: "55%",
              }}
            />
            <div
              style={{
                width: "2px",
                height: "25px",
                position: "absolute",
                backgroundColor: "#00000050",
                left: "60%",
              }}
            />
            <div
              style={{
                width: "1.5px",
                height: "15px",
                position: "absolute",
                backgroundColor: "#00000050",
                left: "65%",
              }}
            />
            <div
              style={{
                width: "2px",
                height: "35px",
                position: "absolute",
                backgroundColor: "#00000070",
                left: "70%",
              }}
            />
            <div
              style={{
                width: "1.5px",
                height: "15px",
                position: "absolute",
                backgroundColor: "#00000050",
                left: "75%",
              }}
            />
            <div
              style={{
                width: "2px",
                height: "25px",
                position: "absolute",
                backgroundColor: "#00000060",
                left: "80%",
              }}
            />
            <div
              style={{
                width: "1.5px",
                height: "15px",
                position: "absolute",
                backgroundColor: "#00000060",
                left: "85%",
              }}
            />
            <div
              style={{
                width: "2px",
                height: "45px",
                position: "absolute",
                backgroundColor: "#00000070",
                left: "90%",
              }}
            />
            <div className="frequency-controller-text">Frequency</div>
          </div>
        </div>
        <div className="controller">
          <div className="volume-controller">
            <input
              type="range"
              className="volume-controller-tip"
              min="0"
              max="100"
              step="5"
              defaultValue="40"
              //  on release
              onChange={handleVolumeChange}
              style={{
                zIndex: 200,
              }}
            />
            <div
              style={{
                width: "35px",
                height: "2.5px",
                position: "absolute",
                backgroundColor: "#00000070",
              }}
            />
            <div
              style={{
                width: "20px",
                height: "2.5px",
                position: "absolute",
                backgroundColor: "#00000050",
                top: "25%",
              }}
            />
            <div
              style={{
                width: "20px",
                height: "2.5px",
                position: "absolute",
                backgroundColor: "#00000050",
                top: "75%",
              }}
            />
            <div
              style={{
                width: "45px",
                height: "2.5px",
                position: "absolute",
                backgroundColor: "#00000070",
                top: "0px",
              }}
            />
            <div
              style={{
                width: "45px",
                height: "2.5px",
                position: "absolute",
                backgroundColor: "#00000070",
                top: "100%",
              }}
            />
            <div className="volume-controller-text">Volume</div>
          </div>
          <div>
            <div className="pressable-button">
              <div className="pressable-button-top">MUTE</div>
            </div>
            <input
              type="checkbox"
              id="fm-am-checkbox"
              className="pressable-button"
            />
            <label htmlFor="fm-am-checkbox">
              <span
                className="screen-digits-cont screen-fm-am-digits-cont"
                id="frequency-faded-digits-id"
                style={{
                  zIndex: 50,
                }}
              >
                <p className="faded-digits">8</p>
                <p className="faded-digits">8</p>
              </span>
              <span
                className="screen-digits-cont screen-fm-am-digits-cont"
                id="am-visible-digits-id"
                style={{
                  zIndex: 10,
                }}
              >
                <p>A</p>
                <p>M</p>
              </span>
              <span
                className="screen-digits-cont screen-fm-am-digits-cont"
                id="fm-visible-digits-id"
                style={{
                  zIndex: 10,
                }}
              >
                <p>F</p>
                <p>M</p>
              </span>
              <div className="pressable-button" id="am">
                <div className="pressable-button-top am">AM</div>
              </div>
              <span className="pressable-button" id="fm">
                <div className="pressable-button-top fm">FM</div>
              </span>
            </label>
          </div>
        </div>
        <div className="controller">
          <input type="checkbox" id="play-pause" className="pressable-button" />
          <label htmlFor="play-pause">
            <div
              className="pressable-button"
              style={{
                width: "100px",
              }}
            >
              <div className="pressable-button-top">PLAY/PAUSE</div>
            </div>
          </label>
          <div className="pressable-button">
            <div className="pressable-button-top">1</div>
          </div>
          <div className="pressable-button">
            <div className="pressable-button-top">2</div>
          </div>
          <div className="pressable-button">
            <div className="pressable-button-top">3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Radio;
