import { useState, useEffect } from "react"
import { getItem } from "../../asyncMock"
import ItemDetail  from "../ItemDetail/ItemDetail"


export const ItemDetailContainer = (props) => {

    const [products, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getItem().then(response => {
          setProduct(response)  
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    
        return (
            <>
            <h1>Detalle de productos</h1>
                <ItemDetail products={products} />
            </>
        )
}
