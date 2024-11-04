
import { NavLink } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

import css from './HeaderBar.module.css'

function HeaderBar() {
  const { translate, language, setLanguage } = useLanguage();
  const handleLanguageChange = (e) => {
    const newLanguage = e.target.checked ? "uk" : "en"; // Переключаем язык
    setLanguage(newLanguage);
  };


  return (
    <div className={css.HeaderWrapper}>
      <nav className={css.NavWrapper}>
        <ul className={css.NavAbout}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? css.active : "")}
            >
              {translate("logo")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? css.active : "")}
            >
              {translate("about")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? css.active : "")}
            >
              {translate("login")}
            </NavLink>
          </li>
        </ul>
        <ul className={css.NavAboutSocial}>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={css.link}
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={css.link}
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={css.link}
            >
              X
            </a>
          </li>
        </ul>

        <div className={css.LanguageSwitcher}>
          <label className={css.switch}>
            <input
              type="checkbox"
              checked={language === "uk"}
              onChange={handleLanguageChange}
            />
            <span className={`${css.slider} ${css.round}`}></span>
          </label>
          <span>{language === "en" ? "ENG" : "UKR"}</span>
        </div>
      </nav>
    </div>
  );
}

export default HeaderBar;