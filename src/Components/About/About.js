import React, { useEffect } from "react";
import "./About.css";

const About = () => {

    React.useEffect(() => {
    window.scrollTo(0, 0);
    }, []);

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src="/team.jpg" alt="Our Team" />
        </div>
        <div className="about-content">
          <h1 className="about-title">About Us</h1>
          <p className="about-description">
            We are a dedicated team of professionals committed to providing the best properties and services in the real estate industry. Our mission is to help you find your dream home by offering expert guidance and the latest market insights.
          </p>
          <p className="about-vision">
            <strong>Vision:</strong> To create lasting relationships with our clients by helping them make informed decisions and find properties that truly fit their needs.
          </p>
          <p className="about-mission">
            <strong>Mission:</strong> Our mission is to lead the market with our passion, integrity, and innovative approach, while ensuring a seamless experience for all our clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
