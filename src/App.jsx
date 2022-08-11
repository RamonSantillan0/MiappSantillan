import './App.css'
import ItemListContainer from './component/ItemListContainer/ItemListContainer'
import Navbar from './component/Navbar/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { ItemDetailContainer } from './component/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'

function App() {


  return (
    <div className='App'>
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Todos nuestros productos" />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting="Estamos filtrando" />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<h1>CART</h1>} />
        </Routes>
      </BrowserRouter>
   </CartContextProvider>
    </div>
  )
}

export default App
