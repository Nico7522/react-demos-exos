import Counter from '../containers/counter/counter'
import './App.css'
import FruitList from './components/fruit-list/fruit-list'
import Multi3 from './components/multi-3/multi-3'
import PeopleTable from './components/people-table/people-table'
import TemperatureConvertForm from './components/temperature-convert-form/temperature-convert-form'
import Welcome from './components/welcome/welcome'
import fruits from "./data/fruits.json"
import peopleData from './data/people.json'

function App() {
  // const [state, setState] = useSate('name')

  return (
    <div className="App">
      <h1>Demo 01</h1>
      <Welcome name="Nicolas"/>

      <h2>Demo 03</h2>

      <FruitList fruits={fruits} />
      <PeopleTable people={peopleData} />

      <h2>Demo 04 - le state</h2>
      <Multi3 />

      <h2>Demo 05 - les formulaires</h2>
      <TemperatureConvertForm />

      <h2>Demo 06 - la communication</h2>
      <Counter />
    </div>
  )
}

export default App
