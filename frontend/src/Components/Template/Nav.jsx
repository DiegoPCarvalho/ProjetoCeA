import './Nav.css';
import React from 'react';
import DropNav from '../Dropdowns/DropNav';
import DropNavSmart from '../Dropdowns/DropNavSmart';

export default props =>
    <aside className="menu-area">
        <nav className='menu'>
            <DropNav />
        </nav>
        <div className='menu2'>
             <DropNavSmart />
        </div>
    </aside>
