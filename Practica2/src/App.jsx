import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contador from './components/Contador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <Contador />
      </div>
    </>
  )
}

export default App
