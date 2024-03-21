// import React from 'react'
import { useEffect } from "react";
import Vector from "../../assets/images/Vector-black.png";
import "./style.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <footer>
      <div className="container">
        <div className="f-top">
          <h2 data-aos="fade-right">Dizenfeksiya</h2>

          <div className="top-right" data-aos="zoom-in-left">
            <div className="location">
              <i className="bx bx-location-plus"></i>
              <p>Toshkent shahri Yashnabod tumani</p>
              <img src={Vector} alt="Arrow icon" />
            </div>
            <div className="phone">
              <i className="bx bx-phone"></i>
              <p>+998 94 099 3434</p>
              <img src={Vector} alt="Arrow icon" />
            </div>
          </div>
        </div>
        <div className="social">
          <a href="">
            <span>Facebook</span>
            <img src={Vector} alt="Arrow icon" />
          </a>
          <a href="">
            <span>Instagram</span>
            <img src={Vector} alt="Arrow icon" />
          </a>
          <a href="">
            <span>Telegram</span>
            <img src={Vector} alt="Arrow icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
