import react from "react";
import Acceuil from "./Components/Acceuil";
import NosFormation from "./Components/NosFormation";
import ActualitesEtEvenements from "./Components/ActualitesEtEvenements";
import Galerie from "./Components/Galerie";
import Reviews from "./Components/Reviews";
import Contact from "./Components/Contact";
import Menu from "./Components/Menu";
import ErrorPages from "./Components/ErrorPages";
import Login from "./Container/Login";
import Register from "./Container/Register";
import ResetPwd1 from "./Container/RsesetPwd/ResetPwd1";
import ResetPwd2 from "./Container/RsesetPwd/ResetPwd2";
import ResetPwd3 from "./Container/RsesetPwd/ResetPwd3";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Acceuil />} />
        <Route path="/NosFormation" element={<NosFormation />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route
          path="/Actualitesetevenement"
          element={<ActualitesEtEvenements />}
        />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<ErrorPages />} />
        <Route path="/log" element={<Login />} />
        <Route path="reg" element={<Register />} />
        <Route path="/RESETPWD" element={<ResetPwd1 />} />
        <Route path="/reg-form" element={<Login />} />
        <Route path="/next-reset-pwd" element={<ResetPwd2 />} />
        <Route path="//reset-pwd3" element={<ResetPwd3 />} />
        <Route path="/next-reset-pwd-succés" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
