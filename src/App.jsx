import './App.css'
import ItemListContainer from './component/ItemListContainer/ItemListContainer'
import Navbar from './component/Navbar/Navbar'
import Counter from './component/Counter/Counter'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { ItemDetailContainer } from './component/ItemDetailContainer/ItemDetailContainer'

function App() {
  const [show, setShow] = useState(true)

  const handleOnAdd = (quantity) => {
    console.log('Cantidad de items agregados', quantity)
  }


  return (
    <div class="App">
      <Navbar />
      {/*<Counter show={show} stock={10} initial={1} onAdd={handleOnAdd}/>*/}
      <ItemListContainer show={show} setShow={setShow} greeting="Hola coders" />
      <ItemDetailContainer/>
    </div>
  )
}

export default App
