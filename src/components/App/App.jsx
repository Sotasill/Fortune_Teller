import { Route, Routes } from "react-router-dom";


import HomePage from "../../Pages/HomePage/HomePage";
import About from "../../Pages/About/About";
import Login from "../../Pages/LoginPage/LoginPage";
import TarotFortuneTeller from "../../Pages/TarotFortuneTellerPage/TarotFortuneTeller";




const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tarot-fortune-teller" element={<TarotFortuneTeller/>}/>
      </Routes>
    </>
  );
};

export default App;
