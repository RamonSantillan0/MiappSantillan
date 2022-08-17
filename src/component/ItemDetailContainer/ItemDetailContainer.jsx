import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
//import { getItem } from "../../asyncMock"
import ItemDetail  from "../ItemDetail/ItemDetail"
import { getDoc, doc} from 'firebase/firestore'
import { db } from '../../services/firebase/index'


export const ItemDetailContainer = ({ addItem }) => {

    const [products, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() => {

        getDoc(doc(db, 'products', productId)).then(response => {
            console.log(response)
            const values = response.data()

            const product = {id: response.id, ...values}
            setProduct(product)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
            

//        getItem(params.productId).then(response => {
//          setProduct(response)  
//        }).catch(error => {
//            console.log(error)
//        }).finally(() => {
//           setLoading(false)
//        })
    }, [productId])

    
        return (
            <>
            <h1>Detalle de productos</h1>
                <ItemDetail products={products} addItem={({ addItem })}  />
            </>
        )
}
