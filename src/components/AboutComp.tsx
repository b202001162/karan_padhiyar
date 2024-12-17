import React, { useEffect } from "react";
import MyHeadShot from "../assets/mm3.jpg";
import Footer from "./FooterComp.tsx";
import { Link } from "react-router-dom";

const AboutComp = () => {
  useEffect(() => {
    // title of page
    document.title = "Karan Padhiyar • About";
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [imagesLoaded, setImagesLoaded] = React.useState(false);

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
            className="navbar-option project-option"
            // onClick={() => handleNavOptionClick("Projects")}
          >
            Projects
          </Link>
          <li
            className="navbar-option about-option active-navbar-option"
            // onClick={() => handleNavOptionClick("About")}
          >
            About
          </li>
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

  React.useEffect(() => {
    const img = new Image();
    img.src = MyHeadShot;
    img.onload = () => setImagesLoaded(true);
  }, []);

  return (
    <>
      <Navbar />
      <div
        className="about-container"
        style={{
          paddingTop: "25px",
        }}
      >
        {/* <h1 className="about-heading">About</h1> */}
        <div className="about">
          <div className="about-image">
            {!imagesLoaded && (
              <div
                className="skeleton"
                style={{
                  width: "90%",
                  height: 300,
                  borderRadius: "10px",
                  borderTopLeftRadius: "50%",
                  borderTopRightRadius: "50%",
                }}
              ></div>
            )}
            {imagesLoaded && <img src={MyHeadShot} alt="My Headshot" />}
          </div>
          <div className="about-text">
            <p className="about-para-heading">
              I am a passionate web and mobile developer based in Ahmedabad,
              India.
            </p>
            <p className="about-para">
              I thrive on solving complex problems, delivering efficient
              solutions, and creating seamless digital experiences. Beyond
              development, I bring design sensibilities to my work, ensuring
              every project is both functional and visually engaging.
            </p>
            <p className="about-para">
              My journey in technology has led me to explore and excel in
              various areas, including React, React Native, Spring Boot, Figma,
              and IoT applications. I am always eager to learn and grow, and I
              am excited to take on new challenges and opportunities.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutComp;
