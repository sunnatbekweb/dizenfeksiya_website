import React, { useState } from "react";
import "./style.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import i18next from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import ruTranslation from "../../../../public/locales/ru.json";
import uzTranslation from "../../../../public/locales/uz.json";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { sendData } from "../../../api/telegram";
import { ToastContainer, toast } from "react-toastify";

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

const Contact = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    if (name.length == 0) {
      toast.error(`${t("msgName")}`);
    } else if (phoneNumber.length == 0) {
      toast.error(`${t("msgNumber")}`);
    } else {
      try {
        const message = `Name: ${name}, Phone Number ${phoneNumber}`;
        toast.success(`${t("msgSuccess")}`);
        sendData(message);
        setName("");
        setPhoneNumber("");
      } catch (error) {
        console.error(`${t("msgError")}`, error);
      }
    }
  };

  return (
    <section id="contact">
      <div className="contact_wrapper">
        <div className="form" data-aos="fade-right">
          <h5>{t("data")}</h5>

          <form action="#" onSubmit={handleSubmit}>
            <input
              className="text_inp"
              type="text"
              value={name}
              placeholder={t("name")}
              onChange={handleName}
            />
            <input
              className="text_inp"
              type="tel"
              value={phoneNumber}
              placeholder="+998 XX XXX XX XX"
              onChange={handlePhoneNumber}
            />

            <button>{t("write")}</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
