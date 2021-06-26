import React from 'react';
import Banner from '../components/Banner/Banner';
import Categories from '../components/Categories/Categories';
import Navbar from '../components/Navbar/Navbar';

const Header = () => {
    return (
        <>
           <Navbar/>
           <Banner/>
           <Categories/>

        </>
    );
};

export default Header;