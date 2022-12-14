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
import MpAtendimento from "../Components/Maps/MapaAtendimentoOnSite";
import MpContrato from "../Components/Maps/MapContrato";
import MpAvulso from '../Components/Maps/MapAvulso';
import MpHelpDesk from '../Components/Maps/MpHelpDesk';


//Login
import Login from '../Login/Login';

//Home
import Home from '../Home/Home';


export default props => (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Home />}>
            <Route index element={<DashboardGeral />} />
            <Route path="AtendimentoOnSite" element={<DashAtendimentoOnSite />} />
            <Route path="Contrato" element={<DashboardContrato />} />
            <Route path="Avulso" element={<DashboardManutencaoCorretiva />} />
            <Route path="HelpDesk" element={<DashboardSuporteRemoto />} />
        </Route>
        <Route path="/OrdemServico" element={<Home />}>
            <Route index element={<DashboardGeral />} />
            <Route path="MpAtendimento" element={<MpAtendimento />}/>
            <Route path="AtendimentoOnSite" element={<AtendimentoOnSite/>} />
            <Route path="MpContrato" element={<MpContrato />} />
            <Route path="Contrato" element={<Contrato />} />
            <Route path="MpAvulso" element={<MpAvulso />} />
            <Route path="Avulso" element={<ManutencaoCorretiva/>} />
            <Route path="MpHelpDesk" element={<MpHelpDesk />} />
            <Route path="HelpDesk" element={<SuporteRemoto/>} />
        </Route>
        <Route path="*" element={<Login />} />
    </Routes>
);
