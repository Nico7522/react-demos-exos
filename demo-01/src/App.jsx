import './App.css'
import FruitList from './components/fruit-list/fruit-list'
import Welcome from './components/welcome/welcome'
import fruits from "./data/fruits.json"

function App() {
  // const [state, setState] = useSate('name')

  return (
    <div className="App">
      <h1>Demo 01</h1>
      <Welcome name="Nicolas"/>

      <h2>Demo 03</h2>

      <FruitList fruits={fruits} />
    </div>
  )
}

export default App
