// import React from 'react'
import "./style.scss";
import Desinfection1 from "../../../assets/images/dizinfeksiya-1.png";
import Desinfection2 from "../../../assets/images/dezinyeksiya-2.png";
import Desinfection3 from "../../../assets/images/derazatsiya-3.png";
import ServiceCard from "../../Cards/ServiceCard";

const Service = () => {
  interface Item {
    image: string;
    title: string;
    text: string;
  }
  const data: Item[] = [
    {
      image: Desinfection1,
      title: "Tezda xizmat ko'rsatish",
      text: "Bizning ko'p yillardan beri o'z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun",
    },
    {
      image: Desinfection2,
      title: "Yetuk mutahasislaimiz",
      text: "Bizning ko'p yillardan beri o'z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun",
    },
    {
      image: Desinfection3,
      title: "Sizga maqul vaqtda",
      text: "Bizning ko'p yillardan beri o'z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun",
    },
  ];

  return (
    <section id="service">
      <div className="service_wrapper">
        <h2>Xizmatlar</h2>
        <p className="service_text">
          Biz sizga samarali va kafolatle yordam taklif etamiz.
        </p>

        <div className="service_card_wrapper">
          {data.map((item: Item, index: number) => (
            <ServiceCard
              image={item.image}
              title={item.title}
              text={item.text}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
