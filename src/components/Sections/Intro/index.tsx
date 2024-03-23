import { useEffect } from "react";
import "./style.scss";
import IntroImage from "../../../assets/images/disinfection-services.jpg";
import IntroIcon from "../../../assets/images/intro_image.png";
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

const Intro = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const { t } = useTranslation();

  return (
    <section id="intro">
      <div className="wrapper" data-aos="fade-left">
        <div className="text">
          <div className="top" data-aos="fade-right">
            <h2>{t("introTitle")}</h2>
            <p>{t("advCardText")}</p>
          </div>
          <div className="bottom" data-aos="fade-up-right">
            <button>
              <a href="#contact">{t("button")}</a>
            </button>
            <button>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26 26V2M26 2H2M26 2L2 26"
                  stroke="#1D68F9"
                  strokeWidth="3"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="image" data-aos="fade-left">
          <img className="intro_icon" src={IntroIcon} alt="Intro icon" />
          <img className="intro_image" src={IntroImage} alt="Intro image" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
