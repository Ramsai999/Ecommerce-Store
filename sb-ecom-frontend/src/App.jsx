import { useState } from 'react'
import { FaBeer } from 'react-icons/fa'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div 
        className='flex items-center justify-center h-screen bg-gray-800
        text-2xl font-bold text-white'>
          Welcome" <FaBeer/> "
        
      </div>
      
    </>
  )
}

export default App
