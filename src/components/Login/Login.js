import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import { context } from '../../App';
import firebaseConfig from '../../lib/firebase.config.js';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  

const Login = () => {
    const {loggedUser, setLoggedUser}=useContext(context)

    const { register, handleSubmit, reset } = useForm();
    let history = useHistory();
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/" } };
    const onSubmit = data => {
        console.log(data);

        if (data.email && data.password) {
            firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then((userCredential) => {
                
              var user = userCredential.user;
              const userLoggedIn  = {...data}
              userLoggedIn.isSignedIn = true;
              setLoggedUser(userLoggedIn);
              history.replace(from);
            
            })
            .catch((error) => {
      
              var errorMessage = error.message;
                const userError = {...data};
                userError.isSignedIn = false;
                userError.error = errorMessage;
                setLoggedUser(userError);
      
            });
            
        }
                reset()
    }
    console.log(loggedUser);
    return (
        <div className="flex flex-wrap justify-center w-full  my-6 pr-0 lg:pr-2">
      
      <form class="p-10 bg-black-200 rounded shadow-xl" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-xl pb-6 flex items-center justify-center">Add New Admin</h1>
        <label className="mt-2 block text-sm text-gray-600">Email</label>
        <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name="email"  {...register("email")} />
        <label className="mt-2 block text-sm text-gray-600">Password</label>
        <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name="password" type='password' {...register("password")} />
        
        <input className="mt-6 px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit" />
      </form>
      <br />
            {
              !loggedUser.isSignedIn &&   <p style={{color:'red'}}>You have entered wrong Information</p>

    
            }
            <br />
            <br />
            <br />
    </div>
    );
};

export default Login;