import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")

  return (
    <div className='h-screen flex w-full' style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className='outline-none shadow-xl bg-red-600 rounded-3xl px-2 text-white' onClick={()=>setcolor("Red")}>Red</button>
          <button className='outline-none shadow-xl bg-green-700 rounded-3xl px-2 text-white' onClick={()=>setcolor("Green")}>Green</button>
          <button className='outline-none shadow-xl bg-blue-700 rounded-3xl px-2 text-white' onClick={()=>setcolor("Blue")}>Blue</button>
          <button className='outline-none shadow-xl bg-orange-400 rounded-3xl px-2 text-white' onClick={()=>setcolor("Orange")}>Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
