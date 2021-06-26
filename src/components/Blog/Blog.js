import { format, parseISO } from 'date-fns';
import React from 'react';
import { Link } from "react-router-dom";

const Blog = ({blog}) => {
    console.log("bloggggggg",blog);
    const {_id,title,image,description,category,created}=blog
    return (
            <article className="flex flex-col shadow my-4 cursor-pointer transition-200 transform ease-in sm:hover:scale-105 hover:z-50">
                 <Link to={`/blog/${_id}`}>
                <a href="/" className="hover:opacity-75">
                    <img src={image} alt=''/>
                </a>
                <div className="bg-white flex flex-col justify-start p-6">
                    <p  className="text-blue-700 text-sm font-bold uppercase pb-4">{category}</p>
                    <p  className="text-3xl font-bold hover:text-gray-700 pb-4">{title}</p>
                    <p  className="text-sm pb-3">
                        By <span className="font-semibold hover:text-gray-800">Retro Blog</span>, Published on {format(parseISO(created), 'MMMM do, uuu')}
                    </p>
                    <p  className="line-clamp-10 ... pb-6">{description}</p>
                    <Link href="/" className="uppercase text-blue-700 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></Link>
                </div>
                </Link>
            </article>
    );
};

export default Blog;