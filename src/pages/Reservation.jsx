import {useState} from 'react';
import Button from '../components/Button';
import restaurantInterior from './img/restaurante_interior.jpg';
import { addReservation } from '../utils/dynamodb';

import './css/reservation.css'

function Reservation () {
    
    const [form, setForm] = useState({
        name: '',
        numberPhone: '',
        numberPeople: '',
        reservationDate: ''


    })


    return (
        <section className = "app_container section_spacers">
        <div className="reservation_container">
            <div className='form_reservation'>
                <form className='form_data'>
                    <h2>¿Listo para hacer tu reservación?</h2>                     
                    <label>Nombre:</label>
                    <input type='text' name='name' placeholder='Introduce tu nombre completo' value={form.name} onChange={(e) => setForm ({...form, name: e.target.value})}  required/>
                    <label>Número de teléfono:</label>
                    <input type='number' name='numberPhone' value={form.numberPhone} onChange={(e) => setForm({...form, numberPhone: e.target.value})} required/>
                    <label>Número de personas:</label>
                    <input type='number' name='numberPeople' value={form.numberPeople} onChange={(e) => setForm({...form, numberPeople: e.target.value})} required/>
                    <label>Fecha de reservación: </label>
                    <input type='date' name='reservationDate' value={form.reservationDate} onChange={(e) => setForm({...form, reservationDate: e.target.value})} required/>
                    <Button onClick={(e) =>{
                        addReservation({
                            id_reservaciones: 2,
                            name: form.name,
                            numberPhone: form.numberPhone,
                            numberPeople: form.numberPeople,
                            reservationDate: form.reservationDate
                        })
                        setForm({
                            name: '',
                            numberPhone: '',
                            numberPeople: '',
                            reservationDate: ''

                        })
                    }} title = "Reservar"/>
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