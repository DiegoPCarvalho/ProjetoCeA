import './Home.css';
import React from 'react';



import Logo from '../Components/Template/Logo';
import Nav from '../Components/Template/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Template/Footer';


export default function Home() {
    return(
        <div className='App'>
            <Logo />
            <Nav />
            <Outlet />
            <Footer />
        </div>
    )
}




