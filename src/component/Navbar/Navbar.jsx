import './Navbar.css'
import 'https://kit.fontawesome.com/a076d05399.js'

import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header>
        <nav>
            <Link to='/' id="logo">
                Mi Tienda
            </Link>
            <input type="checkbox" id="btnMenu"/>
            <label htmlFor="btnMenu" className="toggleMenu">
                <i className="fas fa-bars"></i>
            </label>
            <div className="links">
                <Link to='/category/computacion'>Computacion</Link>
                <Link to='/category/deportes'>Deportes y Fitness</Link>
                <Link to='/category/electrodomesticos'>Electrodomesticos</Link>
                <Link to='/category/juguetes'>Juegos y Juguetes</Link>
            </div>
            <CartWidget />
        </nav>
    </header>
  )
}
