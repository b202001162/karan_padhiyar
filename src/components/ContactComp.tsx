import React, { useEffect } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./FooterComp.tsx";
import { Link } from "react-router-dom";

const ContactComp = () => {
  useEffect(() => {
    // title of page
    document.title = "Karan Padhiyar • Contact";
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
          <Link
            to="/karan_padhiyar"
            className="navbar-option project-option"
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
          <li
            className="navbar-option contact-option active-navbar-option"
            // onClick={() => handleNavOptionClick("Contact")}
          >
            Contact
          </li>
        </div>
      </nav>
    );
  };

  const handleSubmit = async (e) => {
    // for emailJS

    // check if all the fields are filled
    if (
      e.target.name.value === "" ||
      e.target.email.value === "" ||
      e.target.message.value === ""
    ) {
      alert("Please fill all the fields!");
    } else {
      // setSendingMessage(true);
      e.preventDefault();

      const serviceId = "service_emailjs12345";
      const templateId = "template_emailjs12345";
      const publicKey = "l75_7lmYsnTUVwgOv";

      const tamplateParams = {
        form_name: e.target.name.value,
        form_email: e.target.email.value,
        to_name: "Karan",
        message: e.target.message.value,
      };

      try {
        emailjs
          .send(serviceId, templateId, tamplateParams, publicKey)
          .then((response) => {
            console.log("SUCCESS!", response.status, response.text);
            alert("Your message has been sent successfully!");
            // clear the form
            e.target.reset();
          })
          .catch((error) => {
            console.log("FAILED...", error);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="contact-container"
        style={{
          paddingTop: "100px",
        }}
      >
        {/* <div className="contact-heading">Contact</div> */}
        <div className="contact">
          <div className="contact-text">
            <div className="contact-para-heading">
              Let’s connect if you’re passionate about innovation, technology,
              and crafting meaningful digital experiences.
            </div>
            <div className="contact-para">
              Whether it’s building seamless applications, designing engaging
              user interfaces, or exploring emerging technologies, I’m always
              excited to collaborate on impactful projects. If you share a
              vision for innovation and creativity, I’d love to hear from you!
            </div>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-form-group">
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
              </div>
            </div>
            <div className="contact-form-group">
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>
            </div>
            <div className="contact-form-group">
              <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={3}></textarea>
              </div>
            </div>
            <div className="contact-form-group">
              <button type="submit">Shoot</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactComp;
