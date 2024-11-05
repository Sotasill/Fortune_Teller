import { createContext, useContext, useState} from "react";
import translations from "./translation"; // Импортируйте переводы из отдельного файла

const LanguageContext = createContext();

// Компонент провайдера
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  const translate = (key) => {
    return translations[language][key] || key; // Возвращает ключ, если перевод не найден
  };

  const setLangauge = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage); // Сохраняем выбранный язык в localStorage
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: setLangauge, translate }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// Экспортируем контекст
export const useLanguage = () => useContext(LanguageContext);
export { LanguageContext };
