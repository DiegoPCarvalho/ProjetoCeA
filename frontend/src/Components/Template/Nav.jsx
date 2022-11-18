import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';
import DropNav from '../Dropdowns/DropNav';

export default props => 
    <aside className="menu-area">
       <nav className="menu">
            <Link to="/Dashboard">
                <i className='fa fa-bar-chart fa-solid'></i> Dashboard
            </Link>
            <DropNav />
       </nav>
    </aside>
