import './Navbar.css'
import 'https://kit.fontawesome.com/a076d05399.js'

import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

export default function Navbar() {
  return (
    <header>
        <nav>
            <label id="logo">
                Mi Tienda
            </label>
            <input type="checkbox" id="btnMenu"/>
            <label for="btnMenu" class="toggleMenu">
                <i className="fas fa-bars"></i>
            </label>
            <div className="links">
                <a href="">Computacion</a>
                <a href="">Deportes y Fitness</a>
                <a href="">Electrodomesticos</a>
                <a href="">Juegos y Juguetes</a>
            </div>
            <CartWidget />
        </nav>
    </header>
  )
}
