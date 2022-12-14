import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import React from 'react';
import Routes from './Router';


export default function App() {
    return(
        <div className='app'>
            <Routes />
        </div>
    )
}