import React from "react";

import dishPhoto from "./images/platillo-1.jpg";
import dishImg from "./images/platillo-2.jpg";
import dishImage from "./images/platillo-3.jpg";

import './styles/foodcards.css'

function Foodcards (){
    return(
        <section className = "app_container section_spacers">
            <div className="food_container">
                <div className="info_food">
                    <h2>Platillos destacados de nuestro menú</h2>
                    <p>Atendemos todos los requisitos dietéticos, 
                    pero te damos un vistazo de los favoritos de nuestros comensales.
                    Nuestra carta se renueva cada temporada.</p>
                </div>
                <div className="cards_food">
                    <div className="card_dish">
                        <img src={dishPhoto} alt="Platillo" className="img_dish"/>
                            <div className="description_card">
                                <h6>Kobe Koi no yokan</h6>
                                <span>Carne de Buey de Kobe condimentada con la salsa especial de la casa.</span>                                
                            </div>
                    </div>
                    <div className="card_dish">
                        <img src={dishImg} alt="Platillo" className="img_dish"/>
                            <div className="description_card">
                                <h6>Nigiri Shouganai</h6>
                                <span>Amasada de arroz de forma alargada, con la pieza de condimento en la parte superior.</span>                                
                            </div>
                    </div>
                    <div className="card_dish">
                        <img src={dishImage} alt="Platillo" className="img_dish"/>
                            <div className="description_card">
                                <h6>Udon Wabi-sabi</h6>
                                <span>Sopa de miso con fideo japonés y se le añade carne, huevo, setas y toda clase de vegetales.</span>                                
                            </div>   
                    </div>

                </div>
            </div>
        
         </section>
    )
}

export default Foodcards;