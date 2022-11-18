import React from "react";
import { Routes, Route } from "react-router-dom";

//componentes
import Home from '../Components/Home/Home';
import Dashboard from '../Components/Dashboard/dash';


export default props => (
    <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="*" element={<Home />} />
    </Routes>
);
