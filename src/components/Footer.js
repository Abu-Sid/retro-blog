import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full border-t bg-gray-100 pb-12">
        
        <div className="w-full container mx-auto flex flex-col items-center">
            <div className="flex flex-col md:flex-row text-center md:text-left md:justify-between py-6 hover:font-bold">
                <a href="/" className="uppercase px-3 cursor-pointer transition-600 transform ease-in sm:hover:scale-105 hover:z-50 ">About Us</a>
                <a href="/" className="uppercase px-3">Privacy Policy</a>
                <a href="/" className="uppercase px-3">Terms & Conditions</a>
                <a href="/" className="uppercase px-3">Contact Us</a>
            </div>
            <div className="uppercase pb-6">&copy; myblog.com</div>
        </div>
    </footer>
    );
};

export default Footer;