import CardList from "../../components/CardList/CardList"
import HeaderBar from "../HeaderBar/HeaderBar"
import ActionButtons from "../../components/ActionButtons/ActionButtons,"
import PageNavigation from "../../components/PageNavigation/PageNavigation"

import { useState } from "react"

function TarotFortuneTeller() {
    const [refreshKey, setRefreshKey] = useState(0);
    const handleRefresh = () => {
    setRefreshKey((prevKey) => prevKey + 1); // Увеличиваем ключ для ререндеринга
    };
    
    const isUserLoggedIn = false;


  return (
    <div>
      <HeaderBar />
      <PageNavigation />
      <CardList key={refreshKey} />
      <ActionButtons
        onRefresh={handleRefresh}
        isUserLoggedIn={isUserLoggedIn}
      />
    </div>
  );
}

export default TarotFortuneTeller
