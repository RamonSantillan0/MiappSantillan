import { useState, useEffect } from "react"
import { getProduct } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProduct().then(response => {
          setProducts(response)  
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

//const productsTransform = products.map(product => (
//    <li>{product.name}</li>
//))
//console.log(productsTransform)


if(loading) {
    return <h1>Cargando productos...</h1>
}

    return (
        <>
            <h1>{props.greeting}</h1>
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer