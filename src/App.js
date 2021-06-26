import { createContext, useEffect, useState } from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import AddAdmin from '../src/components/Admin/AddAdmin/AddAdmin';
import AddBlog from '../src/components/Admin/AddBlog/AddBlog';
import ManageBlog from '../src/components/Admin/ManageBlog/ManageBlog';
import BlogPage from '../src/components/BlogPage.js';
import Header from '../src/components/Header';
import Homepage from '../src/components/Homepage';
import Login from '../src/components/Login/Login';
import './App.css';
import Dashboard from './components/Admin/Dashboard';
import Footer from './components/Footer';
import PrivateRoute from './lib/PrivateRoute';

export const context = createContext();
function App() {
  const [loggedUser,setLoggedUser]=useState({
    isSignedIn: true,
    email: '',
    password: '',
    error :''
  })
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://evening-caverns-39772.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  const contextData = {
    blogs, 
    setBlogs,
    loggedUser,
    setLoggedUser,
  }
  return (
    <context.Provider value={contextData}>
      <Router>
        <Header/>
        <Switch>
      <Route exact path="/">
        <Homepage/>
      </Route> 
      <Route exact path="/login">
        <Login/>
      </Route>
      <Route path="/blog/:id">
        <BlogPage/>
      </Route>
      <Route path="/addBlog">
        <AddBlog/>
      </Route>
      <Route path="/manageBlog">
        <ManageBlog/>
      </Route>
      <PrivateRoute path="/dashboard">
        <Dashboard />
      </PrivateRoute>
      <Route path="/addAdmin">
        <AddAdmin />
      </Route>
      <Route path="/login"> 
          <Login/>
        </Route>
      <Route path="*">
        <h1 style={{textAlign: "center"}}>page not found</h1>
      </Route>
      
      </Switch>
      <Footer/>
      </Router>
    </context.Provider>
  );
}

export default App;
