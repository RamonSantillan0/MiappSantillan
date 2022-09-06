import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail  from "../ItemDetail/ItemDetail"
import { getItem } from '../../services/firebase/firestore'


export const ItemDetailContainer = ({ addItem }) => {

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() => {

        getItem(productId).then(response => {
            setProduct(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if(loading){
        return <h1>Cargando...</h1>
    }

    
        return (
            <>
            <h1>Detalle de productos</h1>
                <ItemDetail {...product} addItem={({ addItem })}  />
            </>
        )
}
