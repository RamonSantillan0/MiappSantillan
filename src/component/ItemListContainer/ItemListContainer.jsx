import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import { getProducts } from "../../services/firebase/firestore"
import { useAsync } from '../../hooks/useAsync'


const ItemListContainer = (props) => {


    const { categoryId } = useParams()

    const { isLoading, data, error } = useAsync(() => getProducts(categoryId), [categoryId])


if(isLoading) {
    return <h1>Cargando productos...</h1>
}

if(error) {
    return <h1>Hubo un error</h1>
}

if(data.length === 0) {
    return categoryId ? <h1>No hay productos en la categoria {categoryId}</h1> : <h1>No hay productos disple</h1>
}

    return (
        <>
            <h1>{props.greeting}</h1>
            <ItemList products={data} />
        </>
    )
}

export default ItemListContainer