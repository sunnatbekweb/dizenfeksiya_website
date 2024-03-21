import React, { useEffect } from "react";
import "./style.scss";
import AOS from "aos";
import "aos/dist/aos.css";

interface CardProps {
  image: string;
  title: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ image, title, text }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="adv_card" data-aos="fade-left">
      <img src={image} alt="Card icon" />
      <div className="adv_card-text">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
