import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
//import { getProduct, getItemsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/index'

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRefe = !categoryId
            ? collection(db, 'products')
            : query(collection(db, 'products'), where('category', '==',categoryId))

        getDocs(collectionRefe).then(response => {
            console.log(response)
            const products = response.docs.map(doc => {
                const values = doc.data()
                return { id: doc.id, ...values}
            })
            setProducts(products)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })


      //  if(categoryId) {
      //     getItemsByCategory(categoryId).then(response => {
      //          setProducts(response)  
      //        }).catch(error => {
      //            console.log(error)
      //        }).finally(() => {
      //            setLoading(false)
      //        }) 
      //  } else {
      //     getProduct().then(response => {
      //          setProducts(response)  
      //      }).catch(error => {
      //          console.log(error)
      //      }).finally(() => {
      //          setLoading(false)
      //      }) 
      //  }          
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