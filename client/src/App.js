import React from 'react';
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import Home from "./components/Screen/Home/Home";
import Profile from "./components/Screen/Profile/Profile";
import Signin from "./components/Screen/Signin/Signin";
import Signup from "./components/Screen/Signup/Signup";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Route  path='/'  exact component={Home}/>
    <Route  path='/Signin'  component={Signin}/>
    <Route  path='/signup'  component={Signup}/>
    <Route  path='/profile'  component={Profile}/>
    
    </BrowserRouter>
  );
}

export default App;
