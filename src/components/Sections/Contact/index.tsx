// import React from 'react'
import "./style.scss";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact_wrapper">
        <div className="form">
          <h5>Malumotingizni qoldiring</h5>

          <form action="#">
            <input className="text_inp" type="text" placeholder="Ism" />
            <input
              className="text_inp"
              type="tel"
              pattern="^\+998\s\d{2}\s\d{3}\s\d{2}\s\d{2}$"
              placeholder="+998 XX XXX XX XX"
            />

            <div className="flex items-center gap-x-2">
              <input type="checkbox" />
              <label>Maxfiylik siyosati</label>
            </div>

            <button>Yozilish</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
