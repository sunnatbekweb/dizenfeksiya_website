import { useEffect } from "react";
import DisinfectionLogo from "../../assets/images/disinfectionLogo.png";
import Vector from "../../assets/images/Vector-black.png";
import "./style.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import i18next from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import ruTranslation from "../../../public/locales/ru.json";
import uzTranslation from "../../../public/locales/uz.json";
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

const Footer = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <footer>
      <div className="container">
        <div className="f-top">
          <h2 data-aos="fade-right">
            <img src={DisinfectionLogo} alt="Disinfection logo" />
          </h2>

          <div className="top-right" data-aos="zoom-in-left">
            <a
              href="https://maps.app.goo.gl/UccbMo4NsbSYm5hT8"
              className="location"
              target="_blank"
            >
              <i className="bx bx-location-plus"></i>
              <p>{t("address")}</p>
              <img src={Vector} alt="Arrow icon" />
            </a>
            <a href="tel:+998940993434" className="phone">
              <i className="bx bx-phone"></i>
              <p>+998 94 099 34 34</p>
              <img src={Vector} alt="Arrow icon" />
            </a>
          </div>
        </div>
        <div className="social">
          <a href="https://www.facebook.com/OrkinCanada/" target="_blank">
            <span>Facebook</span>
            <img src={Vector} alt="Arrow icon" />
          </a>
          <a href="https://www.instagram.com/orkincanada/" target="_blank">
            <span>Instagram</span>
            <img src={Vector} alt="Arrow icon" />
          </a>
          <a href="https://twitter.com/orkincanada/" target="_blank">
            <span>Twitter</span>
            <img src={Vector} alt="Arrow icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
