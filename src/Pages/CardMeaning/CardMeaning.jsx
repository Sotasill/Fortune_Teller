import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Для получения данных из navigate
import CardSearch from "../../components/CardSearch/CardSearch";
import Card from "../../components/Card/Card"; // Импортируем компонент карты
import css from "./CardMeaning.module.css";
import HeaderBar from "../HeaderBar/HeaderBar";
import PageNavigation from "../../components/PageNavigation/PageNavigation";
import Footer from "../../components/Footer/Footer";


const CardMeaning = () => {
  const [foundCards, setFoundCards] = useState([]); // Изменено на массив
  const location = useLocation(); // Получение переданных данных через navigate

  useEffect(() => {
    // Проверяем, есть ли переданные карты в состоянии маршрута
    if (location.state?.cards) {
      setFoundCards(location.state.cards);
    }
  }, [location]);

  const handleCardFound = (cards) => {
    setFoundCards(cards); // Обновляем состояние найденных карт
  };

  return (
    <>
      <HeaderBar />
      <PageNavigation />
      <div className={css.cardMeaningWrapper}>
        {/* Компонент поиска */}
        <CardSearch onCardFound={handleCardFound} onSearchSubmit={setFoundCards} />
        {/* Отображение найденных карт */}
        <div className={css.cardDisplayWrapper}>
          {foundCards.length > 0 ? (
            foundCards.map((card) => (
              <div key={card.id} className={css.cardDisplay}>
                <Card card={card} /> {/* Отображаем компонент карты */}
              </div>
            ))
          ) : (
            <p className={css.noCardMessage}>
              No card found. Try searching for one!
            </p>
          )}
        </div>
      </div>
     
      <Footer />
    </>
  );
};

export default CardMeaning;
