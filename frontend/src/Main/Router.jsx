import React from "react";
import { Routes, Route } from "react-router-dom";

//componentes

//DashBoard
import DashboardGeral from '../Components/Dashboard/DashboardGeral';
import DashAtendimentoOnSite from "../Components/Dashboard/DashboardAtendimento";
import DashboardContrato from "../Components/Dashboard/DashboardContrato";
import DashboardManutencaoCorretiva from "../Components/Dashboard/DashManutencao";
import DashboardSuporteRemoto from '../Components/Dashboard/DashboardSuporte';

//Ordem de Servico
import AtendimentoOnSite from "../Components/OrdemServico/AtendimentoOnSite";
import Contrato from '../Components/OrdemServico/Contrato';
import ManutencaoCorretiva from "../Components/OrdemServico/ManutencaoCorretiva";
import SuporteRemoto from '../Components/OrdemServico/SuporteRemoto';


export default props => (
    <Routes>
        <Route path="/DashboardGeral" element={<DashboardGeral />} />
        <Route path="/DashboardAtendimentoOnSite" element={<DashAtendimentoOnSite />} />
        <Route path="/DashboardContrato" element={<DashboardContrato />} />
        <Route path="/DashboardManutencao" element={<DashboardManutencaoCorretiva />} />
        <Route path="/DashboardSuporte" element={<DashboardSuporteRemoto />} />
        <Route path="/AtendimentoOnSite" element={<AtendimentoOnSite/>} />
        <Route path="/Contrato" element={<Contrato/>} />
        <Route path="/ManutencaoCorretiva" element={<ManutencaoCorretiva/>} />
        <Route path="/SuporteRemoto" element={<SuporteRemoto/>} />
        <Route path="*" element={<DashboardGeral />} />
    </Routes>
);
