import React from "react";

const FooterComp = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-text">Developed by Karan Padhiyar</div>
        <div className="footer-social">
          Links
          <ul>
            <li>
              <a
                href="https://linkedin.com/in/karanpadhiyar"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/b202001162"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://figma.com/@karanpadhiyar"
                target="_blank"
                rel="noreferrer"
              >
                Figma
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterComp;
