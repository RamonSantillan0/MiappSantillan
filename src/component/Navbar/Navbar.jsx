import './Navbar.css'
import 'https://kit.fontawesome.com/a076d05399.js'

import React from 'react'

export default function Navbar() {
  return (
    <header>
        <nav>
            <label id="logo">
                Mi Tienda
            </label>
            <input type="checkbox" id="btnMenu"/>
            <label for="btnMenu" class="toggleMenu">
                <i class="fas fa-bars"></i>
            </label>
            <div className="links">
                <a href="">Home</a>
                <a href="">Products</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>
        </nav>
    </header>
  )
}
