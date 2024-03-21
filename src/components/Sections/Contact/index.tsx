// import React from 'react'
import "./style.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="contact">
      <div className="contact_wrapper">
        <div className="form" data-aos="fade-right">
          <h5>Malumotingizni qoldiring</h5>

          <form action="#">
            <input className="text_inp" type="text" placeholder="Ism" />
            <input
              className="text_inp"
              type="tel"
              pattern="^\+998\s\d{2}\s\d{3}\s\d{2}\s\d{2}$"
              placeholder="+998 XX XXX XX XX"
            />

            <button>Yozilish</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
