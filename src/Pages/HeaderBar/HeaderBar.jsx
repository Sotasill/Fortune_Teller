import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../../redux/language/languageSlice'; // Импортируем действие для изменения языка

import { NavLink } from "react-router-dom";

import css from './HeaderBar.module.css'

function HeaderBar() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.checked ? 'uk' : 'en'; // Определяем язык по состоянию чекбокса
    dispatch(setLanguage(selectedLanguage)); // Вызываем действие для изменения языка
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
              {t("logo")}
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
          <li className={css.LanguageSwitcher}>
            <label className={css.switch}>
              <input
                type="checkbox"
                onChange={handleLanguageChange}
              />
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