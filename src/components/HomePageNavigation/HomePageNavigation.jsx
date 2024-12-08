import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import css from "./HomePageNavigation.module.css";

const HomePageNavigation = () => {
  const { t } = useTranslation();

  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li>
          <NavLink
            to="/tarot-fortune-teller"
            className={({ isActive }) => (isActive ? css.active : "")}
          >
            {t("fortunTeller")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/random-card-prediction"
            className={({ isActive }) => (isActive ? css.active : "")}
          >
            {t("randomCard")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/card-meaning"
            className={({ isActive }) => (isActive ? css.active : "")}
          >
            {t("cardMeaning")}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HomePageNavigation;
