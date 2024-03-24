import { useEffect } from "react";
import "./style.scss";
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

  return (
    <section id="advantages">
      <div className="adv_wrapper">
        <h2 className="adv_title" data-aos="zoom-in-right">
          {t("advantage")}
        </h2>

        <div className="adv_card-wrapper">
          <div className="adv_card" data-aos="fade-left">
            <svg
              width="70.000000"
              height="56.000000"
              viewBox="0 0 70 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs>
                <pattern
                  id="pattern_1_220"
                  patternContentUnits="objectBoundingBox"
                  width="1.000000"
                  height="1.000000"
                >
                  <use
                    xlinkHref="#image1_22_0"
                    transform="matrix(0.012195,0,0,0.014763,0,-0.001926)"
                  />
                </pattern>
                <image
                  id="image1_22_0"
                  width="82.000000"
                  height="68.000000"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
              <mask
                id="mask1_22"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="0.000000"
                y="0.000000"
                width="70.000000"
                height="56.000000"
              >
                <rect
                  id="div.tn-atom"
                  width="70.000000"
                  height="56.000000"
                  fill="url(#pattern_1_220)"
                  fillOpacity="1.000000"
                />
              </mask>
              <g mask="url(#mask1_22)">
                <rect
                  id="Rectangle 111001833"
                  x="-13.188416"
                  y="-10.806641"
                  width="97.391304"
                  height="78.596489"
                  fill="#68BC6E"
                  fillOpacity="1.000000"
                />
              </g>
            </svg>
            <div className="adv_card-text">
              <h4>{t("fastservice")}</h4>
              <p>{t("advCardText")}</p>
            </div>
          </div>
          <div className="adv_card" data-aos="fade-left">
            <svg
              width="63.000000"
              height="56.000000"
              viewBox="0 0 63 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs>
                <pattern
                  id="pattern_1_290"
                  patternContentUnits="objectBoundingBox"
                  width="1.000000"
                  height="1.000000"
                >
                  <use
                    xlinkHref="#image1_29_0"
                    transform="matrix(0.013333,0,0,0.014737,0,-0.001053)"
                  />
                </pattern>
                <image
                  id="image1_29_0"
                  width="75.000000"
                  height="68.000000"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
              <mask
                id="mask1_29"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="-0.500000"
                y="0.000000"
                width="63.000000"
                height="56.000000"
              >
                <rect
                  id="div.tn-atom"
                  x="-0.500000"
                  width="63.000000"
                  height="56.000000"
                  fill="url(#pattern_1_290)"
                  fillOpacity="1.000000"
                />
              </mask>
              <g mask="url(#mask1_29)">
                <rect
                  id="Rectangle 111001834"
                  x="-16.500000"
                  y="-10.807007"
                  width="96.000000"
                  height="78.596489"
                  fill="#68BC6E"
                  fillOpacity="1.000000"
                />
              </g>
            </svg>
            <div className="adv_card-text">
              <h4>{t("workers")}</h4>
              <p>{t("advCardText")}</p>
            </div>
          </div>
          <div className="adv_card" data-aos="fade-left">
            <svg
              width="67.000000"
              height="56.000000"
              viewBox="0 0 67 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs>
                <pattern
                  id="pattern_1_360"
                  patternContentUnits="objectBoundingBox"
                  width="1.000000"
                  height="1.000000"
                >
                  <use
                    xlinkHref="#image1_36_0"
                    transform="matrix(0.012511,0,0,0.014706,-0.000439,0)"
                  />
                </pattern>
                <image
                  id="image1_36_0"
                  width="80.000000"
                  height="68.000000"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
              <mask
                id="mask1_36"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="0.000000"
                y="0.000000"
                width="67.000000"
                height="56.000000"
              >
                <rect
                  id="div.tn-atom"
                  width="67.000000"
                  height="56.000000"
                  fill="url(#pattern_1_360)"
                  fillOpacity="1.000000"
                />
              </mask>
              <g mask="url(#mask1_36)">
                <rect
                  id="Rectangle 111001835"
                  x="-14.000000"
                  y="-10.807007"
                  width="96.000000"
                  height="78.596489"
                  fill="#68BC6E"
                  fillOpacity="1.000000"
                />
              </g>
            </svg>
            <div className="adv_card-text">
              <h4>{t("advTime")}</h4>
              <p>{t("advCardText")}</p>
            </div>
          </div>
        </div>

        <div className="clean_h">
          <div className="mask"></div>
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
