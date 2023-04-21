
import Button from '../components/Button';
import restaurantInterior from './img/restaurante_interior.jpg';

import './css/reservation.css'

function Reservation () {
    return (
        <section className = "app_container section_spacers">
        <div className="reservation_container">
            <div className='form_reservation'>
                <form className='form_data'>
                    <h2>¿Listo para hacer tu reservación?</h2>                     
                    <label>Nombre:</label>
                    <input type='text' name='name' placeholder='Introduce tu nombre completo' required/>
                    <label>Número de teléfono:</label>
                    <input type='number' name='numberPhone' required/>
                    <label>Número de personas:</label>
                    <input type='number' name='numberPeople' required/>
                    <label>Fecha de reservación: </label>
                    <input type='date' name='reservationDate' required/>
                    <Button title = "Reservar"/>
                </form>
                <div className='reservation_img'>
                    <img src={restaurantInterior} alt='Restaurante-Interior' className="img_restaurantint"/> 
                </div>                
            </div> 

        </div>
        </section>
    )
}

export default Reservation;