import React from "react";
import fotoRestaurante from "./images/pexels-eva-bronzini-5765479.jpg"
import fotoChef from "./images/Sushi-chef.jpeg"

import './styles/about.css'


function About () {
    return (
        <section className="about-container">
            <div className="app_container section_spacers">
                <div className="info_foto_about">
                    <div className="foto_about">
                        <img src={fotoRestaurante} alt="Restaurant" className="img_restaurant"/>
                        <div className="quote">
                            <p>“La increíble vivencia ‘Chef en Casa’ de Nikko nos sumerge en un mundo de hedonismo”.</p>
                            <h6>- Gather Journal</h6>
                        </div>    
                    </div>
                    <div className="info_about">
                        <h2>Un lugar agradable para toda la familia.</h2>
                        <p>
                        Nuestro caleidoscopio de sabores surgen de los artistas en la cocina, en la barra de sushi y en las mentes creativas 
                        que han llevado al restaurante Nikko a su éxito. 
                        </p>
                        <img src={fotoChef} alt="Chef" className="img_chef"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About