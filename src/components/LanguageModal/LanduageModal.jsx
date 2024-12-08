import Modal from "react-modal";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setLanguage } from '../../redux/language/languageSlice'; // Импортируем действие для изменения языка

Modal.setAppElement("#root");

const LanguageModal = ({ isOpen, onRequestClose }) => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    onRequestClose();
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
            checked={i18n.language === "en"}
            onChange={() => dispatch(setLanguage("en"))}
          />
          English
        </label>
        <label>
          <input
            type="radio"
            value="uk"
            checked={i18n.language === "uk"}
            onChange={() => dispatch(setLanguage("uk"))}
          />
          Українська
        </label>
        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
};

export default LanguageModal;
