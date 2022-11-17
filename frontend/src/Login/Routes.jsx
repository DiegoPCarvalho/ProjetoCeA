import React from "react";
import { Routes, Route } from "react-router-dom";

//componentes
import Home from '../Main/App';
import Fundo from  '../Components/TemplateLogin/Fundo';

export default props => (
    <Routes>
        <Route exact path="/" element={<Fundo />} />
        <Route exact path="/Home" element={<Home />} />
        <Route path="*" element={<Fundo />} />
    </Routes>
);
