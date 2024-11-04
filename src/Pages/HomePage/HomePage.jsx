import HeaderBar from "../HeaderBar/HeaderBar"
import { useState, useEffect } from "react"

import LanguageModal from "../../components/LanguageModal/LanduageModal"
import { useLanguage } from "../../context/LanguageContext"




function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const { language, translate} = useLanguage(); 

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    
    if (!language) {
      setIsModalOpen(true);
    }
  }, [language]);

  return (
    <div>
      <HeaderBar />
      <h1>{translate("welcome")}</h1>
      <LanguageModal isOpen={isModalOpen} onRequestClose={handleModalClose} />
      
      
    </div>
  );
}

export default HomePage;
