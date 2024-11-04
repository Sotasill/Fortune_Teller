import { createContext, useContext, useState } from "react";
import translations from "./translation"; // Импортируйте переводы из отдельного файла

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Значение по умолчанию

  const translate = (key) => {
    return translations[language][key] || key; // Возвращает ключ, если перевод не найден
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
