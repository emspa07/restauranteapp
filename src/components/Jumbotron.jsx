import React from "react";
import "./styles/jumbotron.css";
import { Link } from "react-router-dom";


function Jumbotron (){
    return (
        <section className="jumbotron-container">
                <div className="hero_text">
                    <h1>Un exquisito portal al corazón de Japón desde 1989</h1>
                    <p>Experimente nuestro menú de temporada en un relajante espacio dentro de la ciudad. </p>
                    <Link to="/Menu"><button className="button-jumbotron">Menú</button></Link>
                 </div>

            </section>
    )}

export default Jumbotron;