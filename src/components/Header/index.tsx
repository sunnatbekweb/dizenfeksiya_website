import "./style.scss";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header_weapper">
          <a href="" className="logo">
            Dizenfeksiya
          </a>

          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__list--item">
                <a href="#" className="nav__list--item-link">
                  Service
                </a>
              </li>
              <li className="nav_list-item">
                <a href="#" className="nav__list--item-link">
                  About
                </a>
              </li>
              <li className="nav_list-item">
                <a href="#" className="nav__list--item-link">
                  Faq
                </a>
              </li>
              <li className="nav_list-item">
                <a href="#" className="nav__list--item-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-buttons">
            <select name="language" id="lang">
              <option value="uz">Uzbekcha</option>
              <option value="ru">Русский</option>
            </select>

            <button className="auth_btn">Bog'lanish</button>

            <button className="header_menu-btn">
              <i className="bx bx-menu"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
