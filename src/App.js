import React from "react"
import 'boxicons/css/boxicons.min.css';
import "./App.css"
import {BrowserRouter as Router , Route, Routes } from "react-router-dom";

import MainLayout from './Components/MainLayout/MainLayout';
import AllProduct from './Pages/AllProduct';
import AddProduct from './Pages/AddProduct';
import Orders from './Pages/Order';
import Calendar from './Pages/Calendar';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import ProductStatus from "./Pages/ProductStatus"
import ProductTraking from "./Pages/ProductTraking"
import Settings from "./Pages/Settings"
import User from "./Pages/User"
function App() {
  return(
    <div>
      
      <Router>
            <Routes>
              <Route path="/" element={<MainLayout />}  >
               <Route path ="/AllProduct" element={<AllProduct/>}/>
               <Route path="/AddProduct" element={<AddProduct/>}/>
               <Route path="/Orders" element={<Orders/>}/>
               <Route path="/Calendar" element={<Calendar/>}/>
               <Route path="/ProductStatus" element={<ProductStatus/>}/>
               <Route path ="/ProductTraking" element={<ProductTraking/>}/>
               <Route path ="/Settings" element ={<Settings/>}/>
               <Route path="/Dashboard" element={<Dashboard/>}/>
               <Route path ="/Home" element={<Home/>}/>
               <Route path ="/User" element ={<User/>}/>
              </Route>
            </Routes>
            </Router>
      
     
    </div>
  );
}

export default App;
