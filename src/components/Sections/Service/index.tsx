import "./style.scss";
import Desinfection1 from "../../../assets/images/dizinfeksiya-1.png";
import Desinfection2 from "../../../assets/images/dezinyeksiya-2.png";
import Desinfection3 from "../../../assets/images/derazatsiya-3.png";
import ServiceCard from "../../Cards/ServiceCard";
import ServiceImg from "../../../assets/images/service_img.jpeg";
import serviceIcon from "../../../assets/images/3dicon.svg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import i18next from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import ruTranslation from "../../../../public/locales/ru.json";
import uzTranslation from "../../../../public/locales/uz.json";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18next
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      uz: { translation: uzTranslation },
      ru: { translation: ruTranslation },
    },
    fallbackLng: "uz",
    interpolation: { escapeValue: false },
  });

const Service = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  interface Item {
    image: string;
    title: string;
    text: string;
  }
  const data: Item[] = [
    {
      image: Desinfection1,
      title: `${t("serviceTitle1")}`,
      text: `${t("serviceText1")}`,
    },
    {
      image: Desinfection2,
      title: `${t("serviceTitle2")}`,
      text: `${t("serviceText2")}`,
    },
    {
      image: Desinfection3,
      title: `${t("serviceTitle3")}`,
      text: `${t("serviceText3")}`,
    },
  ];

  return (
    <section id="service">
      <div className="service_wrapper">
        <h2 data-aos="fade-right">{t("service")}</h2>
        <p className="service_text" data-aos="flip-left">
          {t("pod")}
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

        <div className="service_end">
          <img
            className="left_img"
            data-aos="zoom-in"
            src={ServiceImg}
            alt="Service image"
          />

          <div className="right_end">
            <div className="right_top">
              <img src={serviceIcon} alt="Service icon" data-aos="zoom-out" />
              <h5 data-aos="fade-left">{t("advCardText")}</h5>
            </div>

            <button data-aos="flip-down">
              <a href="#contact">{t("button")}</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
