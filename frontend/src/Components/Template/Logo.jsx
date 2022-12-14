import './Logo.css';
import logo from '../../Assets/Imgs/logoCeA.png'
import React from 'react';

// import { Link } from 'react-router-dom';

export default props => 
    <aside className="logo">
        <a href="/Dashboard" className="logo">
            <img src={logo} alt="logo" />
        </a>
    </aside>
