import React, { useState } from "react";
import DisinfectionLogo from "../../assets/images/disinfectionLogo.png";
import "./style.scss";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
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

const Header = () => {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    i18next.language
  );

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    i18next.changeLanguage(selectedLanguage);
    setSelectedLanguage(selectedLanguage);
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: "right", open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: "right") => (
    <Box
      sx={{width: 320}}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className="w-full text-end px-2">
          <i
            className="bx bx-x text-right text-4xl cursor-pointer"
            onClick={toggleDrawer(anchor, false)}
          ></i>
        </div>

        <div className="d_list">
          <a
            href="#intro"
            onClick={toggleDrawer(anchor, false)}
            className="drawer_link"
          >
            <ListItemButton>{t("about")}</ListItemButton>
          </a>
          <a
            href="#service"
            onClick={toggleDrawer(anchor, false)}
            className="drawer_link"
          >
            <ListItemButton>{t("service")}</ListItemButton>
          </a>
          <a
            href="#faq"
            onClick={toggleDrawer(anchor, false)}
            className="drawer_link"
          >
            <ListItemButton>{t("faq")}</ListItemButton>
          </a>
          <a
            href="#contact"
            onClick={toggleDrawer(anchor, false)}
            className="drawer_link"
          >
            <ListItemButton>{t("contact")}</ListItemButton>
          </a>
        </div>

        <select
          name="language"
          id="lang1"
          onChange={changeLanguage}
          value={selectedLanguage}
        >
          <option value="uz">Uzbekcha</option>
          <option value="ru">Русский</option>
        </select>

        <a href="#contact" className="text-center">
          <button className="auth_btn_d" onClick={toggleDrawer(anchor, false)}>
            {t("button")}
          </button>
        </a>
      </List>
    </Box>
  );
  return (
    <header>
      <div className="container">
        <div className="header_weapper">
          <a href="" className="logo">
            <img
              src={DisinfectionLogo}
              alt="Disinfection logo"
            />
          </a>

          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__list--item">
                <a href="#intro" className="nav__list--item-link">
                  {t("about")}
                </a>
              </li>
              <li className="nav_list-item">
                <a href="#service" className="nav__list--item-link">
                  {t("service")}
                </a>
              </li>
              <li className="nav_list-item">
                <a href="#faq" className="nav__list--item-link">
                  {t("faq")}
                </a>
              </li>
              <li className="nav_list-item">
                <a href="#contact" className="nav__list--item-link">
                  {t("contact")}
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-buttons">
            <select
              name="language"
              id="lang"
              onChange={changeLanguage}
              value={selectedLanguage}
            >
              <option value="uz">Uzbekcha</option>
              <option value="ru">Русский</option>
            </select>

            <button className="auth_btn">
              <a href="#contact">{t("button")}</a>
            </button>

            <button className="header_menu-btn">
              <i
                className="bx bx-menu"
                onClick={toggleDrawer("right", true)}
              ></i>
            </button>
          </div>
          {(["left", "right", "top", "bottom"] as const).map((anchor) => (
            <React.Fragment key={anchor}>
              <Drawer
                anchor={"right"}
                open={state[anchor]}
                onClose={toggleDrawer("right", false)}
              >
                {list("right")}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
