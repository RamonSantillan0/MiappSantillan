import './App.css'
import ItemListContainer from './component/ItemListContainer/ItemListContainer'
import Navbar from './component/Navbar/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <div class="App">
      <Navbar />
      <ItemListContainer greeting="Hola coders" />
    </div>
  )
}

export default App
