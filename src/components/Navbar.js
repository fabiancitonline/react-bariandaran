import React, {useState, useEffect} from 'react'
import Carrito from './Carrito'
import '../estilos/Navbar.css'

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
      <ul className="list">
      <li className="items" href="#">Home</li>
      <li className="items" href="#">Servicios</li>
      <li className="items" href="#">Precios</li>
      <li className="items" href="#" ><Carrito /> 4</li>
    </ul>
      )}

      <button onClick={toggleNav} className="btn">Menú</button>
    </nav>
  )
}