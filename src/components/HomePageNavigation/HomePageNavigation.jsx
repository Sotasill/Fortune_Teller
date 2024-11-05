import { NavLink } from "react-router-dom";
import css from "./HomePageNavigation.module.css";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const PageNavigation = () => {
  const { translate } = useContext(LanguageContext);
  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <NavLink
            to="/tarot-fortune-teller"
            className={({ isActive }) => (isActive ? css.active : "")}
          >
            <img className={css.navImage} src="/public/cards/c02.jpg" alt="" />
            {translate("fortunTeller")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/random-card-prediction"
            className={({ isActive }) => (isActive ? css.active : "")}
          >
            <img className={css.navImage} src="/public/cards/c02.jpg" alt="" />
            {translate("randomCard")}
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/card-meaning"
            className={({ isActive }) => (isActive ? css.active : "")}
          >
            <img className={css.navImage} src="/public/cards/c02.jpg" alt="" />
            {translate("cardMeaning")}
          </NavLink >
        </li>
      </ul>
    </nav>
  );
};

export default PageNavigation;
