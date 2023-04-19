import React from "react";
import { BrowserRouter as Link, Routes, Route } from "react-router-dom";
import {BiDotsVerticalRounded} from "react-icons";

import "./styles/navbar.css"


function Navbar (){
    return (
    <>
        <header>
            <div className="nav_container">
            <nav>
                <input type = "checkbox" id = "menu_responsive"/>
                <label htmlFor="menu_responsive" className = "vertical-btn"><BiDotsVerticalRounded/></label>
               <ul className="nav_list">
               <li><Link to ="/" className="link">Home</Link></li>                
                <li><Link to ="/about" className="link">Conócenos</Link></li>
                <li><Link to ="/menu" className="link">Menú</Link></li>
                <li><Link to ="/reservation" className="link">Reservaciones</Link></li>
               </ul>
                
            </nav>
            </div>
 
        </header>
        <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>

    <Routes>
      <Route exact path="/fooddishes" element={<FoodDishes/>}/>
    </Routes>

    <Routes>
      <Route exact path="/blog" element={<Blog />}/>
    </Routes>

    <Routes>
      <Route exact path="/reservation" element={<Reservation />}/>
    </Routes>
    </>
    )
}

export {Navbar};