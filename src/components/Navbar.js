import React from 'react';
import Carrito from './Carrito.js';
import ItemListContainer from './ItemListContainer.js';
const Navbar = () => {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Home   </a>
                        <a className="nav-item nav-link" href="#">Servicios </a>
                        <a className="nav-item nav-link" href="#">Precios   </a>
                        <a className="nav-item nav-link" href="#" ><Carrito /> 4</a>
                    </div>
                </div>
            </nav>
        )
}
export default Navbar;