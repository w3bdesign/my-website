import React from "react";
import "./ContactCard.scss";

const ContactCard = () => {
  return (
    <div id="Contact" className="contact-container">
      <div className="contact-card">
        <div className="left-panel">
          <h3>Let's connect</h3>
          <div>
            <span className="fa-stack fa-lg">
              <i className="fa fa-square fa-stack-2x"></i>
              <i className="fab fa-linkedin fa-stack-1x"></i>
            </span>
            <p>https://www.linkedin.com/in/joangerard/</p>
          </div>
          <div>
            <span className="fa-stack fa-lg">
              <i className="fa fa-square fa-stack-2x"></i>
              <i className="fab fa-github fa-stack-1x"></i>
            </span>
            <p>https://github.com/joan-gerard</p>
          </div>
        </div>

        <div className="right-panel">
          <h3>Contact me</h3>
          <div>
            <span className="fa-stack fa-lg">
              <i className="fa fa-square fa-stack-2x"></i>
              <i className="fa fa-envelope-open fa-stack-1x"></i>
            </span>
            <p>joan.gerard@outlook.com</p>
          </div>
          <div>
            <span className="fa-stack fa-lg">
              <i className="fa fa-square fa-stack-2x"></i>
              <i className="fa fa-map-pin fa-stack-1x"></i>
            </span>
            <p>Stockholm, Sweden</p>
          </div>
          <div>
            <span className="fa-stack fa-lg">
              <i className="fa fa-square fa-stack-2x"></i>
              <i className="fa fa-phone fa-stack-1x"></i>
            </span>
            <p>+46 72-444 6326</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
