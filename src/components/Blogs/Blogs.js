import React, { useContext } from 'react';
import { context } from '../../App';
import Blog from '../Blog/Blog';


const Blogs = () => {

    const {blogs, setBlogs} = useContext(context);
    return (
        <div className="px-5 my-10 gap-4 md:w-2/3 sm:grid lg:grid-cols-2  flex flex-wrap justify-center">
            { blogs.map(blog=>< Blog key={blog._id} blog={blog} />)}
        </div>
    );
};

export default Blogs;