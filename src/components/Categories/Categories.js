import React from 'react';

const Categories = () => {
    return (
        <div>
            <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
                <a href="/" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Technology</a>
                <a href="/" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Automotive</a>
                <a href="/" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Finance</a>
                <a href="/" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Politics</a>
                <a href="/" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Culture</a>
                <a href="/" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Sports</a>
            </div>
        </div>
    );
};

export default Categories;