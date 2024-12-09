import { useState } from "react";
import cardData from "../../tarot-images.json"; // Импорт данных карт
import css from "./CardSearch.module.css"; // Импорт стилей

const CardSearch = ({ onCardFound, onSearchSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [suggestions, setSuggestions] = useState([]); // Состояние для предложений

  const handleSearch = (e) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы

    if (!searchTerm.trim()) {
      setError("Please enter a search term.");
      onCardFound(null); // Сбрасываем карту, если строка пустая
      return;
    }

    const term = searchTerm.toLowerCase();

    // Находим все карты, соответствующие поисковому запросу
    const foundCards = cardData.cards.filter((card) => {
      const cardName = card.name?.toLowerCase();
      return cardName?.includes(term); // Проверяем только название карты
    });

    if (foundCards.length === 0) {
      setError("No card found matching your search.");
    } else {
      setError(""); // Очищаем ошибку, если карты найдены
    }

    onCardFound(foundCards); // Передаем найденные карты
    onSearchSubmit(foundCards); // Осуществляем переход на страницу "card-meaning"
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setError(""); // Очищаем ошибку при изменении ввода

    // Обновляем предложения на основе ввода
    if (value) {
      const filteredSuggestions = cardData.cards
        .filter((card) => card.name.toLowerCase().includes(value.toLowerCase()))
        .map((card) => card.name); // Получаем только названия карт
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]); // Очищаем предложения, если строка пустая
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion); // Устанавливаем выбранное предложение в строку поиска
    setSuggestions([]); // Очищаем предложения
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

      {/* Отображение предложений */}
      {suggestions.length > 0 && (
        <ul className={css.suggestionsList}>
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}

      {/* Отображение ошибки, если карта не найдена */}
      {error && <div className={css.error}>{error}</div>}
    </form>
  );
};

export default CardSearch;
