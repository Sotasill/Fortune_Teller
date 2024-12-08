import { useState } from "react";
import cardData from "../../tarot-images.json"; // Импорт данных карт
import css from "./CardSearch.module.css"; // Импорт стилей

const CardSearch = ({ onCardFound, onSearchSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  const handleSearch = (e) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы

    if (!searchTerm.trim()) {
      setError("Please enter a search term.");
      onCardFound(null); // Сбрасываем карту, если строка пустая
      return;
    }

    const term = searchTerm.toLowerCase();

    const foundCard = cardData.cards.find((card) => {
      const cardName = card.name?.toLowerCase();
      const cardDescription = card.description?.toLowerCase();
      const cardKeywords =
        card.keywords?.map((keyword) => keyword.toLowerCase()) || [];

      return (
        cardName?.includes(term) ||
        cardDescription?.includes(term) ||
        cardKeywords.some((keyword) => keyword.includes(term))
      );
    });

    if (!foundCard) {
      setError("No card found matching your search.");
    } else {
      setError(""); // Очищаем ошибку, если карта найдена
    }

    onCardFound(foundCard || null); // Передаем найденную карту или null
    onSearchSubmit(foundCard); // Осуществляем переход на страницу "card-meaning"
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setError(""); // Очищаем ошибку при изменении ввода
  };

  return (
    <form onSubmit={handleSearch} className={css.searchWrapper}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search card by name, keywords, or description"
        className={css.searchInput}
      />
      <button type="submit" className={css.searchButton}>
        Search
      </button>

      {/* Отображение ошибки, если карта не найдена */}
      {error && <div className={css.error}>{error}</div>}
    </form>
  );
};

export default CardSearch;
