import { format, parseISO } from 'date-fns';
import React from 'react';

const SingleBlog = ({blog}) => {
    const {title,image,description,category,created}=blog
    return (
        
            <section className="w-full md:w-2/3 flex flex-col items-center px-3">

<article className="flex flex-col shadow my-4">
    <a href="/" className="hover:opacity-75">
        <img src={image} alt=''/>
    </a>
    <div className="bg-white flex flex-col justify-start p-6">
        <a href="/" className="text-blue-700 text-sm font-bold uppercase pb-4">{category}</a>
        <a href="/" className="text-3xl font-bold hover:text-gray-700 pb-4">{title}</a>
        <p href="/" className="text-sm pb-8">
            By <a href="/" className="font-semibold hover:text-gray-800">Retro Blog</a>, Published on {format(parseISO(created), 'MMMM do, uuu')}
        </p>
        <h1 className="text-2xl font-bold pb-3">Description</h1>
        <p className="pb-3">{description}</p>
    </div>
</article>

            <div className="w-full flex flex-col text-center md:text-left md:flex-row shadow bg-white mt-10 mb-10 p-6">
                <div className="w-full md:w-1/5 flex justify-center md:justify-start pb-4">
                    <img src="https://source.unsplash.com/collection/1346951/150x150?sig=1" className="rounded-full shadow h-32 w-32" alt=''/>
                </div>
                <div className="flex-1 flex flex-col justify-center md:justify-start">
                    <p className="font-semibold text-2xl">Retro Blog</p>
                    <p className="pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel neque non libero suscipit suscipit eu eu urna.</p>
                    <div className="flex items-center justify-center md:justify-start text-2xl no-underline text-blue-800 pt-4">
                        <a className="" href="/">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a className="pl-4" href="/">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a className="pl-4" href="/">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className="pl-4" href="/">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
            </section>
    );
};

export default SingleBlog;