import HeaderBar from "../HeaderBar/HeaderBar"
import { useState} from "react"
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';


import LanguageModal from "../../components/LanguageModal/LanduageModal"

import PageNavigation from "../../components/PageNavigation/PageNavigation"
import Footer from "../../components/Footer/Footer";





function HomePage() {
  const { t } = useTranslation();
;
  const currentLanguage = useSelector((state) => state.language.currentLanguage);
  const [isModalOpen, setIsModalOpen] = useState(!currentLanguage);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

 

  return (
    <div>
      <HeaderBar />
      <h1>{t("welcome")}</h1>
      <PageNavigation />
      
      <LanguageModal isOpen={isModalOpen} onRequestClose={handleModalClose} />
      <Footer/>
    </div>
  );
}

export default HomePage;
