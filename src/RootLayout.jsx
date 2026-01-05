import React from 'react';
import Navbar from './Home/Navbar';
import { Outlet } from 'react-router';
import Footer from './Home/Footer';

const RootLayout = () => {
    return (
        <div>
            <div className='container mx-auto'>

            <Navbar></Navbar>
            </div>

        <div>
            <Outlet></Outlet>
        </div>

        <div>
            <Footer></Footer>
        </div>


        </div>
    );
};

export default RootLayout;