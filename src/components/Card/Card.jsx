
import css from './Card.module.css'

const Card = ({ card }) => {
  
  const imgSrc = card.img; 

  return (
    <div className={css.card}>
      <h2>{card.name}</h2>
      <img src={imgSrc} alt={card.name} />
      <p>{card.fortune_telling.join(", ")}</p>
      <p>Keywords: {card.keywords.join(", ")}</p>
    </div>
  );
};

export default Card;
