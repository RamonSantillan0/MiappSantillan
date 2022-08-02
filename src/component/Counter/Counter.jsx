import React from 'react'
import { useState, useEffect } from 'react'
import CartWidget from '../CartWidget/CartWidget'

const Counter = ({ show, stock, initial, onAdd }) => {
    const [count, setCount] = useState(0)

    useEffect(() =>{
      console.log('callback useEffect')
      return() => console.log('el componente va a desmontarse')

    }, [show])

    const decrement = () => {
      if(count > initial) {
        setCount(count - 1)
      }
        
    }

    const increment = () => {
      if(count < stock){
        setCount(count + 1)
      }
        
    }
console.log('va a renderizar')
  return (
    <div>
        <button onClick={decrement}>-</button>
        <p>{count}</p>
        <button onClick={increment}>+</button>
        <br />
        <button className="btn btn-primary" onClick={() => onAdd(count)}>Agregar al Carrito</button>
        <CartWidget />
    </div>
  )
}

export default Counter