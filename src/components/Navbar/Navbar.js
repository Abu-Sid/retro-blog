import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
                <div className="mb-2 sm:mb-0 inner">
                <a href="/" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold">Retro-Blog</a><br />
                <span className="text-xs text-grey-dark">An Old Fashioned Theme</span>
                </div>
                <div className="sm:mb-0 self-center">
                <a href="/" className="text-md no-underline text-black hover:text-blue-700 ml-2 px-1">About Us </a>
                <a href="/" className="text-md no-underline text-grey-darker hover:text-blue-700 ml-2 px-1">Contact</a>
                <a href="/dashboard" className="text-md no-underline text-grey-darker hover:text-blue-700 ml-2 px-1">Dashboard</a>
        
                </div>
            </nav>
        </div>
    );
};

export default Navbar;