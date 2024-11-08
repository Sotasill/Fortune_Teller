import { NavLink } from "react-router-dom";
import css from "./PageNavigation.module.css";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const PageNavigation = () => {

  const { translate } = useContext(LanguageContext);
  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li>
          <NavLink
            to="/tarot-fortune-teller"
            className={({ isActive }) => (isActive ? css.active : "")}
          >
            {translate("fortunTeller")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/random-card-prediction"
            className={({ isActive }) => (isActive ? css.active : "")}
          >
            {translate("randomCard")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/card-meaning"
            className={({ isActive }) => (isActive ? css.active : "")}
          >
            {translate("cardMeaning")}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNavigation;
