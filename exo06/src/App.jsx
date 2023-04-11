
import { useState } from 'react'
import './App.css'
import Horloge from './components/horloge/horloge'
import DateDuJour from './components/date-du-jour/date-du-jour'

function App() {
  const [hoursOrDate, setHoursOrDate] = useState('date')

  return (
    <div className="App">
      <button onClick={() => setHoursOrDate(hoursOrDate === "date" ? "hours" : "date")}>{hoursOrDate === 'date' ? 'Switch to hours' : 'Switch to date'}</button>
      {hoursOrDate === "hours" && <Horloge />}
      {hoursOrDate === "date" && <DateDuJour />}
    </div>
  )
}

export default App
