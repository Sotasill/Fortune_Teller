import { useNavigate } from "react-router-dom";
import css from "./ActionButtons.module.css";
import { useContext } from "react";

import { LanguageContext } from "../../context/LanguageContext"; 

const ActionButtons = ({ onRefresh, isUserLoggedIn }) => {
  const navigate = useNavigate();
  const { translate } = useContext(LanguageContext);

  return (
    <div className={css.buttonsWrapper}>
      <button onClick={() => navigate(-1)} className={css.button}>
        {translate("goBack")}
      </button>
      <button onClick={onRefresh} className={css.button}>
        {translate("reload")}
      </button>
      <button disabled={!isUserLoggedIn} className={css.button}>
        {translate("save")}
      </button>
    </div>
  );
};

export default ActionButtons;
