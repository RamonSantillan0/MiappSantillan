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
                <a href="">Categoria 1</a>
                <a href="">Categoria 2</a>
                <a href="">Categoria 3</a>
                <a href="">Categoria 4</a>
            </div>
            <CartWidget />
        </nav>
    </header>
  )
}
