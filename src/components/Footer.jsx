//Librerias
import React from "react";
import {FaFacebook, FaTwitter, FaWhatsapp, FaInstagram} from "react-icons/fa";

//Estilos 
import './styles/footer.css';
//Componentes

function Footer (){
    return(
        <footer>
            <section className="app_container section_spacers">
                <div className="footer_logo">
                    <p className="name_restaurant">Nikko</p>
                    <div className="footer_redes">
                        <span><FaFacebook/></span>
                        <span><FaTwitter/></span>
                        <span><FaInstagram/></span>
                        <span><FaWhatsapp/></span>
                    </div>
                </div>
                <div className="info_footer">
                    <div className="address_footer">
                        <h6>Dirección</h6>
                        <ul>
                            <li>Roma Norte, Cuauhtémoc</li>
                            <li>CDMX</li>
                            <li>+52 1 (55) 00 44 23 67</li>
                            <li>contacto@nikkogroup.com.mx</li>
                        </ul>
                    </div>
                    <div className="hours_footer">
                        <h6>Horarios</h6>
                        <ul>
                            <li>Lunes a jueves: 13:00-17:30</li>
                            <li>Viernes a domingo: 18:30-23:30</li>
                        </ul>
                    </div>
                    <div className="copyright">
                    <span> &copy; Todos los derechos reservados | Emily Paulín| 2023</span>
                    </div>
                </div>
            </section>
        </footer>
    )
}
export default Footer;