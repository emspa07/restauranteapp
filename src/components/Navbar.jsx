//Librerias
import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {BiDotsVerticalRounded} from "react-icons/bi";

//Estilos 
import "./styles/navbar.css";

//Componentes 
import logoNikko from "./images/logo.svg";
import {Home} from "../pages/Home";

function Navbar (){
    return (
    <Router>
         <header>
            <div className="app_container nav_container">
                <img src = {logoNikko} alt="Logo-Restaurant" className="nav_logo"/>
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
    </Router> 
    )
}

export default Navbar;