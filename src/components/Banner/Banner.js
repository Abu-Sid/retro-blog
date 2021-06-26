import React from 'react';

const Banner = () => {
    return (
        <div>
            <header className="w-full container mx-auto">
        <div className="flex flex-col items-center py-12">
            <a className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl" href="/">
                A Retro Theme Blog
            </a>
            <p className="text-lg text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, tempora. 
            </p>
        </div>
    </header>
        </div>
    );
};

export default Banner;