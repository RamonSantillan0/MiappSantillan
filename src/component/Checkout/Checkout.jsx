import { useContext,useState } from "react"
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import {addDoc, collection, Timestamp, getDocs, documentId, query, where, writeBatch} from 'firebase/firestore'
import {db} from '../../services/firebase/index'

const Checkout = () => {
    const { cart, clearCart, getTotal, getQuantity } = useContext(CartContext)  
    const [name, setName] = useState("");
    const [phone, setPhone] = useState(0);
    const [mail, setMail] = useState("");

    const totalQuantity = getQuantity()
    const total = getTotal()

     const gnrtOrder = async () => {
        try{
    const order = {
        buyer:{
            name: name,
            phone: phone,
            emai: mail
        },
        items:cart,
        date: Timestamp.fromDate(new Date()),
        total: getTotal()
    }

    const infoIds = cart.map(prod => prod.id)
    const prodRef = collection(db,'products')
    
    const productsAddFirestore = await getDocs(query(prodRef,where(documentId(),'in',infoIds)))
    
    const {docs} = productsAddFirestore
    const nonStock = []

    const batch = writeBatch(db)

    docs.forEach(doc=>{
        const docData = doc.data()
        const dbStock = docData.stock
        
        const prodAdded = cart.find(prod => prod.id === doc.id)
        const prodQuantity = prodAdded?.quantity
        
        if (dbStock >= prodQuantity){
        batch.update(doc.ref, {stock: dbStock - prodQuantity})
        }else{
            nonStock.push ({id: doc.id, ...docData})
        }

    })

    if(nonStock.length === 0) {
        const refOrder = collection(db, 'orders')
        const orderAdded =  addDoc(refOrder, order)
        batch.commit()
        console.log(orderAdded.id)
        clearCart()
    } else {
        console.log('Sin stock')
    }


    }catch(error) {
    }finally {   
    console.log('La orden se creo correctamente')
    }
} 

    return(
        <div className="mb-3">
            <h2>Complete los campos para poder terminar la compra</h2>
            <form >
                <label>Nombre: 
                    <input className="form-control" type="text" onChange={(e) => {setName(e.target.value);}}/>
                </label>
                <br />
                <label>Email:
                    <input className="form-control" type="text" onChange={(e) => {setMail(e.target.value);}}/>
                </label>
                <br />
                <label>Telefono:
                    <input className="form-control" type="number" onChange={(e) => {setPhone(e.target.value);}}/>
                </label>
                <br />
            </form>

            <div className="detalle">
                <h2>Detalle de tu compra</h2>
                { cart.map(p => <CartItem key={p.id} {...p}/>) }
                <h3>Total: ${total}</h3>
                <Link className="btn btn-primary"to='/cart'>Volver al carrito</Link>
                <button className="btn btn-primary m-2" onClick={gnrtOrder}>Comprar</button>
            </div>
        </div>
    )
}

export default Checkout