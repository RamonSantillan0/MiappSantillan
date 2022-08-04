import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProduct, getItemsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        if(categoryId) {
            getItemsByCategory(categoryId).then(response => {
                setProducts(response)  
              }).catch(error => {
                  console.log(error)
              }).finally(() => {
                  setLoading(false)
              }) 
        } else {
           getProduct().then(response => {
                setProducts(response)  
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            }) 
        }          
    }, [categoryId])

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