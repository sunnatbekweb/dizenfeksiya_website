import React from "react";
import "./style.scss";

interface CardProps {
  image: string;
  title: string;
  text: string;
}

const ServiceCard: React.FC<CardProps> = ({ image, title, text }) => {
  return (
    <div className="service_card">
      <img src={image} alt="Service card image" />
      <div className="service_card-text">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
