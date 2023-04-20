import React from "react";
import Button from "./Button";
import "./styles/jumbotron.css";


function Jumbotron (){
    return (
        <section className="jumbotron-container">
                <div className="hero_text">
                    <h1>Un exquisito portal al corazón de Japón desde 1989</h1>
                    <p>Experimente nuestro menú de temporada en un relajante espacio dentro de la ciudad. </p>
                    <Button title="Reservar"></Button>               
                 </div>

            </section>
    )}

export default Jumbotron;