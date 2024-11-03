import { useEffect, useState } from "react";
import cardData from "../../tarot-images.json";
import Card from '../Card/Card'
import css from './CardList.module.css'
import { fetchPredictionFromAI } from "../../utils/api";
import Prompt from "../Prompt/Prompt";

const CardList = () => {
  const [cards, setCards] = useState([]);
  const [prediction, setPrediction] = useState("");
  const [showPrompt, setShowPrompt] = useState(true);

  const getRandomCards = (allCards) => {
    const shuffled = allCards.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  const handleShuffle = () => {
    const randomCards = getRandomCards(cardData.cards);
    setCards(randomCards);
    setShowPrompt(false); // Скрыть промпт после перемешивания
    fetchPredictionFromAI(randomCards) // Получите предсказание на основе карт
      .then((prediction) => setPrediction(prediction))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    if (!showPrompt) {
      fetchPredictionFromAI(cards)
        .then((prediction) => setPrediction(prediction))
        .catch((error) => console.error(error));
    }
  }, [showPrompt, cards]);

  return (
    <div className={css.CardListWrapper}>
      {showPrompt ? (
        <Prompt onShuffle={handleShuffle} />
      ) : (
        <>
          <div className={css.CardList}>
            {cards.map((card) => (
              <Card key={card.name} card={card} />
            ))}
          </div>
          <div className="prediction">
            <h2>Ваше предсказание:</h2>
            <p>{prediction}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CardList;