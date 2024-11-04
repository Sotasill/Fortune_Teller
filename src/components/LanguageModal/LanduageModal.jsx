
import Modal from "react-modal";
import { useLanguage } from "../../context/LanguageContext";
import { useEffect } from "react";

Modal.setAppElement("#root");

const LanguageModal = ({ isOpen, onRequestClose }) => {
  const { language, setLanguage } = useLanguage();

   const handleSubmit = (e) => {
     e.preventDefault();
     setLanguage(language);
     localStorage.setItem("language", language); // Сохраняем язык в localStorage
     onRequestClose();
   };

  useEffect(() => {
    if (!isOpen) {
      setLanguage("en");
    }
  }, [isOpen]);

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
            onChange={() => setLanguage("en")}
          />
          English
        </label>
        <label>
          <input
            type="radio"
            value="uk"
            checked={language === "uk"}
            onChange={() => setLanguage("uk")}
          />
          Українська
        </label>
        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
};

export default LanguageModal;
