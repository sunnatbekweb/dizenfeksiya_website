// import React from 'react'
import Vector from "../../assets/images/Vector-black.png";
import "./style.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="f-top">
          <h2>Dizenfeksiya</h2>

          <div className="top-right">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
