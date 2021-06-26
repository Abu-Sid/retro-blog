import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddBlog = () => {
    const { register, handleSubmit,reset } = useForm();
  const [imageURL, setIMageURL] = useState(null);
  
  const onSubmit = data => {
    
    const blogData = {
      title:data.title,
      category:data.category,
      description: data.description,
      created:new Date().toISOString(),
      image: imageURL
    };
    console.log(blogData);
    const url = `http://localhost:5000/addBlog`;
    fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(blogData)
    })
    .then(res => res.json())
    .then(data=>{
      alert("Data Added Successfully")})
      reset()
  };

  const handleImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '0ebf60e54ff9b3704a6d9cb7fb796b92');
    imageData.append('image', event.target.files[0]);
    
    axios.post('https://api.imgbb.com/1/upload', 
    imageData)
    .then(function (response) {
      setIMageURL(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  return (
    <>
    <div className="flex flex-wrap justify-center w-full md:w-2/3 my-6 pr-0 lg:pr-2">
      
      <form class="p-10 bg-black-200 rounded shadow-xl" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-xl pb-6 flex items-center justify-center">Add New Blog</h1>
        <label className="mt-2 block text-sm text-black-600">Upload Image</label>
        <input className="w-full px-5 py-1 text-gray-700 bg-gray-900 rounded" name="image" type="file" onChange={handleImageUpload} />
        <label className="mt-2 block text-sm text-gray-600">Title</label>
        <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name="title"  {...register("title")} />
        <label className="mt-2 block text-sm text-gray-600">Category</label>
        <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name="category"  {...register("category")} />
        <label className="mt-2 block text-sm text-gray-600">Description</label>
        <textarea class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="description" name="description" rows="6" required="" placeholder="Your description.." aria-label="Email" {...register("description")}></textarea>
        
        <input className="mt-6 px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit" />
      </form>
    </div>
    </>
  );
};

export default AddBlog;