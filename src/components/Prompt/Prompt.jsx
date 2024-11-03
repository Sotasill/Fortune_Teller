import { useState } from "react";
import css from "./Prompt.module.css";

const Prompt = ({ onShuffle }) => {
  const [question, setQuestion] = useState("");

  const handleSubmit = () => {
    if (question.trim()) {
      onShuffle(question);
      setQuestion(""); // Очистка поля ввода после отправки
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className={css.PromptContainer}>
      <h2>Какой у вас вопрос?</h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyPress={handleKeyPress} // Обработчик нажатия клавиш
        placeholder="Введите ваш вопрос"
      />
      <button onClick={handleSubmit}>Перемешать карты</button>
    </div>
  );
};

export default Prompt;
