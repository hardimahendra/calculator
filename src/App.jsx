import { useState } from 'react'
import { CalcMain } from './components/CalcMain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Calculator</h1>
      <div className="calc-wrapper">
      <div>
        <CalcMain/>
      </div>
      </div>
    </>
  )
}

export default App
