
import './App.css'
import Counter from './components/counter/counter'

function App() {
  const value = 2

  return (
    <div className="App">
      <Counter val={value} />
    </div>
  )
}

export default App
