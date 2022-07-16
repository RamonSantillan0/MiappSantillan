import './App.css'
import ItemListContainer from './component/ItemListContainer/ItemListContainer'
import Navbar from './component/Navbar/Navbar'

function App() {

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Hola coders" />
    </div>
  )
}

export default App
