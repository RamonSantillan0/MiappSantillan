import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CartItem = ({ id, name, quantity, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <>
        <div >        
            <div className=''>
                <h4 className=''>{name}</h4>
                <p className=''>Cantidad: {quantity} </p>
                <h6 className='' >Precio x Unidad: ${price}</h6>
                <h6 className=''> Subtotal: ${price * quantity}</h6>
            </div>
        <button className='' onClick={() => handleRemove(id)}>Eliminar</button>
        </div>
        <hr />
       </> 
    )
}

export default CartItem