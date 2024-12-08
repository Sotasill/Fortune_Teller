import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import cardData from "../../tarot-images.json";
import Card from '../Card/Card';
import css from './CardList.module.css';
import { fetchPredictionFromAI } from "../../utils/api";

const CardList = ({ numberOfCards = 3 }) => {
  const { t } = useTranslation();
  const [cards, setCards] = useState([]);
  const [prediction, setPrediction] = useState("");
  const [showModal, setShowModal] = useState(numberOfCards > 1);

  const getRandomCards = (allCards, count) => {
    const shuffled = allCards.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    if (numberOfCards === 1) {
      const randomCard = getRandomCards(cardData.cards, 1);
      setCards(randomCard);
      fetchPredictionFromAI(randomCard)
        .then((prediction) => setPrediction(prediction))
        .catch((error) => console.error("Ошибка при получении предсказания:", error));
    }
  }, [numberOfCards]);

  const handleShuffle = () => {
    const randomCards = getRandomCards(cardData.cards, numberOfCards);
    setCards(randomCards);
    setShowModal(false); // Скрыть модальное окно после перемешивания
    fetchPredictionFromAI(randomCards)
      .then((prediction) => setPrediction(prediction))
      .catch((error) => console.error("Ошибка при получении предсказания:", error));
  };

  return (
    <div className={css.CardListWrapper}>
      {showModal && (
        <div className={css.Modal}>
          <div className={css.ModalContent}>
            <h2>{t("shuffleQuestion")}</h2>
            <button onClick={handleShuffle}>
              {t("shuffle")}
            </button>
          </div>
        </div>
      )}
      {!showModal && (
        <>
          <div className={css.CardList}>
            {cards.map((card) => (
              <Card key={card.name} card={card} />
            ))}
          </div>
          <div className="prediction">
            <h2>{t("prediction")}</h2>
            <p>{prediction}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CardList;