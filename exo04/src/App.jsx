import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CalculForm from './components/calcul-form/calcul-form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

    <CalculForm />
    </div>
  )
}

export default App
