import React from "react";
import "./style.scss";

interface CardProps {
  image: string;
  title: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ image, title, text }) => {
  return (
    <div className="adv_card">
      <img src={image} alt="Card icon" />
      <div className="adv_card-text">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
