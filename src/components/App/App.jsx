import { Route, Routes } from "react-router-dom";


import HomePage from "../../Pages/HomePage/HomePage";
import About from "../../Pages/About/About";
import Login from "../../Pages/LoginPage/LoginPage";
import TarotFortuneTeller from "../../Pages/TarotFortuneTellerPage/TarotFortuneTeller";
import RandomCard from "../../Pages/RandomCard/RandomCard"
import CardMeaning from "../../Pages/CardMeaning/CardMeaning";




const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signIn" element={<signIn />} />
        <Route path="/tarot-fortune-teller" element={<TarotFortuneTeller />} />
        <Route
          path="/random-card-prediction"
          element={<RandomCard />}
        />
        <Route path="/card-meaning" element={<CardMeaning/>}/>
      </Routes>
    </>
  );
};

export default App;
