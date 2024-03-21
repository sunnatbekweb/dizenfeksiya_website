import React, { useEffect } from "react";
import "./style.scss";
import AOS from "aos";
import "aos/dist/aos.css";

interface CardProps {
  image: string;
  title: string;
  text: string;
}

const ServiceCard: React.FC<CardProps> = ({ image, title, text }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="service_card" data-aos="fade-right">
      <img src={image} alt="Service card image" />
      <div className="service_card-text">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
