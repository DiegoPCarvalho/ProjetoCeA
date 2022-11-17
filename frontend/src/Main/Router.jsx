import React from "react";
import { Routes, Route } from "react-router-dom";

//componentes
// import App from '../Main/App';
import Home from '../Components/Home/Home';
// import HorarioSala from '../components/pages/HorarioSala';
// import CrudHorario from '../components/pages/CrudHorario';
// import Login from "../components/pages/login";

export default props => (
    <Routes>
        <Route exact path="/Home" element={<Home />} />
        {/* <Route path="/horarioSala" element={<HorarioSala />} /> */}
        {/* <Route path="/cadastroHorario" element={<CrudHorario />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="*" element={<Home />} />
    </Routes>
);
