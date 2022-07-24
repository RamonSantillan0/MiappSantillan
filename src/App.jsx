import './App.css'
import Counter from './component/Counter/Counter'
import ItemListContainer from './component/ItemListContainer/ItemListContainer'
import Navbar from './component/Navbar/Navbar'

function App() {

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Hola coders" />
      <Counter />
    </div>
  )
}

export default App
