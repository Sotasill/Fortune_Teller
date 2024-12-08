import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Для получения данных из navigate
import CardSearch from "../../components/CardSearch/CardSearch";
import Card from "../../components/Card/Card"; // Импортируем компонент карты
import css from "./CardMeaning.module.css";
import HeaderBar from "../HeaderBar/HeaderBar";
import PageNavigation from "../../components/PageNavigation/PageNavigation";

const CardMeaning = () => {
  const [foundCard, setFoundCard] = useState(null); // Состояние для найденной карты
  const location = useLocation(); // Получение переданных данных через navigate

  useEffect(() => {
    // Проверяем, есть ли переданная карта в состоянии маршрута
    if (location.state?.card) {
      setFoundCard(location.state.card);
    }
  }, [location]);

  const handleCardFound = (card) => {
    setFoundCard(card); // Обновляем состояние найденной карты
  };

  return (
    <>
      <HeaderBar />
      <PageNavigation />
      <div className={css.cardMeaningWrapper}>
        {/* Компонент поиска */}
        <CardSearch onCardFound={handleCardFound} />
        {/* Отображение найденной карты */}
        {foundCard && (
          <div className={css.cardDisplay}>
            <Card card={foundCard} /> {/* Отображаем компонент карты */}
          </div>
        )}
        {/* Если карта не найдена */}
        {!foundCard && (
          <p className={css.noCardMessage}>
            No card found. Try searching for one!
          </p>
        )}
      </div>
    </>
  );
};

export default CardMeaning;
