
import './App.css'
import Counter from './components/counter/counter'
import Modal from './components/test-modal/modal'

function App() {
  const value = 2

  return (
    <div className="App">
      <Counter val={value} />
      <Modal />
    </div>
  )
}

export default App
