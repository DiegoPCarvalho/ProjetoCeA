import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default props => 
    <aside className="menu-area">
       <nav className="menu">
            <Link to="/Dashboard">
                <i className='fa fa-bar-chart fa-solid'></i> Dashboard
            </Link>
            <div>
                Contrato
            </div>
            <div>
                Atendimento on-site
            </div>
            <div>
                Manutenção Corretiva
            </div>
            
       </nav>
    </aside>
