import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'

const Cart= () => {
    const { cart, clearCart, getTotal} = useContext(CartContext)  

    const total = getTotal()

    return(
        <>
        <div>
            <h1 className=''>Todos tus productos seleccionados</h1>
        </div>
            <div className='' >
            <button onClick={() => clearCart()} className="">Borrar todo</button>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3 className=''>Total: ${total}</h3>
            <button className="">Comprar</button>
            </div>

        </>
    )
}

export default Cart