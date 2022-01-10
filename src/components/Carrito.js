import React from 'react'
import carrito from './carrito.svg'
import "../estilos/Carrito.css";
function Carrito() {
    return (
            <img src={carrito} className="stcarrito" alt="carrito" />
    )
}

export default Carrito