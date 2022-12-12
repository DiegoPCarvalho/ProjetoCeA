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

//componente de maps
import Maps from '../Components/Maps/Mapa';
import MpAtendimento from "../Components/Maps/MapaAtendimentoOnSite";
import MpContrato from "../Components/Maps/MapContrato";
import MpAvulso from '../Components/Maps/MapAvulso';
import MpHelpDesk from '../Components/Maps/MpHelpDesk';

//login
import Login from '../Login/Login';

import App from './App';


export default props => (
    <Routes>
        <Route path="/DashboardGeral" element={<DashboardGeral />} />
        <Route path="/DashboardAtendimentoOnSite" element={<DashAtendimentoOnSite />} />
        <Route path="/DashboardContrato" element={<DashboardContrato />} />
        <Route path="/DashboardAvulso" element={<DashboardManutencaoCorretiva />} />
        <Route path="/DashboardHelpDesk" element={<DashboardSuporteRemoto />} />
        <Route path="/AtendimentoOnSite" element={<AtendimentoOnSite/>} />
        <Route path="/Contrato" element={<Contrato/>} />
        <Route path="/Avulso" element={<ManutencaoCorretiva/>} />
        <Route path="/HelpDesk" element={<SuporteRemoto/>} />
        <Route path="*" element={<DashboardGeral />} />
        {/* Mapas */}
        <Route path="/MpAtendimento" element={<MpAtendimento />} />
        <Route path="/MpContrato" element={<MpContrato />} />
        <Route path="/MpAvulso" element={<MpAvulso />} />
        <Route path="/MpHelpDesk" element={<MpHelpDesk />} />
        <Route path="/login" element={<Login />} />
    </Routes>
);
