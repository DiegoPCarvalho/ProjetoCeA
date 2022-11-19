import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';
import DropNav from '../Dropdowns/DropNav';
// import DropNavSmart from '../Dropdowns/DropNavSmart'; refatorar

export default props =>
    <aside className="menu-area">
        <nav className="menu my-2">
            <Link to="/Dashboard">
                <i className='fa fa-bar-chart fa-solid'></i> Dashboard
            </Link>
        </nav>
        <nav className='menu2'>
            <DropNav />
        </nav>
        {/* <nav className='menu3'>
            <DropNavSmart />
        </nav>  refatorar */}

    </aside>
