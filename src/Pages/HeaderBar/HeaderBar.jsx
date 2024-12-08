import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setLanguage } from "../../redux/language/languageSlice";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import css from "./HeaderBar.module.css";

function HeaderBar() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  // Состояния для hover для каждой социальной кнопки
  const [hoveredItems, setHoveredItems] = useState({
    facebook: false,
    instagram: false,
    twitter: false,
  });

  // Обработка изменения языка
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.checked ? "uk" : "en";
    dispatch(setLanguage(selectedLanguage));
  };

  // Функции для управления hover
  const handleMouseOver = (key) => {
    setHoveredItems((prev) => ({ ...prev, [key]: true }));
  };

  const handleMouseOut = (key) => {
    setHoveredItems((prev) => ({ ...prev, [key]: false }));
  };

  return (
    <div className={css.HeaderWrapper}>
      <nav className={css.NavWrapper}>
        {/* Основные ссылки */}
        <ul className={css.NavAbout}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? css.active : "")}
            >
              <img src="/public/logo.png" alt="" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? css.active : "")}
            >
              {t("about")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? css.active : "")}
            >
              {t("login")}
            </NavLink>
          </li>
        </ul>

        {/* Социальные кнопки */}
        <ul className={css.NavAboutSocial}>
          {/* Facebook */}
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={css.link}
              onMouseEnter={() => handleMouseOver("facebook")}
              onMouseLeave={() => handleMouseOut("facebook")}
            >
              {!hoveredItems.facebook ? (
                <svg className={css.SvgIcon} width={24}>
                  <use href="src/assets/images/symbol-defs.svg#icon-FB"></use>
                </svg>
              ) : (
                <img
                  src="/src/assets/images/Taro/Property1=v1_hover.png"
                  alt="Facebook Hover"
                  className={css.hoverImage}
                />
              )}
            </a>
          </li>

          {/* Instagram */}
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={css.link}
              onMouseEnter={() => handleMouseOver("instagram")}
              onMouseLeave={() => handleMouseOut("instagram")}
            >
              {!hoveredItems.instagram ? (
                <svg className={css.SvgIcon} width={24}>
                  <use href="src/assets/images/symbol-defs.svg#icon-insta"></use>
                </svg>
              ) : (
                <img
                  src="/src/assets/images/Taro/Property1=v2_hover.png"
                  alt="Instagram Hover"
                  className={css.hoverImage}
                />
              )}
            </a>
          </li>

          {/* Twitter */}
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={css.link}
              onMouseEnter={() => handleMouseOver("twitter")}
              onMouseLeave={() => handleMouseOut("twitter")}
            >
              {!hoveredItems.twitter ? (
                <svg className={css.SvgIcon} width={24}>
                  <use href="src/assets/images/symbol-defs.svg#icon-X"></use>
                </svg>
              ) : (
                <img
                  src="/src/assets/images/Taro/Property1=v3_hover.png"
                  alt="Twitter Hover"
                  className={css.hoverImage}
                />
              )}
            </a>
          </li>

          {/* Переключатель языка */}
          <li className={css.LanguageSwitcher}>
            <label className={css.switch}>
              <input type="checkbox" onChange={handleLanguageChange} />
              <span className={`${css.slider} ${css.round}`}></span>
            </label>
            <span>{t("language")}</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderBar;
