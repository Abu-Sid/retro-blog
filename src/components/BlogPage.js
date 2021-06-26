import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { context } from '../App';
import Sidebar from '../components/Sidebar/Sidebar';
import SingleBlog from '../components/SingleBlog/SingleBlog';

const BlogPage = () => {
    const {blogs, setBlogs} = useContext(context);
    const {id}=useParams()
    console.log(blogs);
    const blog= blogs?.find(product=>product._id==id)
    console.log('key',blog);
    return (
        <div className="container mx-auto flex flex-wrap py-6">
            <SingleBlog blog={blog}/>
            <Sidebar/>
            
        </div>
    );
};

export default BlogPage;