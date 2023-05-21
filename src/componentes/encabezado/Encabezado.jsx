import React from 'react'
import "./encabezado.css"


const Encabezado = ({ principal }) => {
  return (
    <div className='contenedor-texto'>
      <h1 className='texto'>🎮{principal}🎮</h1>
    </div>
  )
}

export default Encabezado