import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import bcvideo from "./assets/bc.webm";
import { GiCrossedBones } from "react-icons/gi";
import IntroPage from "./pages/IntroPage.tsx";
import AboutComp from "./components/AboutComp.tsx";
import ContactComp from "./components/ContactComp.tsx";
import Footer from "./components/FooterComp.tsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ViewProject from "./pages/ProjectViewPage.tsx";
import PrjImg1 from "./assets/prj1.png";
import PrjImg2 from "./assets/prj2.png";
import PrjImg3 from "./assets/prj3.png";
import PrjImg4 from "./assets/prj4.png";

function App() {
  const [projectIndex, setProjectIndex] = useState(0);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const myWorkRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    var images = [PrjImg1, PrjImg2, PrjImg3, PrjImg4];
    var loaded = 0;
    images.forEach((image) => {
      new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image;
        loadImg.onload = resolve;
        loadImg.onerror = reject;
      })
        .then(() => {
          loaded++;
          if (loaded === images.length) {
            setImagesLoaded(true);
          }
        })
        .catch((err) => console.log("Failed to load images", err));
    });
  }, []);

  const handleProjectClick = async (index) => {
    setProjectIndex(index);
    // scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavOptionClick = async (option) => {
    await setProjectIndex(0);
    try {
      if (option === "Projects") {
        document.querySelector(".active-navbar-option").style.boxShadow =
          "none";
        document
          .querySelector(".active-navbar-option")
          .classList.remove("active-navbar-option");
        document.title = "Karan Padhiyar • Projects";
        document
          .querySelector(".project-option")
          .classList.add("active-navbar-option");
        window.scrollTo({
          top: projectRef.current.offsetTop,
          behavior: "smooth",
        });
      } else if (option === "About") {
        document.querySelector(".active-navbar-option").style.boxShadow =
          "none";
        document
          .querySelector(".active-navbar-option")
          .classList.remove("active-navbar-option");
        document.title = "Karan Padhiyar • About";
        document
          .querySelector(".about-option")
          .classList.add("active-navbar-option");
        window.scrollTo({
          top: aboutRef.current.offsetTop,
          behavior: "smooth",
        });
      } else if (option === "Contact") {
        document.querySelector(".active-navbar-option").style.boxShadow =
          "none";
        document
          .querySelector(".active-navbar-option")
          .classList.remove("active-navbar-option");
        document.title = "Karan Padhiyar • Contact";
        document
          .querySelector(".contact-option")
          .classList.add("active-navbar-option");
        window.scrollTo({
          top: contactRef.current.offsetTop,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: myWorkRef.current.offsetTop,
          behavior: "smooth",
        });
      }
      document.querySelector(".active-navbar-option").style.boxShadow =
        "0 0 10px 0 rgba(0, 0, 0, 0.1)";
    } catch (error) {
      console.error(error);
    }
  };

  const MainContainer = () => {
    useEffect(() => {
      document.title = "Karan Padhiyar";
      // meta tags
      const meta = document.createElement("meta");
      meta.name = "Portfolio";
      meta.content = "Karan's Portfolio";
    }, []);
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
            <li
              className="navbar-option project-option active-navbar-option"
              // onClick={() => handleNavOptionClick("Projects")}
            >
              Projects
            </li>
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
    return (
      <>
        <Navbar />
        {projectIndex === 0 ? (
          <>
            <video autoPlay loop muted className="video">
              <source src={bcvideo} type="video/webm" />
            </video>
            {/* <img src={bcpic} className="video" alt={""} /> */}
            <div style={{ width: "100%" }} ref={projectRef}>
              <IntroPage />
            </div>
            <div style={{ width: "100%" }} ref={myWorkRef}>
              <ProjectsComp />
            </div>
            <Footer />
          </>
        ) : (
          <>
            <div
              className="cancel-icon-container"
              onClick={() => handleNavOptionClick("My Work")}
            >
              <GiCrossedBones className="cancel-icon" />
            </div>
            <ViewProject projectIndex={projectIndex} />
          </>
        )}
      </>
    );
  };

  const ProjectsComp = () => {
    return (
      <div
        className="projects-container"
        style={{
          paddingBottom: "50px",
        }}
      >
        <div className="projects-container-heading">My Work</div>
        <div className="projects">
          {/* <div className="project-card" onClick={() => handleProjectClick(1)}> */}
          <Link to="./work/1" className="project-card">
            <div className="project-card-label">WEB</div>
            <div className="project-card-title">Document Portal</div>
            <div className="project-card-on-line-description">
              A web application streamlines document requests, payments, and
              status tracking for students.
            </div>
            <div className="project-card-image">
              {!imagesLoaded ? (
                <div
                  className="skeleton"
                  style={{
                    height: 200,
                    width: "100%",
                    borderRadius: "10px",
                    backgroundColor: "#f0f0f0",
                  }}
                ></div>
              ) : (
                <img src={PrjImg1} alt="project1" />
              )}
            </div>
          </Link>
          {/* <div className="project-card" onClick={() => handleProjectClick(2)}> */}
          <Link className="project-card" to="./work/2">
            <div className="project-card-label">MOBILE</div>
            <div className="project-card-title">Academic Management</div>
            <div className="project-card-on-line-description">
              Developed a mobile app using React Native, enabling students to
              manage academics activities.
            </div>
            <div className="project-card-image">
              {!imagesLoaded ? (
                <div
                  className="skeleton"
                  style={{
                    height: 200,
                    width: "100%",
                    borderRadius: "10px",
                    backgroundColor: "#f0f0f0",
                  }}
                ></div>
              ) : (
                <img src={PrjImg2} alt="project2" />
              )}
            </div>
          </Link>
          {/* <div className="project-card" onClick={() => handleProjectClick(3)}> */}
          <Link to="./work/3" className="project-card">
            <div className="project-card-label">IoT • WEB</div>
            <div className="project-card-title">Enviro-Track System</div>
            <div className="project-card-on-line-description">
              An IoT system using ESP32 monitors and stores temperature and
              humidity data for analysis.
            </div>
            <div className="project-card-image">
              {!imagesLoaded ? (
                <div
                  className="skeleton"
                  style={{
                    height: 200,
                    width: "100%",
                    borderRadius: "10px",
                    backgroundColor: "#f0f0f0",
                  }}
                ></div>
              ) : (
                <img src={PrjImg3} alt="project3" />
              )}
            </div>
          </Link>
          <Link to="./work/4" className="project-card">
            <div className="project-card-label">CSS</div>
            <div className="project-card-title">RetroStyle Radio</div>
            <div className="project-card-on-line-description">
              A visually interactive digital radio interface built using pure
              HTML and CSS.
            </div>
            <div className="project-card-image">
              {!imagesLoaded ? (
                <div
                  className="skeleton"
                  style={{
                    height: 200,
                    width: "100%",
                    borderRadius: "10px",
                    backgroundColor: "#f0f0f0",
                  }}
                ></div>
              ) : (
                <img src={PrjImg4} alt="project4" />
              )}
            </div>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/work" element={<ViewProject projectIndex={1} />} />
          <Route path="/work/1" element={<ViewProject projectIndex={1} />} />
          <Route path="/work/2" element={<ViewProject projectIndex={2} />} />
          <Route path="/work/3" element={<ViewProject projectIndex={3} />} />
          <Route path="/work/4" element={<ViewProject projectIndex={4} />} />
          <Route path="/about" element={<AboutComp />} />
          <Route path="/contact" element={<ContactComp />} />
          <Route path="/karan_padhiyar" element={<MainContainer />} />
          <Route
            path="/karan_padhiyar/work"
            element={<ViewProject projectIndex={0} />}
          />
          <Route
            path="/karan_padhiyar/work/1"
            element={<ViewProject projectIndex={1} />}
          />
          <Route
            path="/karan_padhiyar/work/2"
            element={<ViewProject projectIndex={2} />}
          />
          <Route
            path="/karan_padhiyar/work/3"
            element={<ViewProject projectIndex={3} />}
          />
          <Route
            path="/karan_padhiyar/work/4"
            element={<ViewProject projectIndex={4} />}
          />
          <Route path="/karan_padhiyar/about" element={<AboutComp />} />
          <Route path="/karan_padhiyar/contact" element={<ContactComp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
