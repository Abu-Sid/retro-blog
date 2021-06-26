import React from 'react';
import { useForm } from "react-hook-form";

const AddAdmin = () => {
    const { register, handleSubmit,reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        
          const url = `http://localhost:5000/addAdmin`;
          fetch(url, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(data=>{
            alert("Admin Added Successfully")})
            reset()
    }
    return (
        <div className="flex flex-wrap justify-center w-full md:w-2/3 my-6 pr-0 lg:pr-2">
      
      <form class="p-10 bg-black-200 rounded shadow-xl" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-xl pb-6 flex items-center justify-center">Add New Admin</h1>
        <label className="mt-2 block text-sm text-gray-600">Email</label>
        <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name="email"  {...register("email")} />
        <label className="mt-2 block text-sm text-gray-600">Password</label>
        <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name="password" type='password' {...register("password")} />
        
        <input className="mt-6 px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit" />
      </form>
    </div>
    );
};

export default AddAdmin;