import { useEffect, useState, useContext } from "react";
import cardData from "../../tarot-images.json";
import Card from '../Card/Card'
import css from './CardList.module.css'
import { fetchPredictionFromAI } from "../../utils/api";
import { LanguageContext } from "../../context/LanguageContext"; 


const CardList = ({ numberOfCards = 3 }) => {
  const [cards, setCards] = useState([]);
  const [prediction, setPrediction] = useState("");
  const [showModal, setShowModal] = useState(numberOfCards > 1);
  const { translate } = useContext(LanguageContext); // Убедитесь, что вы используете контекст

  const getRandomCards = (allCards, count) => {
    const shuffled = allCards.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    if (numberOfCards === 1) {
      const randomCard = getRandomCards(cardData.cards, 1);
      setCards(randomCard);
      fetchPredictionFromAI(randomCard)
        .then((prediction) => setPrediction(prediction))
        .catch((error) => console.error(error));
    }
  }, [numberOfCards]);

  const handleShuffle = () => {
    const randomCards = getRandomCards(cardData.cards, numberOfCards);
    setCards(randomCards);
    setShowModal(false); // Скрыть модальное окно после перемешивания
    fetchPredictionFromAI(randomCards)
      .then((prediction) => setPrediction(prediction))
      .catch((error) => console.error(error));
  };

  return (
    <div className={css.CardListWrapper}>
      {showModal && (
        <div className={css.Modal}>
          <div className={css.ModalContent}>
            <h2>{translate("shuffleQuestion")}</h2>{" "}
            {/* Используем ключ для перевода */}
            <button onClick={handleShuffle}>
              {translate("shuffle")} {/* Используем ключ для перевода */}
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
            <h2>{translate("prediction")}</h2>{" "}
            {/* Используем ключ для перевода */}
            <p>{prediction}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CardList;