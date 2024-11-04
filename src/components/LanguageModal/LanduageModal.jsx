
import Modal from "react-modal";
import { useLanguage } from "../../context/LanguageContext";

Modal.setAppElement("#root");

const LanguageModal = ({ isOpen, onRequestClose }) => {
  const { language, setLanguage } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    onRequestClose(); // Закрыть модальное окно
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Select Language"
    >
      <h2>Select Language</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            value="en"
            checked={language === "en"}
            onChange={() => setLanguage("en")} // Установить язык на английский
          />
          English
        </label>
        <label>
          <input
            type="radio"
            value="uk"
            checked={language === "uk"}
            onChange={() => setLanguage("uk")} // Установить язык на украинский
          />
          Українська
        </label>
        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
};

export default LanguageModal;
