import HeaderBar from "../HeaderBar/HeaderBar"
import { useState} from "react"
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import css from "./HomePage.module.css"


import LanguageModal from "../../components/LanguageModal/LanduageModal"


import CardSearch from "../../components/CardSearch/CardSearch";
import Footer from "../../components/Footer/Footer";





function HomePage() {
  const { t } = useTranslation();
;
  const currentLanguage = useSelector((state) => state.language.currentLanguage);
  const [isModalOpen, setIsModalOpen] = useState(!currentLanguage);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

 

  return (
    <div>
      <HeaderBar />
      <h1>{t("welcome")}</h1>

      <CardSearch />
      <ul className={css.mainWrapper}>
        <li>
          <a href="">
            <img
              src="/src/assets/images/backgrounds/Taro/Tarot-Fortune.jpg"
              alt=""
            />
          </a>
        </li>
        <li>
          <a href="">
            <img
              src="/src/assets/images/backgrounds/Taro/Random-Card.jpg"
              alt=""
            />
          </a>
        </li>
      </ul>
      <LanguageModal isOpen={isModalOpen} onRequestClose={handleModalClose} />
      <Footer />
    </div>
  );
}

export default HomePage;
