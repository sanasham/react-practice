import React, { useState } from 'react'

import './App.css'
import Taskify from './components/Taskify'

const App:React.FC = ()=> {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Taskify />
        </div>
    </>
  )
}

export default App
