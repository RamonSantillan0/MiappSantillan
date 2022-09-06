import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, getTotal, getQuantity } = useContext(CartContext)  

    const totalQuantity = getQuantity()
    const total = getTotal()

    if(totalQuantity === 0) {
        return (
            <h1 className="cartText">There are no items in your cart</h1>
        )
    }

    return (          
        <div>
            <h1>Cart</h1>
            <hr />
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className='btn btn-primary m-2'>Limpiar carrito</button>
            <Link to='/checkout' className='btn btn-primary m-2'>Checkout</Link>
        </div>
    )
}

export default Cart