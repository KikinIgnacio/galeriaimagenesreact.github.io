import React from 'react'
import "./card.css"


const Card = ({ link, titulo, descripcion }) => {
  return (
    <div className='contenedor-tarjeta'>
      <div>
        <img src={link} className='icono' />
      </div>
      <div className='tarjeta' >
        <strong>{titulo}</strong>
        <p>{descripcion}</p>
      </div>
    </div>
  )
}

export default Card