import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import bcpic from "../assets/bc.webp";
import Switch from "../components/Switch.tsx";
import Radio from "../components/Radio.tsx";
import Prj1pc1pic from "../assets/prj1-pc1.png";
import Prj4pc1pic from "../assets/prj4-pc1.png";
import Prj1pc3pic from "../assets/project3.jpg";
import Prj1mb1pic from "../assets/prj1-mb1.png";
import Footer from "../components/FooterComp.tsx";
import Prj3Vid from "../assets/prj3-vid.mp4";
import Prj1PcVid1 from "../assets/Prj1-Pc-Vid1.mp4";
import Prj1PcVid2 from "../assets/Prj1-Pc-Vid2.mp4";
import Prj1PcVid3 from "../assets/Prj1-Pc-Vid3.mp4";
import Prj1MbVid1 from "../assets/Prj1-Mb-Vid1.mp4";
import Prj1MbVid2 from "../assets/Prj1-Mb-Vid2.mp4";
import Prj3PcPic1 from "../assets/prj3-pc-pic1.png";
import Prj3PcPic2 from "../assets/prj3-pc-pic2.png";
import Prj3PcPic3 from "../assets/prj3-pc-pic3.jpg";
import Prj3PcPic9 from "../assets/prj3-pc-pic4.jpg";
import Prj3PcPic4 from "../assets/prj3-dt.png";
import Prj3PcPic5 from "../assets/prj3-grph1.png";
import Prj3PcPic6 from "../assets/prj3-grph2.png";
import Prj3PcPic7 from "../assets/prj3-grph3.png";
import Prj3PcPic8 from "../assets/prj3-grph4.png";
import Prj2Pic1 from "../assets/prj2-pic1.png";
import Prj2Pic2 from "../assets/prj2-pic2.png";
import Prj2Pic3 from "../assets/prj2-pic3.png";
import Prj2Pic4 from "../assets/prj2-pic4.png";
import Prj2Pic5 from "../assets/prj2-pic5.png";
import Prj2Pic6 from "../assets/prj2-pic6.png";
import Prj2Pic7 from "../assets/prj2-pic7.png";
import Prj2Pic8 from "../assets/prj2-pic8.png";
import Prj2Pic9 from "../assets/prj2-pic9.png";

// import data
import techstacks from "../data/techstack.js";
import projects from "../data/projectTitles.js";
import timeSpans from "../data/timeSpans.js";
import teams from "../data/teams.js";
import roles from "../data/roles.js";
import overviews from "../data/overviews.js";
import futureScopes from "../data/futureScopes.js";
import keyFeatures from "../data/keyFeatures.js";

const ProjectViewPage = ({ projectIndex = 0 }) => {
  const prjIndex = projectIndex - 1 || 0;
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const [isSmall, setIsSmall] = useState(window.innerWidth < 1100);

  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const toggleSwitch = () => {
    setIsSwitchOn((prevState) => !prevState);
  };
  const project = projects[prjIndex];
  const timespan = timeSpans[prjIndex];

  const Navbar = () => {
    useEffect(() => {
      // title of page

      // console log name of currently visible ref
      window.onscroll = function () {
        if (
          document.body.scrollTop > 50 ||
          document.documentElement.scrollTop > 50
        ) {
          try {
            document.querySelector(".navbar").style.backgroundColor =
              "#dbe4eacc";
            document.querySelector(".navbar").style.backdropFilter =
              "blur(20px) saturate(2)";
            document.querySelector(".active-navbar-option").style.boxShadow =
              "0 0 10px 0 rgba(0, 0, 0, 0.1)";
          } catch (error) {
            console.error(error);
          }
        } else {
          try {
            document.querySelector(".navbar").style.backgroundColor =
              "transparent";
            document.querySelector(".navbar").style.backdropFilter = "none";
            document.querySelector(".active-navbar-option").style.boxShadow =
              "none";
          } catch (error) {
            console.error(error);
          }
        }
      };
    }, []);
    return (
      <nav className="navbar-container">
        <div className="navbar">
          <Link
            to="/karan_padhiyar"
            className="navbar-option project-option active-navbar-option"
            // onClick={() => handleNavOptionClick("Projects")}
          >
            Projects
          </Link>
          <Link
            to="/karan_padhiyar/about"
            className="navbar-option about-option"
            // onClick={() => handleNavOptionClick("About")}
          >
            About
          </Link>
          <Link
            to="/karan_padhiyar/contact"
            className="navbar-option contact-option"
            // onClick={() => handleNavOptionClick("Contact")}
          >
            Contact
          </Link>
        </div>
      </nav>
    );
  };

  const Project1 = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    var images;

    useEffect(() => {
      if (prjIndex === 0) {
        images = [Prj1pc1pic];
      } else if (prjIndex === 2) {
        images = [
          Prj1pc3pic,
          Prj3PcPic1,
          Prj3PcPic2,
          Prj3PcPic3,
          Prj3PcPic9,
          Prj3PcPic4,
          Prj3PcPic5,
          Prj3PcPic6,
          Prj3PcPic7,
          Prj3PcPic8,
        ];
      } else if (prjIndex === 1) {
        images = [
          Prj2Pic1,
          Prj2Pic2,
          Prj2Pic3,
          Prj2Pic4,
          Prj2Pic5,
          Prj2Pic6,
          Prj2Pic7,
          Prj2Pic8,
          Prj2Pic9,
        ];
      } else if (prjIndex === 3) {
        images = [Prj4pc1pic];
      }
      const loadImage = (imageSrc) => {
        return new Promise((resolve, reject) => {
          const image = new Image();
          image.onload = () => resolve(image);
          image.onerror = reject;
          image.src = imageSrc;
        });
      };

      const loadImages = async () => {
        try {
          await Promise.all(images.map(loadImage));
          setImagesLoaded(true);
        } catch (error) {
          console.error("One or more images failed to load");
        }
      };

      loadImages();
    }, []);

    return (
      <>
        <div className="view-project-metadata">
          <div className="view-project-metadata-grid">
            <div className="view-project-metadata-item">
              <div className="view-project-metadata-item-key">Timespan</div>
              <div className="view-project-metadata-item-value">{timespan}</div>
            </div>
            <div className="view-project-metadata-item">
              <div className="view-project-metadata-item-key">Team</div>
              <div className="view-project-metadata-item-value">
                {teams[prjIndex]}
              </div>
            </div>
            <div className="view-project-metadata-item">
              <div className="view-project-metadata-item-key">Role</div>
              <div className="view-project-metadata-item-value">
                {roles[prjIndex]}
              </div>
            </div>
            <div className="view-project-metadata-item">
              <div className="view-project-metadata-item-key">Techstack</div>
              <div className="view-project-metadata-item-value">
                {techstacks[prjIndex]}
              </div>
            </div>
          </div>
        </div>
        {isMobile ? (
          <img
            src={
              prjIndex === 0
                ? Prj1mb1pic
                : prjIndex === 2
                ? Prj1pc3pic
                : prjIndex === 3
                ? Prj4pc1pic
                : null
            }
            className="view-project-overview-image"
            alt={""}
          />
        ) : (
          <>
            {imagesLoaded ? (
              <img
                src={
                  prjIndex === 0
                    ? Prj1pc1pic
                    : prjIndex === 2
                    ? Prj1pc3pic
                    : prjIndex === 3
                    ? Prj4pc1pic
                    : null
                }
                className="view-project-overview-image overview-image3"
                alt={""}
              />
            ) : (
              <div
                className="skeleton"
                style={{
                  width: "90%",
                  height: 450,
                  borderRadius: "10px",
                }}
              ></div>
            )}
          </>
        )}
        <div className="view-project-overview">
          <div className="view-project-overview-heading">Overview</div>
          {overviews[prjIndex]}
        </div>
        {prjIndex === 2 || prjIndex === 3 ? (
          <div className="view-project-overview">
            <div className="view-project-overview-heading">Key Features</div>
            {keyFeatures[prjIndex]}
          </div>
        ) : null}
        {prjIndex === 2 || prjIndex === 1 ? (
          <div className="view-project-overview">
            <div className="view-project-overview-heading">Gallery</div>
            {prjIndex === 2 ? (
              <>
                <div className="view-project-video-container view-project-gallery-pics-container">
                  <div>
                    <div>
                      <div className="view-project-video-head">
                        <div className="view-project-video-title">
                          To interface the DHT22 sensor with the ESP32, the
                          following connections were made: <br />
                          <b>DHT22 Data Pin:</b> Connected to{" "}
                          <b>ESP32's GPIO26 pin</b>. <br />
                          <b>DHT22 VCC:</b> Connected to{" "}
                          <b>ESP32's 3.3V power supply pin</b>. <br />
                          <b>DHT22 GND:</b> Connected to{" "}
                          <b>ESP32's ground pin</b>.
                        </div>
                      </div>
                      {imagesLoaded ? (
                        <img
                          src={Prj3PcPic1}
                          className="view-project-gallery-image"
                          alt={""}
                        />
                      ) : (
                        <div
                          className="skeleton"
                          style={{
                            width: "900px",
                            height: 350,
                            borderRadius: "10px",
                          }}
                        ></div>
                      )}
                    </div>
                    <div>
                      <div className="view-project-video-head">
                        <div className="view-project-video-title">
                          PINOUT of the <b>ESP32 microcontroller</b>
                        </div>
                      </div>
                      {imagesLoaded ? (
                        <img
                          src={Prj3PcPic2}
                          className="view-project-gallery-image"
                          alt={""}
                        />
                      ) : (
                        <div
                          className="skeleton"
                          style={{
                            width: "90%",
                            height: 200,
                            borderRadius: "10px",
                            marginBottom: "20px",
                          }}
                        ></div>
                      )}
                      <div className="view-project-video-head">
                        <div className="view-project-video-title">
                          <b>Final hardware connections</b>
                        </div>
                      </div>
                      {imagesLoaded ? (
                        <img
                          src={Prj3PcPic9}
                          className="view-project-gallery-image"
                          alt={""}
                        />
                      ) : (
                        <div
                          className="skeleton"
                          style={{
                            width: "90%",
                            height: 350,
                            borderRadius: "10px",
                          }}
                        ></div>
                      )}
                    </div>
                  </div>
                  {imagesLoaded ? (
                    <img
                      src={Prj3PcPic3}
                      className="view-project-gallery-image"
                      alt={""}
                    />
                  ) : (
                    <div
                      className="skeleton"
                      style={{
                        width: "90%",
                        height: 450,
                        borderRadius: "10px",
                      }}
                    ></div>
                  )}
                </div>
                <div className="view-project-video-container">
                  <div className="view-project-video-head">
                    <div className="view-project-video-title">
                      <b>Data-table</b> consist data of all the sensors
                      (hour-wise).
                    </div>
                  </div>
                  {imagesLoaded ? (
                    <img
                      src={Prj3PcPic4}
                      className="view-project-gallery-image"
                      alt={""}
                    />
                  ) : (
                    <div
                      className="skeleton"
                      style={{
                        width: "90%",
                        height: 450,
                        borderRadius: "10px",
                      }}
                    ></div>
                  )}
                  <br />
                  <div className="view-project-video-head">
                    <div className="view-project-video-title">
                      <b>Day-wise graph of Temperature.</b>
                    </div>
                  </div>
                  {imagesLoaded ? (
                    <img
                      src={Prj3PcPic5}
                      className="view-project-gallery-image"
                      alt={""}
                    />
                  ) : (
                    <div
                      className="skeleton"
                      style={{
                        width: "90%",
                        height: 450,
                        borderRadius: "10px",
                      }}
                    ></div>
                  )}
                  <br />
                  <div className="view-project-video-head">
                    <div className="view-project-video-title">
                      <b>Day-wise graph of Humidity.</b>
                    </div>
                  </div>
                  {imagesLoaded ? (
                    <img
                      src={Prj3PcPic6}
                      className="view-project-gallery-image"
                      alt={""}
                    />
                  ) : (
                    <div
                      className="skeleton"
                      style={{
                        width: "90%",
                        height: 450,
                        borderRadius: "10px",
                      }}
                    ></div>
                  )}
                  <br />
                  <div className="view-project-video-head">
                    <div className="view-project-video-title">
                      <b>Month-wise graph of Temperature.</b>
                    </div>
                  </div>
                  {imagesLoaded ? (
                    <img
                      src={Prj3PcPic7}
                      className="view-project-gallery-image"
                      alt={""}
                    />
                  ) : (
                    <div
                      className="skeleton"
                      style={{
                        width: "90%",
                        height: 450,
                        borderRadius: "10px",
                      }}
                    ></div>
                  )}
                  <br />
                  <div className="view-project-video-head">
                    <div className="view-project-video-title">
                      <b>Month-wise graph of Humidity.</b>
                    </div>
                  </div>
                  {imagesLoaded ? (
                    <img
                      src={Prj3PcPic8}
                      className="view-project-gallery-image"
                      alt={""}
                    />
                  ) : (
                    <div
                      className="skeleton"
                      style={{
                        width: "90%",
                        height: 450,
                        borderRadius: "10px",
                      }}
                    ></div>
                  )}
                  <br />
                  <div className="view-project-video-head">
                    <div className="view-project-video-title">
                      <b>
                        Demonstrating video of the Environmental Monitoring
                        System.
                      </b>
                    </div>
                  </div>
                  <video className="view-project-video" autoPlay loop muted>
                    <source src={Prj3Vid} type="video/mp4" />
                  </video>
                  <br />
                </div>
              </>
            ) : (
              <>
                <div className="view-project-video-container gallery-container">
                  <div className="view-project-gallery-container">
                    <div>
                      <div className="view-project-video-head">
                        <div
                          className="view-project-video-title"
                          style={{
                            paddingTop: "20px",
                            paddingLeft: "20px",
                          }}
                        >
                          <b>Dashboard</b> <br />
                        </div>
                      </div>
                      {imagesLoaded ? (
                        <img
                          src={Prj2Pic1}
                          className="view-project-gallery-image"
                          alt={""}
                        />
                      ) : (
                        <div className="skeleton-mb-img"></div>
                      )}
                    </div>
                    <div>
                      <div className="view-project-video-head">
                        <div
                          className="view-project-video-title"
                          style={{
                            paddingTop: "20px",
                            paddingLeft: "20px",
                          }}
                        >
                          <b>Profile page</b> <br />
                        </div>
                      </div>
                      {imagesLoaded ? (
                        <img
                          src={Prj2Pic2}
                          className="view-project-gallery-image"
                          alt={""}
                        />
                      ) : (
                        <div className="skeleton-mb-img"></div>
                      )}
                    </div>
                    <div>
                      <div className="view-project-video-head">
                        <div
                          className="view-project-video-title"
                          style={{
                            paddingTop: "20px",
                            paddingLeft: "20px",
                          }}
                        >
                          <b>Notifications</b> <br />
                        </div>
                      </div>
                      {imagesLoaded ? (
                        <img
                          src={Prj2Pic3}
                          className="view-project-gallery-image"
                          alt={""}
                        />
                      ) : (
                        <div className="skeleton-mb-img"></div>
                      )}
                    </div>
                  </div>
                  <div className="view-project-gallery-container">
                    <div>
                      <div className="view-project-video-head">
                        <div
                          className="view-project-video-title"
                          style={{
                            paddingTop: "20px",
                            paddingLeft: "20px",
                          }}
                        >
                          <b>Course registration</b> <br />
                        </div>
                      </div>
                      {imagesLoaded ? (
                        <img
                          src={Prj2Pic4}
                          className="view-project-gallery-image"
                          alt={""}
                        />
                      ) : (
                        <div className="skeleton-mb-img"></div>
                      )}
                    </div>
                    <div>
                      <div className="view-project-video-head">
                        <div
                          className="view-project-video-title"
                          style={{
                            paddingTop: "20px",
                            paddingLeft: "20px",
                          }}
                        >
                          <b>Fee payment</b> <br />
                        </div>
                      </div>
                      {imagesLoaded ? (
                        <img
                          src={Prj2Pic5}
                          className="view-project-gallery-image"
                          alt={""}
                        />
                      ) : (
                        <div className="skeleton-mb-img"></div>
                      )}
                    </div>
                    <div>
                      <div className="view-project-video-head">
                        <div
                          className="view-project-video-title"
                          style={{
                            paddingTop: "20px",
                            paddingLeft: "20px",
                          }}
                        >
                          <b>Courses</b> <br />
                        </div>
                      </div>
                      {imagesLoaded ? (
                        <img
                          src={Prj2Pic6}
                          className="view-project-gallery-image"
                          alt={""}
                        />
                      ) : (
                        <div className="skeleton-mb-img"></div>
                      )}
                    </div>
                  </div>
                  <div className="view-project-gallery-container">
                    <div>
                      <div className="view-project-video-head">
                        <div
                          className="view-project-video-title"
                          style={{
                            paddingTop: "20px",
                            paddingLeft: "20px",
                          }}
                        >
                          <b>Course details</b> <br />
                        </div>
                      </div>
                      {imagesLoaded ? (
                        <img
                          src={Prj2Pic7}
                          className="view-project-gallery-image"
                          alt={""}
                        />
                      ) : (
                        <div className="skeleton-mb-img"></div>
                      )}
                    </div>
                    <div>
                      <div className="view-project-video-head">
                        <div
                          className="view-project-video-title"
                          style={{
                            paddingTop: "20px",
                            paddingLeft: "20px",
                          }}
                        >
                          <b>Assignment Submission</b> <br />
                        </div>
                      </div>
                      {imagesLoaded ? (
                        <img
                          src={Prj2Pic8}
                          className="view-project-gallery-image"
                          alt={""}
                        />
                      ) : (
                        <div className="skeleton-mb-img"></div>
                      )}
                    </div>
                    <div>
                      <div className="view-project-video-head">
                        <div
                          className="view-project-video-title"
                          style={{
                            paddingTop: "20px",
                            paddingLeft: "20px",
                          }}
                        >
                          <b>View Grade card</b> <br />
                        </div>
                      </div>
                      {imagesLoaded ? (
                        <img
                          src={Prj2Pic9}
                          className="view-project-gallery-image"
                          alt={""}
                        />
                      ) : (
                        <div className="skeleton-mb-img"></div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ) : null}
        {prjIndex === 1 ? (
          <div className="view-project-overview">
            <div className="view-project-overview-heading">
              Impact and Outcomes
            </div>
            <div className="view-project-overview-description">
              The Student Academic Management Application streamlined academic
              processes for students, providing a convenient{" "}
              <b>platform for managing their academic journey</b>. It integrated
              essential{" "}
              <b>
                features like course registration, notifications, and grade
                cards
              </b>
              .
            </div>
            <div className="view-project-overview-description">
              This project not only optimized academic management for students
              but also showcased our ability to deliver scalable and impactful
              solutions, demonstrating proficiency in{" "}
              <b>
                mobile app development, API integration, and state management
                techniques
              </b>
              .
            </div>
          </div>
        ) : null}
        {prjIndex === 2 ? (
          <div className="view-project-overview">
            <div className="view-project-overview-heading">
              System Architecture
            </div>
            <div className="view-project-overview-description" id="sys-arc">
              The Environmental Monitoring System is built on a robust
              architecture that integrates hardware, software, and data
              communication to ensure seamless functionality.
              <br />
              <br />
              <b>Hardware Layer: </b>
              <ul>
                <li>
                  The system uses{" "}
                  <b>
                    ESP32 microcontrollers and DHT22 sensors at twelve locations
                  </b>{" "}
                  to collect temperature and humidity data.
                </li>
                <li>
                  The sensors interface with the{" "}
                  <b>ESP32 to capture readings every hour</b>.
                </li>
              </ul>
              <b>Data Transmission: </b>
              <ul>
                <li>
                  ESP32 microcontrollers are <b>programmed in Embedded C</b>{" "}
                  using the
                  <b>Arduino IDE to make API calls</b>.
                </li>
                <li>
                  The API ensures secure and reliable data transfer from the
                  devices to the database.
                </li>
              </ul>
              <b>Backend: </b>
              <ul>
                <li>
                  The backend is built with PHP and uses a{" "}
                  <b>MySQL database to store collected data</b>.
                </li>
                <li>
                  The server processes and prepares incoming data for
                  visualization.
                </li>
              </ul>
              <b>Frontend: </b>
              <ul>
                <li>
                  The web interface displays data in{" "}
                  <b>
                    tables and dynamic graphs, built with HTML, CSS, and
                    JavaScript
                  </b>
                  .
                </li>
                <li>
                  Users can <b>view hourly, daily, and yearly summaries</b> for
                  comprehensive analysis.
                </li>
              </ul>
            </div>
          </div>
        ) : null}
        {prjIndex === 0 ? (
          <div className="view-project-aproach">
            <div className="view-project-overview-heading">
              <div
                style={{
                  marginRight: "10px",
                }}
              >
                <Switch
                  isOn={isSwitchOn}
                  handleToggle={toggleSwitch}
                  onColor="transparent"
                  offColor="transparent"
                  onText="New"
                  offText="Old"
                />
              </div>
              Approach
            </div>
            {isSwitchOn ? (
              <>
                <div className="view-project-overview-description">
                  The Student Documents Service Portal offers a modern,
                  automated, and user-centric solution,{" "}
                  <b>replacing the traditional manual process</b>. Students can
                  easily log in, browse, and select the required documents, such
                  as bonafide certificates or mark sheets, with the system
                  calculating the associated charges.
                </div>
                <div className="view-project-overview-description">
                  <b>
                    Secure online payment is facilitated through an integrated
                    payment gateway
                  </b>
                  , and once processed, the request is automatically added to
                  the admin dashboard.{" "}
                  <b>Administrators can track and update request statuses</b>{" "}
                  (e.g., pending, issued, delivered), while{" "}
                  <b>students receive real-time notification mails</b> about the
                  progress of their applications.
                </div>
                <div className="view-project-overview-description">
                  This streamlined approach{" "}
                  <b>
                    minimizes back-and-forth communication, reduces manual
                    workload
                  </b>
                  , and provides students with greater convenience and
                  transparency in accessing their documents.
                </div>
              </>
            ) : (
              <>
                <div className="view-project-overview-description">
                  The traditional process for requesting academic documents was
                  plagued by <b>inefficiencies and manual labor</b>. Students
                  had to <b>send an email to the document section</b>,
                  specifying their requirements, which would then be met with a
                  response detailing applicable charges.
                </div>
                <div className="view-project-overview-description">
                  This was <b>followed by manual payment</b> through UPI or
                  other payment applications, accompanied by a{" "}
                  <b>screenshot of payment confirmation,</b> which was then{" "}
                  <b>verified by the administrative team.</b>
                </div>
                <div className="view-project-overview-description">
                  The student would then be added to a list for processing, but
                  this system lacked transparency and automation,{" "}
                  <b>
                    requiring students to physically visit the document office
                  </b>{" "}
                  to check the status of their requests. If the{" "}
                  <b>
                    documents were not ready, students were often advised to
                    return on a later date
                  </b>
                  , resulting in further delays and{" "}
                  <b>
                    unnecessary back-and-forth communication, administrative
                    burden, and student frustration
                  </b>
                  .
                </div>
              </>
            )}
          </div>
        ) : null}
        {prjIndex === 0 || prjIndex === 3 ? (
          <div className="view-project-how-it-works">
            <div className="view-project-overview-heading">Demonstration</div>
            {prjIndex === 0 ? (
              <>
                <div className="view-project-overview-description">
                  <div className="view-project-video-container">
                    <div className="view-project-video-head">
                      <div className="view-project-video-title">
                        The student logs in and browses available documents
                        (e.g., bonafide certificates, mark sheets). They{" "}
                        <b>select the required documents</b> and add them to the
                        request cart. The{" "}
                        <b>platform calculates the total charges</b>, and the
                        student makes a secure payment. After payment, a
                        confirmation message appears, and the request is
                        submitted for processing.
                      </div>
                    </div>
                    {isMobile ? (
                      <video className="view-project-video" autoPlay loop muted>
                        <source src={Prj1MbVid1} type="video/mp4" />
                      </video>
                    ) : (
                      <video className="view-project-video" autoPlay loop muted>
                        <source src={Prj1PcVid1} type="video/mp4" />
                      </video>
                    )}
                  </div>
                </div>
                <div className="view-project-overview-description">
                  <div className="view-project-video-container">
                    <div className="view-project-video-head">
                      <div className="view-project-video-title">
                        The student can <b>view real-time status updates</b> on
                        their dashboard.
                      </div>
                    </div>
                    <video className="view-project-video" autoPlay loop muted>
                      {isMobile ? (
                        <source src={Prj1MbVid2} type="video/mp4" />
                      ) : (
                        <source src={Prj1PcVid2} type="video/mp4" />
                      )}
                    </video>
                  </div>
                </div>
                <div className="view-project-overview-description">
                  <div className="view-project-video-container">
                    <div className="view-project-video-head">
                      <div className="view-project-video-title">
                        The admin logs in and views the dashboard, where they
                        can <b>track and update the status</b> of student
                        requests. Students{" "}
                        <b>receive real-time notification emails</b> about the
                        progress of their applications.
                      </div>
                    </div>
                    <video className="view-project-video" autoPlay loop muted>
                      <source src={Prj1PcVid3} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </>
            ) : (
              <div className="view-project-overview-description">
                {isSmall ? (
                  <>Width should be 1100px or more for best experience.</>
                ) : (
                  <Radio />
                )}
              </div>
            )}
          </div>
        ) : null}
        {prjIndex === 2 || prjIndex === 3 ? (
          <div className="view-project-overview">
            <div className="view-project-overview-heading">
              Learning Outcomes
            </div>

            {prjIndex === 2 ? (
              <div className="view-project-overview-description" id="sys-arc">
                Through this project, we gained{" "}
                <b>hands-on experience with IoT</b> and hardware integration by{" "}
                <b>working with ESP32 microcontrollers and DHT22 sensors</b>. We
                learned to <b>program in Embedded C</b> using the
                <b>Arduino IDE</b> and{" "}
                <b>
                  developed skills in backend and frontend development with PHP,
                  MySQL, HTML, CSS, and JavaScript
                </b>
                . <b>Deploying the system on the institute's server</b> enhanced
                our understanding of real-world implementation and server
                management. Additionally, we improved teamwork, problem-solving,
                and project management skills, making this experience valuable
                for both technical and professional growth.
              </div>
            ) : (
              <div className="view-project-overview-description" id="sys-arc">
                Through this project, I deepened my understanding of CSS styling
                techniques and explored innovative solutions to simulate
                interactivity without relying on JavaScript. Key learning
                outcomes include: <br />
                <b>Advanced CSS Skills:</b>
                <br /> Mastery of gradients, box shadows, pseudo-elements to
                achieve realistic and visually appealing components like
                speakers, knobs, and sliders. <br />
                <b>CSS-Only Interactivity:</b> <br />
                Implemented{" "}
                <b>
                  interactive behaviors using HTML checkboxes and the :checked
                  pseudo-class in CSS as an alternative to JavaScript's onClick
                  event
                </b>
                . <br />
                Example: Buttons and toggles (e.g., power control, play/pause)
                simulate their active state purely through CSS without
                scripting. <br />
              </div>
            )}
          </div>
        ) : null}
        <div className="view-project-future-scope">
          <div className="view-project-overview-heading">Future Scope</div>
          {futureScopes[prjIndex]}
        </div>
      </>
    );
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 600);
    });
    document.title = "Karan Padhiyar • Projects";
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="view-project-page">
        {/* <img src={bcpic} className="video" alt={""} /> */}
        <div className="view-project">
          <div className="view-project-heading">{project}</div>
          <Project1 />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProjectViewPage;
