import './App.css'
import ListClothes from './components/list-clothes/list-clothes'
import List from './data/flowers.json'

function App() {


  return (
    <div className="App">
      <ListClothes listC={List} />

    </div>
  )
}

export default App
