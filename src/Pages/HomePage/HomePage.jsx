import HeaderBar from "../HeaderBar/HeaderBar"
import { useState, useEffect } from "react"

import LanguageModal from "../../components/LanguageModal/LanduageModal"
import { useLanguage } from "../../context/LanguageContext"

import PageNavigation from "../../components/PageNavigation/PageNavigation"




function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const { translate } = useLanguage(); // Получаем только translate из контекста

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

   useEffect(() => {
     // Проверяем, если язык не выбран, открываем модальное окно
     if (!localStorage.getItem("language")) {
       setIsModalOpen(true);
     } else {
       setIsModalOpen(false); // Если язык есть, модальное окно не открываем
     }
   }, []);

  return (
    <div>
      <HeaderBar />
      <h1>{translate("welcome")}</h1> {/* Используем translate для заголовка */}
      <PageNavigation/>
      <LanguageModal isOpen={isModalOpen} onRequestClose={handleModalClose} />
    </div>
  );
}

export default HomePage;
