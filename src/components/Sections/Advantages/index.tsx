import { useEffect } from "react";
import "./style.scss";
import Rectangle1 from "../../../assets/images/Rectangle1.svg";
import Rectangle2 from "../../../assets/images/Rectangle2.svg";
import Rectangle3 from "../../../assets/images/Rectangle3.svg";
import Card from "../../Cards/AboutCard";
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

const Advantages = () => {
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
      image: Rectangle1,
      title: `${t("fastservice")}`,
      text: `${t("advCardText")}`,
    },
    {
      image: Rectangle2,
      title: `${t("workers")}`,
      text: `${t("advCardText")}`,
    },
    {
      image: Rectangle3,
      title: `${t("advTime")}`,
      text: `${t("advCardText")}`,
    },
  ];
  return (
    <section id="advantages">
      <div className="adv_wrapper">
        <h2 className="adv_title" data-aos="zoom-in-right">
          {t("advantage")}
        </h2>

        <div className="adv_card-wrapper">
          {data.map((item: Item, index: number) => (
            <Card
              image={item.image}
              title={item.title}
              text={item.text}
              key={index}
            />
          ))}
        </div>

        <div className="clean_h">
          <div className="clean_h-text">
            <h3 data-aos="fade-right">{t("advBanner")}</h3>
            <p data-aos="flip-down">{t("advCardText")}</p>
          </div>
          <button data-aos="flip-up">
            <a href="#contact">{t("button")}</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
