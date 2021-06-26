import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Blogs from './Blogs/Blogs';


const Homepage = () => {
    return (
        <div className="container mx-auto flex flex-wrap py-4 ">
            <Blogs/>
            <Sidebar/>
        </div>
    );
};

export default Homepage;