import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import React from 'react';

import {BrowserRouter} from 'react-router-dom';

import Logo from '../Components/Template/Logo';
import Nav from '../Components/Template/Nav';
import Routes from './Router';
import Footer from '../Components/Template/Footer';


export default props => 
<BrowserRouter>
    <div className='App'>
        <Logo />
        <Nav />
        <Routes />
        <Footer />
    </div>
</BrowserRouter>