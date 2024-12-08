import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom"; // Импортируем useNavigate
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import HeaderBar from "../HeaderBar/HeaderBar";
import LanguageModal from "../../components/LanguageModal/LanduageModal";
import CardSearch from "../../components/CardSearch/CardSearch";
import Footer from "../../components/Footer/Footer";
import css from "./HomePage.module.css";

function HomePage() {
  const { t } = useTranslation();
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  const [isModalOpen, setIsModalOpen] = useState(!currentLanguage);
  const [foundCard, setFoundCard] = useState(null); // Состояние для найденной карты

  const navigate = useNavigate(); // Хук для навигации

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleCardFound = (card) => {
    setFoundCard(card); // Обновляем найденную карту
  };

  const handleSearchSubmit = (card) => {
    if (card) {
      // Если карта найдена, переходим на страницу "card-meaning"
      navigate("/card-meaning");
    } else {
      // Если карта не найдена, можно показать уведомление или оставить пользователя на той же странице
      alert("Card not found. Please try again.");
    }
  };

  return (
    <div>
      <HeaderBar />
      <h1>{t("welcome")}</h1>

      <CardSearch
        onCardFound={handleCardFound}
        onSearchSubmit={handleSearchSubmit}
      />

      {/* Отображение найденной карты */}
      {foundCard && (
        <div className={css.foundCardWrapper}>
          <h2>{foundCard.name}</h2>
          <img
            src={foundCard.image}
            alt={foundCard.name}
            className={css.cardImage}
          />
          <p>{foundCard.description}</p>
        </div>
      )}

      <ul className={css.mainWrapper}>
        <li>
          <NavLink
            to="/tarot-fortune-teller"
            className={({ isActive }) => (isActive ? css.active : "")}
          >
            <img
              src="/assets/images/backgrounds/Taro/Tarot-Fortune.jpg"
              alt="Tarot Fortune Teller"
            />
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/random-card-prediction"
            className={({ isActive }) => (isActive ? css.active : "")}
          >
            <img
              src="/assets/images/backgrounds/Taro/Random-Card.jpg"
              alt="Tarot Fortune Teller"
            />
          </NavLink>
        </li>
      </ul>

      <LanguageModal isOpen={isModalOpen} onRequestClose={handleModalClose} />
      <Footer />
    </div>
  );
}

export default HomePage;
