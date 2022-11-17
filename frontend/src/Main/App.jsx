import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

// import {BrowserRouter} from 'react-router-dom';

import Logo from '../Components/Template/Logo';
import Nav from '../Components/Template/Nav';
// import Routes from './Router';
import Home from '../Components/Home/Home';
import Footer from '../Components/Template/Footer';
import React from 'react';

export default props => 
<React.Fragment>
    <div className='App'>
        <Logo />
        <Nav />
        <Home />
        <Footer />
    </div>
</React.Fragment>