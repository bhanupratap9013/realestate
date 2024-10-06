import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo.jpg" alt="" width={120} />

          <span className="secondaryText">
            Our vision is to help you by providing you the best properties
          </span>
        </div>

        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Bangalore, Karnataka</span>

          <div className="flexCenter f-menu">
          <span><Link to="/about"> About Us</Link></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;