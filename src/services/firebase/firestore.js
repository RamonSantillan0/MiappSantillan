import { getDocs, getDoc, doc, collection,  query, where } from 'firebase/firestore'
import { db } from './index'

export const getProducts = (categoryId) => {
     
    const collectionRefe = !categoryId
          ? collection(db, 'products')
          : query(collection(db, 'products'), where('category', '==',categoryId))

      return getDocs(collectionRefe).then(response => {
         console.log(response)
          const products = response.docs.map(doc => {
              const values = doc.data()
              return { id: doc.id, ...values}
          })
           return products
      }).catch(error => {
          return error
      })
}

export const getItem = (productId) => {
           return getDoc(doc(db, 'products', productId)).then(response => {
            console.log(response)
            const values = response.data()
            const product = {id: response.id, ...values}
            return product
        }).catch(error => {
            return error
        })
}
